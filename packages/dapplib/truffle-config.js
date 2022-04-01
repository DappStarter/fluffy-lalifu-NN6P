require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name renew mad minor grid praise army general'; 
let testAccounts = [
"0x321032afc5384d192efed23422e416a01ae7a5f0e039e6edd47ae77ae27d92ee",
"0x07b7bd625fb354335f1b73527cd34463e2b249111d06d1d51ff14bd9e65a812f",
"0xab9d80e6061f433384e46c7c04313bea2f812eee5791f0e9bd61a1436851b1a4",
"0xbfba4c99a6aa5412e72c70d759283a6466f7fbe36fddc17e9429513d44f220e1",
"0xf3b2d33e7f2c4953e6936d51cee5bdd6c2a5888f426ab050928c80ab9a3a3ad8",
"0x8be4a040f9675897a5fbfc1b3fa6c9f74473a2d39a62542796f337957afafd1c",
"0xcba5eb9298f9c1cf237b6cfa1b6301b23877929c1afa82cceeccc1c8bac43adf",
"0x3d6b5b9b4835565e5dab2329c65dd7b32b05155d950f633876fca7f52581fd77",
"0xca160c04e9674ae49ace7c0df781a26db7b5ec19898eadfcd34579392b37cdb5",
"0x7b01a933d290f54d4ea021c7b63890b80e199ab5ddb2e52ed2ec30c97d6b00ea"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


