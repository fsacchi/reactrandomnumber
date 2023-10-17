const qrcode = require('qrcode');
const { address } = require('ip');

const port = 8081; // A porta padrão do servidor de desenvolvimento

const serverURL = `http://${address()}:${port}`;
qrcode.toString(serverURL, { type: 'terminal' }, (err, url) => {
  if (err) {
    console.error('Erro ao gerar o QR code:', err);
  } else {
    console.log('Scan the QR code below with your Android device:');
    console.log(url);
  }
});