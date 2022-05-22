const path = require("path");

/*module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    develop: {
      port: 8545
    }
  }
};*/
const HDWalletProvider = require("@truffle/hdwallet-provider");
//var HDWalletProvider = require("truffle-hdwallet-provider");
const infuraKey = "1719e3b74426434582812833825c86cc";
const fs = require("fs");
const mnemonic = fs.readFileSync("D:\\MED_WORK\\.secret").toString().trim();
module.exports = {
  contracts_build_directory: "./client/src",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      protocol: "https",
      network_id: "*", // Match any network id
    },
    ropsten: {
      provider: new HDWalletProvider(
        mnemonic,
        `https://ropsten.infura.io/v3/${infuraKey}`
      ),
      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
    },
  },
  /*ropsten: {
    provider: new HDWalletProvider(
      mnemonic,
      `https://ropsten.infura.io/v3/${infuraKey}`
    ),
    network_id: 3, // Ropsten's id
    gas: 5500000, // Ropsten has a lower block limit than mainnet
  },*/
  /*ropsten: {
    provider: function() {
      return new HDWalletProvider(MNEMONIC, `https://ropsten.infura.io/v3/${infuraKey}`)
    },'
    network_id: 3,
    gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
  }*/
};
