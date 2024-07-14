import React from "react";
import WalletClient from "../WalletClient/WalletClient";

const MintGeneral = () => {
  return (
    <>
      <div id="Mint" className="homeContainer" style={{ margin: '2em 0' }}>
        <h1>Minimal Mint</h1>
        <div className="modulesContainer">
          <WalletClient />
        </div>
      </div>
    </>
  );
};

export default MintGeneral;
