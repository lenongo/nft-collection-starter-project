import { ethers } from "ethers";
import myNft from "../utils/MyNFT.json";
import React, { useEffect, useState } from "react";
import "../styles/App.css";



const walletinfo = (props) => {
  console.log("アドレスは", props.currentAccount);
  return (
    <div className="MyPage">
      <h1>
        MyPage
      </h1>
      <h2>
        <ui>
          あなたの情報
          {props.currentAccount}
        </ui>
      </h2>
    </div>
  );
};

export default walletinfo