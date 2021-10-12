require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food warm razor punch puppy coral light army genuine'; 
let testAccounts = [
"0xb317c7f6b99711b53ddbd0b96c66fa4700cea7e4a85a709b5e029be3cff7456f",
"0x088acc550562c225d21d7804b321d3fbb8cdff9215622a287bd3154c88971c03",
"0x3dc5bffe8b5d0cd690c8d33b936225c9c4b4b1ef3ebfdfb234bcedcde8d1b021",
"0x5c2813e88a769e10aec534b4c845d2699b1606a93307ded9f27dca978a4475db",
"0x097a3989caa2cfdd0742fe722bd383dc28637d2eef7247490686bf9fed8107cd",
"0x297a9a2886120ad43f4a28b84af920fcf72f4fef052c1275db7b36fb805e125b",
"0x06b4889319019ad7ae171a227e5dd785304f4a748c4a2c70d29c0414da5be793",
"0xc1f67a2c87a05a28807473a148b111542326e31513749f07710e7eecf5c380df",
"0x23d27c59fb9c021a0a029eff6201dc364abf6b734c500f99a59347b9367b66a8",
"0xb52e0989522e72db27e7cd1efc6bcdbc022cffa6bc2ce6c6265c3391e59d75bb"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

