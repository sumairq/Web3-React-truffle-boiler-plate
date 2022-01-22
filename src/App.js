import { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";
import detectEthereumProvider from '@metamask/detect-provider'

function App() {
 
const [web3Api, setweb3Api] = useState({
  provider: null,
  web3: null
});

const [account, setAccount] = useState(null);

  useEffect(() => {
   const loadProvider = async () => {

    const provider = await detectEthereumProvider()

    if (provider){
      provider.request({ method: 'eth_requestAccounts' })
      setweb3Api({
        web3: new Web3(provider),
        provider
      })
    } else {
      console.error("Please, install Metamask")
    }

    
   }

   loadProvider()
  }, [])

  useEffect(() => {
    
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts()
      setAccount(accounts[0])

    }


    web3Api.web3 && getAccount()
  }, [web3Api.web3]);
  
  return (
  <>
  <div className="faucet-wrapper">
    <div className="faucet">
      <span>
        <strong>Account: </strong>
      </span>
      <h1>
        { account ? account : "not connected"}
      </h1>
      <div className="balance-view is-size-2">
        Current Balance: <strong>10</strong> ETH
      </div>
      {/* <button className="btn mr-2" onClick={ async () => {
        const accounts = await window.ethereum.request({method: "eth_requestAccounts"})
        console.log(accounts)
      }}>Enable Ethereum</button> */}
      <button className="btn mr-2">Donate</button>
      <button>Withdraw</button>
    </div>
  </div>
  </>
  );
}

export default App;
