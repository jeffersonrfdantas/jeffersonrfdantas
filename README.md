# Ponto Eletrônico Web para Professores

Sistema simples, responsivo e mobile-first para registro de presença de professores com:

- identificação por nome ou matrícula;
- foto capturada no momento do registro pela câmera do dispositivo;
- latitude e longitude capturadas via GPS do navegador;
- data e hora automáticas no momento do envio;
- integração gratuita com Google Apps Script, Google Drive e Google Sheets.

## Estrutura do projeto

```text
.
├── index.html                 # Interface web
├── styles.css                 # Estilos mobile-first
├── script.js                  # Câmera, foto, geolocalização e envio
└── google-apps-script/
    └── Code.gs                # Back-end para Google Apps Script
```

## Como executar o front-end

As APIs de câmera (`MediaDevices`) e localização (`Geolocation`) exigem ambiente seguro. Portanto, hospede a página em HTTPS, por exemplo:

- GitHub Pages;
- Google Sites;
- Netlify;
- Vercel;
- qualquer hospedagem com certificado SSL ativo.

Para testes locais, `http://localhost` também é aceito por navegadores modernos.

## Configuração do Google Apps Script

1. Crie uma planilha no Google Sheets.
2. Copie o ID da planilha, que fica na URL entre `/d/` e `/edit`.
3. Crie uma pasta no Google Drive para armazenar as fotos.
4. Copie o ID da pasta, que fica na URL depois de `/folders/`.
5. Acesse <https://script.google.com> e crie um novo projeto.
6. Cole o conteúdo de `google-apps-script/Code.gs` no arquivo `Code.gs` do projeto.
7. Preencha as constantes no início do script:

```javascript
const SPREADSHEET_ID = 'COLE_AQUI_O_ID_DA_PLANILHA';
const SHEET_NAME = 'Registros';
const DRIVE_FOLDER_ID = 'COLE_AQUI_O_ID_DA_PASTA_DO_DRIVE';
```

8. Clique em **Implantar > Nova implantação > Aplicativo da Web**.
9. Configure:
   - **Executar como:** Eu;
   - **Quem pode acessar:** Qualquer pessoa com o link, ou Qualquer pessoa.
10. Autorize as permissões solicitadas pelo Google.
11. Copie a URL de implantação terminada em `/exec`.
12. Cole a URL na constante `GOOGLE_APPS_SCRIPT_URL` do arquivo `script.js`.

## Observação sobre CORS

O front-end envia o corpo da requisição como `text/plain;charset=utf-8` para evitar uma requisição preflight `OPTIONS`. Essa abordagem é importante porque o Google Apps Script Web App não funciona como um servidor tradicional em que você controla todos os cabeçalhos CORS e a resposta `OPTIONS`.

## Uso pelos professores

1. Abrir a página hospedada em HTTPS.
2. Digitar nome ou matrícula.
3. Tocar em **Ativar câmera** e permitir o acesso.
4. Tocar em **Capturar foto**.
5. Tocar em **Registrar Ponto** e permitir o acesso à localização.
6. Conferir o alerta de sucesso.

Na planilha, cada registro terá data, hora, nome/matrícula, link da foto no Drive, link do Google Maps, latitude, longitude e precisão aproximada do GPS.
