import React, { useState, useEffect } from "react";
import {
  useAddress,
  useOnboard,
  useWallet,
  useWalletProvider,
  useBalance,
} from "../../contexts/OnboardContext";
/*import { truncateWeb3Address } from "../../services/onboard/helpers";*/
import WalletButton from "../WalletButton/WalletButton";
import Web3 from "web3";
import { factoryAddress, factoryAbi } from "../../services/onboard/contract";
import styles from "../WalletClient/WalletClient.module.css";

const WalletClient = () => {
  const onboard = useOnboard();
  const wallet = useWallet();
  const address = useAddress();
  const balance = useBalance();
  const provider = useWalletProvider();
  const web3 = new Web3(provider);

  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    if (address) {
      if (balance) {
        const valueEth = web3.utils.fromWei(`${balance}`, "ether");
        const totalFixed = parseFloat(valueEth).toFixed(4);
        setUserBalance(totalFixed);
      }
    } else {
      setUserBalance(0);
    }
  }, [web3.utils, balance, address]);

  const handleMint = async () => {
    console.log("MINT!");
    try {
      const myContract = new web3.eth.Contract(factoryAbi, factoryAddress);

      const saleStarted = await myContract.methods
        .saleStarted()
        .call()
        .catch(function (error) {
          return false;
        });

      const publicSaleStarted = await myContract.methods
        .merkleEnabled()
        .call()
        .catch(function (error) {
          return false;
        });

      const price = await myContract.methods
        .monsterPrice()
        .call()
        .catch(function (error) {
          return false;
        });

      console.log("Sale Started", saleStarted);
      console.log("Sale Started", publicSaleStarted);
      console.log("Price", price);

      const count = 1;

      const mintParams = {
        proof: ["0x0000000000000000000000000000000000000000"],
        leaf: "0x0000000000000000000000000000000000000000",
        count,
      };

      const total = parseInt(count) * parseFloat(price);
      // const totalFixed = parseFloat(total.toFixed(4));
      // const valueEth = web3.utils.toWei(`${totalFixed}`, 'ether');

      await myContract.methods
        .mint(mintParams.proof, mintParams.leaf, parseInt(mintParams.count))
        .send({ from: address, value: total })
        .once("transactionHash", function (hash) {
          // setUserConfirmation(`success`);
          // setHash(hash);
          console.log("Transaction Hash", hash);
        })
        .once("receipt", function (receipt) {
          // setBlChainConfirmation(`success`);
          // setTimeout(() => {
          //   setSuccess(true);
          // }, 1000);
          console.log("Transaction Confirmed", receipt);
        })
        .on("error", function (error, receipt) {
          // handleError(error);
          console.log("Error", error);
        });
    } catch (error) {}
  };

  const cantidad = document.getElementsByClassName("cantidad").value;
  const minus = 1;
  const plus = 2;

  /*function button (num){
    cantidad = cantidad+num;
    if(cantidad === minus){
      document.getElementsByClassName("minus").disabled = true;
    } else if (cantidad === plus){
      document.getElementsByClassName("plus").disabled = true;
    }
  }*/


  return onboard ? (
    <div className="wallet-client">
      {!wallet.provider ? (
        <div>
          <h2>How hungry are you?</h2>
          <h4>Connect to Wallet!</h4>
          <p>
            Price: <span>0,000000000000000005ETH</span>
          </p>
          <WalletButton />
        </div>
      ) : (
        <div>
          <div>
            {wallet.icons && (
              <img src={wallet.icons.iconSrc} alt={wallet.name} />
            )}
          </div>
          <div>
            <h4>Connected with {wallet.name}</h4>
            <p>
              Price: <span>0,000000000000000005ETH</span>
            </p>
            <p>Balance {userBalance} eth</p>
            <div class="cart">
              <div class="addRemove">
                <a href="#" className={styles["minus"]} /*onClick="button(-1)"*/>-</a>
                <input type="numeric" className={styles["cantidad"]} value="1" />
                <a href="#" className={styles["plus"]} /*onClick="button(1)"*/>+</a>
              </div>
            </div>
            {/*<div class="CountSelector_count_wrapper__1KAwk">
              <button>-</button>
              <span>10</span>
              <button disabled="">+</button>
              </div>*/}
            <button disabled={!address ? true : false} onClick={handleMint}>
              Mint
            </button>
            {/*{address ? (
              <p>{truncateWeb3Address(address)}</p>
            ) : (
              <p>Please connect your {wallet.name} wallet to use the app.</p>
            )}*/}
          </div>
        </div>
      )}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default WalletClient;
