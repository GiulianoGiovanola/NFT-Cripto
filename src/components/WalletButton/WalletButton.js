import React from "react";
import {
  useOnboardContext,
  useAddress,
  useOnboard,
  useWallet,
} from "../../contexts/OnboardContext";
import { truncateWeb3Address } from "../../services/onboard/helpers";
import styles from "./WalletButton.module.css"

const WalletButton = () => {
  const { linkWallet, resetWallet } = useOnboardContext();
  const onboard = useOnboard();
  const wallet = useWallet();
  const address = useAddress();

  return (
    <button
      className= {styles["button"]}
      onClick={
        !wallet.provider ? linkWallet : address ? resetWallet : linkWallet
      }
      disabled={onboard ? false : true}
    >
      {!wallet.provider
        ? `Connect wallet`
        : address
        ? `${truncateWeb3Address(address)}`
        : `Connect wallet`}
    </button>
  );
};

export default WalletButton;
