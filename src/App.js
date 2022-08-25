import { useState } from 'react';
import QRCode from 'react-qr-code';
import QRCodeLink from 'qrcode';
import './App.css';
 
function App() {
const [link , setLink] = useState('');
const [qrcodelink, setQrCodeLink] = useState('');


function handleGenerate(link_url){
  QRCodeLink.toDataURL(link_url,{
    width:600,
    margin:3,
  },function(err, url){
    setQrCodeLink(url);
  })
}

function handleQrCode(e){
  setLink(e.target.value);
  handleGenerate(e.target.value)
}
 

  return (
    <div className="container">
      <QRCode
      value={link}
      />
      <input className='input' placeholder='Digite o seu link...'
      value={link}
      onChange={(e) => handleQrCode(e)}
      />

      <a href={qrcodelink} download={`qrcode.png`} className='button'>Baixar QRCode</a>

    </div>
  );
}

export default App;
