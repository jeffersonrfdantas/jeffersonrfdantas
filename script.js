// Cole aqui a URL de implantação do seu Google Apps Script Web App.
// Exemplo: https://script.google.com/macros/s/AKfycbx.../exec
const GOOGLE_APPS_SCRIPT_URL = "COLE_AQUI_A_URL_DO_WEB_APP";

const form = document.querySelector("#attendance-form");
const teacherNameInput = document.querySelector("#teacher-name");
const video = document.querySelector("#camera-video");
const canvas = document.querySelector("#photo-canvas");
const cameraPlaceholder = document.querySelector("#camera-placeholder");
const startCameraButton = document.querySelector("#start-camera");
const capturePhotoButton = document.querySelector("#capture-photo");
const switchCameraButton = document.querySelector("#switch-camera");
const submitButton = document.querySelector("#submit-attendance");
const photoStatus = document.querySelector("#photo-status");
const submitStatus = document.querySelector("#submit-status");

let mediaStream = null;
let facingMode = "user";
let capturedPhotoBase64 = "";

// Atualiza os textos de feedback exibidos na interface sem depender apenas de alertas.
function setStatus(element, message, type = "") {
  element.textContent = message;
  element.classList.remove("is-ok", "is-error");

  if (type === "ok") {
    element.classList.add("is-ok");
  }

  if (type === "error") {
    element.classList.add("is-error");
  }
}

// Encerra as trilhas da câmera para economizar bateria e liberar o dispositivo.
function stopCamera() {
  if (!mediaStream) {
    return;
  }

  mediaStream.getTracks().forEach((track) => track.stop());
  mediaStream = null;
}

// Solicita permissão e inicia a câmera. O facingMode permite alternar entre frontal e traseira.
async function startCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    alert("Seu navegador não oferece suporte à câmera. Use Chrome, Edge, Firefox ou Safari atualizado em HTTPS.");
    return;
  }

  stopCamera();

  try {
    mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: { ideal: facingMode },
        width: { ideal: 1280 },
        height: { ideal: 720 },
      },
    });

    video.srcObject = mediaStream;
    video.hidden = false;
    canvas.hidden = true;
    cameraPlaceholder.hidden = true;
    capturePhotoButton.disabled = false;
    capturedPhotoBase64 = "";
    setStatus(photoStatus, "Câmera ativa. Capture a foto antes de registrar.");
  } catch (error) {
    console.error("Erro ao acessar a câmera:", error);
    alert(
      "Não foi possível acessar a câmera. Verifique se você clicou em Permitir e se a página está em HTTPS. Depois, recarregue a página."
    );
    setStatus(photoStatus, "Permissão de câmera negada ou indisponível.", "error");
  }
}

// Congela o frame atual do vídeo no canvas e gera a imagem em base64.
function capturePhoto() {
  if (!mediaStream || video.readyState < 2) {
    alert("Ative a câmera e aguarde a imagem aparecer antes de capturar a foto.");
    return;
  }

  const width = video.videoWidth || 960;
  const height = video.videoHeight || 720;

  canvas.width = width;
  canvas.height = height;
  canvas.getContext("2d").drawImage(video, 0, 0, width, height);

  capturedPhotoBase64 = canvas.toDataURL("image/jpeg", 0.86);
  canvas.hidden = false;
  video.hidden = true;
  cameraPlaceholder.hidden = true;
  setStatus(photoStatus, "Foto capturada com sucesso.", "ok");
}

// Encapsula a Geolocation API em uma Promise para facilitar o uso com async/await.
function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocalização não é suportada neste navegador."));
      return;
    }

    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0,
    });
  });
}

// Valida os dados obrigatórios, captura a localização e monta o payload enviado ao back-end.
async function buildAttendancePayload() {
  const teacherName = teacherNameInput.value.trim();

  if (!teacherName) {
    throw new Error("Digite seu nome ou matrícula antes de registrar o ponto.");
  }

  if (!capturedPhotoBase64) {
    throw new Error("Capture uma foto antes de registrar o ponto.");
  }

  let position;

  try {
    position = await getCurrentPosition();
  } catch (error) {
    console.error("Erro ao capturar localização:", error);
    alert(
      "Não foi possível capturar sua localização. Clique em Permitir quando o navegador solicitar acesso ao GPS e tente novamente."
    );
    throw new Error("Permissão de localização negada ou indisponível.");
  }

  const timestamp = new Date();

  return {
    teacherName,
    timestamp: timestamp.toISOString(),
    localTimestamp: timestamp.toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "medium" }),
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
    accuracy: position.coords.accuracy,
    photoBase64: capturedPhotoBase64,
  };
}

// Envia o registro ao Google Apps Script. O Content-Type text/plain evita preflight CORS.
async function submitAttendance(event) {
  event.preventDefault();

  if (!GOOGLE_APPS_SCRIPT_URL || GOOGLE_APPS_SCRIPT_URL.includes("COLE_AQUI")) {
    alert("Configure a constante GOOGLE_APPS_SCRIPT_URL no arquivo script.js antes de enviar registros.");
    return;
  }

  submitButton.disabled = true;
  setStatus(submitStatus, "Capturando localização e enviando registro...");

  try {
    const payload = await buildAttendancePayload();
    const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.ok) {
      throw new Error(result.message || "Falha ao registrar ponto.");
    }

    setStatus(submitStatus, "Ponto registrado com sucesso!", "ok");
    alert("Ponto registrado com sucesso!");
    form.reset();
    capturedPhotoBase64 = "";
    canvas.hidden = true;
    video.hidden = false;
    setStatus(photoStatus, "Nenhuma foto capturada.");
  } catch (error) {
    console.error("Erro ao registrar ponto:", error);
    setStatus(submitStatus, error.message, "error");
    alert(error.message || "Não foi possível registrar o ponto. Tente novamente.");
  } finally {
    submitButton.disabled = false;
  }
}

// Eventos da interface. A câmera não inicia automaticamente para deixar a permissão clara ao professor.
startCameraButton.addEventListener("click", startCamera);

capturePhotoButton.addEventListener("click", capturePhoto);

switchCameraButton.addEventListener("click", async () => {
  facingMode = facingMode === "user" ? "environment" : "user";
  await startCamera();
});

form.addEventListener("submit", submitAttendance);

window.addEventListener("beforeunload", stopCamera);
