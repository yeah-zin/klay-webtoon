import React, { useState } from "react";
import QRCode from "qrcode.react";
import * as KlipAPI from "./api/UseKlip";
import "./App.css";

const DEFAULT_QR_CODE = "DEFAULT";

function App() {
  const [qrvalue, setQrvalue] = useState(DEFAULT_QR_CODE);
  const onClickGetAddress = () => {
    KlipAPI.getAddress(setQrvalue);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          onClick={() => {
            onClickGetAddress();
          }}
        >
          주소 가져오기
        </button>
        <br></br>
        <br></br>
        <QRCode value={qrvalue} />

        <br></br>
      </header>
    </div>
  );
}

export default App;
