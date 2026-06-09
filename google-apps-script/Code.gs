/**
 * Back-end Google Apps Script para o Ponto Eletrônico Web.
 *
 * COMO CONFIGURAR:
 * 1. Crie uma planilha no Google Sheets para receber os registros.
 * 2. Crie uma pasta no Google Drive para guardar as fotos.
 * 3. Abra https://script.google.com, crie um novo projeto e cole este arquivo como Code.gs.
 * 4. Preencha SPREADSHEET_ID, SHEET_NAME e DRIVE_FOLDER_ID abaixo.
 * 5. Clique em Implantar > Nova implantação > Aplicativo da Web.
 * 6. Em "Executar como", escolha "Eu" para o script poder gravar na sua planilha e pasta.
 * 7. Em "Quem pode acessar", escolha "Qualquer pessoa" ou "Qualquer pessoa com o link".
 * 8. Autorize as permissões solicitadas pelo Google.
 * 9. Copie a URL terminada em /exec e cole na constante GOOGLE_APPS_SCRIPT_URL do arquivo script.js.
 *
 * CORS E GOOGLE APPS SCRIPT:
 * - O Apps Script Web App responde requisições POST externas sem você precisar configurar cabeçalhos CORS manualmente.
 * - No front-end, o envio usa Content-Type text/plain para evitar preflight OPTIONS, pois Web Apps do Apps Script
 *   não permitem personalizar uma resposta OPTIONS completa como servidores Node/Express tradicionais.
 * - Se alterar o front-end para application/json, alguns navegadores podem bloquear a chamada por CORS/preflight.
 */
const SPREADSHEET_ID = 'COLE_AQUI_O_ID_DA_PLANILHA';
const SHEET_NAME = 'Registros';
const DRIVE_FOLDER_ID = 'COLE_AQUI_O_ID_DA_PASTA_DO_DRIVE';

/**
 * Recebe o POST enviado pelo formulário web.
 * @param {GoogleAppsScript.Events.DoPost} e Evento com o corpo JSON em e.postData.contents.
 * @returns {GoogleAppsScript.Content.TextOutput} Resposta JSON para o front-end.
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error('Nenhum dado foi recebido pelo Web App.');
    }

    const payload = JSON.parse(e.postData.contents);
    validatePayload_(payload);

    const timestamp = new Date(payload.timestamp);
    const photoFile = savePhotoToDrive_(payload.photoBase64, payload.teacherName, timestamp);
    const mapsLink = buildGoogleMapsLink_(payload.latitude, payload.longitude);

    appendRegistrationToSheet_({
      timestamp,
      teacherName: payload.teacherName,
      latitude: payload.latitude,
      longitude: payload.longitude,
      accuracy: payload.accuracy,
      photoUrl: photoFile.getUrl(),
      mapsLink,
    });

    return jsonResponse_({
      ok: true,
      message: 'Ponto registrado com sucesso.',
      photoUrl: photoFile.getUrl(),
      mapsLink,
    });
  } catch (error) {
    console.error(error);
    return jsonResponse_({ ok: false, message: error.message });
  }
}

/**
 * Opcional: facilita testar a implantação acessando a URL /exec no navegador.
 */
function doGet() {
  return jsonResponse_({ ok: true, message: 'Web App do Ponto Eletrônico está ativo.' });
}

/**
 * Valida os campos mínimos esperados do front-end.
 * @param {Object} payload Dados recebidos.
 */
function validatePayload_(payload) {
  if (!payload.teacherName || String(payload.teacherName).trim().length < 2) {
    throw new Error('Nome ou matrícula do professor é obrigatório.');
  }

  if (!payload.timestamp || Number.isNaN(new Date(payload.timestamp).getTime())) {
    throw new Error('Timestamp inválido.');
  }

  if (typeof payload.latitude !== 'number' || typeof payload.longitude !== 'number') {
    throw new Error('Latitude e longitude são obrigatórias.');
  }

  if (!payload.photoBase64 || !payload.photoBase64.startsWith('data:image/')) {
    throw new Error('Foto em base64 é obrigatória.');
  }
}

/**
 * Salva a foto base64 no Google Drive.
 * @param {string} photoBase64 Imagem no formato data:image/jpeg;base64,...
 * @param {string} teacherName Nome ou matrícula usado para compor o nome do arquivo.
 * @param {Date} timestamp Data/hora do registro.
 * @returns {GoogleAppsScript.Drive.File} Arquivo criado no Drive.
 */
function savePhotoToDrive_(photoBase64, teacherName, timestamp) {
  const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
  const matches = photoBase64.match(/^data:(image\/[a-zA-Z0-9.+-]+);base64,(.+)$/);

  if (!matches) {
    throw new Error('Formato da foto inválido.');
  }

  const mimeType = matches[1];
  const base64Data = matches[2];
  const extension = mimeType.split('/')[1].replace('jpeg', 'jpg');
  const safeTeacherName = String(teacherName)
    .trim()
    .replace(/[^a-zA-Z0-9_-]+/g, '-')
    .slice(0, 60);
  const fileName = `${Utilities.formatDate(timestamp, Session.getScriptTimeZone(), 'yyyyMMdd-HHmmss')}-${safeTeacherName}.${extension}`;
  const blob = Utilities.newBlob(Utilities.base64Decode(base64Data), mimeType, fileName);

  return folder.createFile(blob);
}

/**
 * Registra os dados na planilha, criando o cabeçalho se necessário.
 * @param {Object} registration Dados tratados do registro.
 */
function appendRegistrationToSheet_(registration) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  ensureHeader_(sheet);

  const dateText = Utilities.formatDate(registration.timestamp, Session.getScriptTimeZone(), 'dd/MM/yyyy');
  const timeText = Utilities.formatDate(registration.timestamp, Session.getScriptTimeZone(), 'HH:mm:ss');

  sheet.appendRow([
    dateText,
    timeText,
    registration.teacherName,
    registration.photoUrl,
    registration.mapsLink,
    registration.latitude,
    registration.longitude,
    registration.accuracy || '',
  ]);
}

/**
 * Cria uma linha de cabeçalho na primeira execução.
 * @param {GoogleAppsScript.Spreadsheet.Sheet} sheet Aba onde os registros serão armazenados.
 */
function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) {
    return;
  }

  sheet.appendRow([
    'Data',
    'Hora',
    'Nome/Matrícula',
    'Link da Foto no Drive',
    'Link do Google Maps',
    'Latitude',
    'Longitude',
    'Precisão GPS (metros)',
  ]);
}

/**
 * Monta um link pesquisável do Google Maps com latitude e longitude.
 * @param {number} latitude Latitude capturada pelo navegador.
 * @param {number} longitude Longitude capturada pelo navegador.
 * @returns {string} URL do Google Maps.
 */
function buildGoogleMapsLink_(latitude, longitude) {
  return `https://www.google.com/maps?q=${latitude},${longitude}`;
}

/**
 * Padroniza a resposta JSON enviada ao front-end.
 * @param {Object} data Objeto que será serializado como JSON.
 * @returns {GoogleAppsScript.Content.TextOutput} Resposta HTTP com MIME JSON.
 */
function jsonResponse_(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
