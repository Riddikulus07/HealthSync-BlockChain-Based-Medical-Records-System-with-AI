const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledRecord = require('./build/Record.json');

//Link to rinkeby network by using Infura and providing seed phrase of metamask wallet

const privateKey = process.env.PRIVATE_KEY || 'about suspect agree silk raw true ketchup cupboard trick hazard seek shock';
const infuraApiKey = process.env.INFURA_API_KEY || 'a38b018f44464862b0529640109fe5bf';

const provider = new HDWalletProvider(privateKey, `https://sepolia.infura.io/v3/${infuraApiKey}`);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    //Deploy contract to rinkeby network
    const result = await new web3.eth.Contract(JSON.parse(compiledRecord.interface))
        .deploy({ data: compiledRecord.bytecode })
        .send({ gas: '10000000', from: accounts[0] });

    //Display the address of the contract 
    console.log('Contract deployed to', result.options.address);

    //Always go to record.js after updating solidity code
};

deploy();