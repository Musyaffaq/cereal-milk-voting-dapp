# Cereal first OR Milk first? - A Full Stack dApp Project

This project is a simple voting system where people can vote whether they put their cereal first or milk first. It is built on React.js, Solidity and Hardhat. The frontend is deployed on Vercel while the "backend" (which is essentially the smart contract) is deployed using Alchemy.

![image](https://github.com/Musyaffaq/cereal-milk-voting-dapp/assets/18120258/880501e6-3b7c-48e8-a0cc-3c1427d7bb03)

## Features
- Connect with MetaMask: Users are able to interact with this service by connecting their MetaMask wallet
- Fetch Votes: Allows users to see what are the votes currently
- Vote: Allows users to vote for themselves

## Testing it yourself
You require the following:
1. A MetaMask Wallet - https://metamask.io/download/
2. Sepolia ETH currency - get some free Sepolia ETH here - https://sepoliafaucet.com/

Once done, go to the dApp site at https://cereal-milk-voting-dapp.vercel.app/, connect your wallet, and you can vote!

You can see the smart contract that has been deployed here - https://sepolia.etherscan.io/address/0x7ECa4b21F31883B9C7EcE9b06f82062be6AEaD01

## Installation
1. Clone this repo into your local machine
2. Run `npm install` to install all dependencies

The next part depends whether you want to deploy the smart contract on your local machine or on the blockchain.

### Deploying on local machine
1. Run `npx hardhat node` to start your own local blockchain
2. Run `npx hardhat run scripts/deploy.js --network localhost` to deploy the smart contract on that local blockchain
3. Import one of the provided accounts into your MetaMask

### Deploying on the blockchain
1. Rename the `env` file to `.env` and add your own Alchemy API key and the private key of a wallet with Sepolia ETH currency.
1a. Create your own Alchemy account here - https://dashboard.alchemy.com/
2a. Get some free Sepolia ETH here - https://sepoliafaucet.com/
2. Run `npx hardhat run scripts/deploy.js --network sepolia`

Once either of the above is done, start the frontend by running `npm run start`.

If you wish to re-compile the smart contract yourself, first run `npx hardhat clean` and then `npx hardhat compile`.

## Testing
Testing was done using Chai. To run a test on the smart contract, do `npx hardhat test`.

## Credits
This project was done with the help of SMU Blockchain and also this tutorial https://www.youtube.com/watch?v=nNUpA0d6CFo.
