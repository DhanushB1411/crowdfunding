import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // we are in the browser and meta mask is installed
  web3 = new Web3(window.web3.currentProvider);
} else {
  // we are on the server *OR* meta mask is not running
  // creating our own provider
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/c6131bd1b56c49d8a9d1aadda40cbe25"
  );

  web3 = new Web3(provider);
}

export default web3;
