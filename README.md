# HealthSync:BlockChain Based Medical Records System with AI
 

## Overview

Welcome to the Ethereum Health Records DApp! This decentralized application is designed to provide a secure and transparent electronic health records (EHR) system on the Ethereum blockchain. Patients can manage their health records, securely share them with doctors, and interact with the system using Metamask for a seamless and decentralized experience.

## Features

- **Decentralized Health Records:**
  - Patients can create and manage their electronic health records on the Ethereum blockchain, ensuring data integrity and security.

- **Metamask Integration:**
  - Seamless integration with Metamask allows users to interact with the DApp using their Ethereum wallet. Patients can pay gas fees, sign transactions, and securely manage their health data.

- **Blockchain Security:**
  - Smart contracts, written in Solidity, power the system, ensuring tamper-proof health records and transparent access controls.

- **Gas-Based Transactions:**
  - Each action within the DApp, such as registering, providing access to doctors, or updating records, incurs a gas cost. Metamask handles gas payments through the user's wallet.

- **Chatbot Assistance:**
  - A GPT-powered chatbot is integrated to provide users with accurate and timely responses to queries, enhancing the overall user experience.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Riddikulus07/HealthSync-BlockChain-Based-Medical-Records-System-with-AI
   cd HealthSync-BlockChain-Based-Medical-Records-System-with-AI
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run Local Development Server:**
   ```bash
   npm start
   ```

4. **Register on Infura and Configure Sepolia Test Network:**
   - Go to [Infura](https://infura.io/) and create an account.
   - Create a new project and obtain your Infura API key.
   - Replace the placeholder in `config.js` with your Infura API key.
   - Select the Sepolia test network on Infura for your project.

5. **Configure Metamask for Sepolia Test Network:**
   - Open Metamask in your browser.
   - Click on the network selection dropdown and choose "Custom RPC."
   - Enter the following details:
      - Network Name: Sepolia Test Network
      - New RPC URL: [Infura Sepolia RPC URL]
      - Chain ID: [Sepolia Chain ID]
   - Save the configuration.

6. **Get Sepolia Ethereum from Sepolia Faucet:**
   - Visit the Sepolia Faucet [link].
   - Follow the instructions to request Sepolia Ethereum (SETH).
   - Use the received SETH for transactions within the DApp.

## Usage

1. **Registering on the DApp:**
   - Create a new account using Metamask with Sepolia Test Network selected.
   - Complete the registration process, paying the associated gas fee in SETH.

2. **Managing Health Records:**
   - Update and manage your electronic health records securely on the Ethereum blockchain.

3. **Interacting with Doctors:**
   - Provide access to your health records to specific doctors by entering their Ethereum addresses.

4. **Chatbot Assistance:**
   - Use the integrated chatbot for quick and accurate responses to your queries.

## Contributing

We encourage contributions! Feel free to submit pull requests for features, bug fixes, or improvements. For major changes, please open an issue first to discuss your proposal.
