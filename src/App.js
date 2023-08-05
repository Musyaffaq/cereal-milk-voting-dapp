import { useState } from "react";
import { ethers } from "ethers";
// Import ABI Code to interact with smart contract
import Vote from "./artifacts/contracts/Vote.sol/Vote.json";
import "./App.css";

// The contract address
const voteAddress = "0x7ECa4b21F31883B9C7EcE9b06f82062be6AEaD01";

function App() {
  // Property Variables

  const [currentCerealVotes, setCurrentCerealVotes] = useState("-");
  const [currentMilkVotes, setCurrentMilkVotes] = useState("-");

  // Requests access to the user's Meta Mask Account
  // https://metamask.io/
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // Fetches the current cereal votes
  async function fetchCerealVotes() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(voteAddress, Vote.abi, provider);
      try {
        const data = await contract.getCerealVotes();
        console.log("data: ", data);
        setCurrentCerealVotes(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Fetches the current milk votes
  async function fetchMilkVotes() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(voteAddress, Vote.abi, provider);
      try {
        const data = await contract.getMilkVotes();
        console.log("data: ", data);
        setCurrentMilkVotes(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Vote for cereal
  async function voteCereal() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Create contract with signer
      const contract = new ethers.Contract(voteAddress, Vote.abi, signer);
      const transaction = await contract.voteCereal();

      await transaction.wait();
      fetchCerealVotes();
    }
  }

  // Vote for milk
  async function voteMilk() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Create contract with signer
      const contract = new ethers.Contract(voteAddress, Vote.abi, signer);
      const transaction = await contract.voteMilk();

      await transaction.wait();
      fetchMilkVotes();
    }
  }

  // Return
  return (
    <div className="App">
      <div className="App-header">
        <div className="description">
          <h1>Which one are you!</h1>
          <h3>Cereal first or Milk first?</h3>
        </div>
        <div className="custom-buttons">
          <button onClick={requestAccount} style={{ backgroundColor: "red" }}>
            Connect MetaMask Wallet
          </button>
        </div>
        <div className="custom-buttons">
          <button
            onClick={fetchCerealVotes}
            style={{ backgroundColor: "green" }}
          >
            Fetch Cereal Votes
          </button>
          <button onClick={fetchMilkVotes} style={{ backgroundColor: "green" }}>
            Fetch Milk Votes
          </button>
        </div>
        <div className="custom-buttons">
          <button onClick={voteCereal} style={{ backgroundColor: "blue" }}>
            Vote Cereal
          </button>
          <button onClick={voteMilk} style={{ backgroundColor: "blue" }}>
            Vote Milk
          </button>
        </div>
        <h2 style={{ display: "inline-block", float: "left" }}>
          Cereal Votes: {currentCerealVotes} &emsp; Milk Votes:{" "}
          {currentMilkVotes}
        </h2>
      </div>
    </div>
  );
}

export default App;
