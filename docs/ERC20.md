---
sidebar_label: "ERC20"
sidebar_position: 1.5
---

# ERC20: Token Standard

Let's dive into the core concepts of ERC-20 tokens and provide some practical examples of how to interact with them using smart contracts. ERC-20 is a widely adopted standard for fungible tokens on the Ethereum network, and understanding how to work with ERC-20 tokens is essential for many decentralized applications (DApps) and blockchain development.

## Understanding ERC-20 Tokens

ERC-20 tokens are a type of digital asset on the Ethereum blockchain that adhere to a common set of rules, making them interchangeable and easily tradable. Each ERC-20 token represents a unit of value and can be used for various purposes, including representing ownership, facilitating transactions, and interacting with decentralized applications.

The key features of ERC-20 tokens include:

1. **Balance** Tracking: ERC-20 tokens can be owned by Ethereum addresses, and the balance of each token for an address can be tracked.

2. **Transferability**: ERC-20 tokens can be transferred from one Ethereum address to another, providing a means of value exchange.

3. **Standardized Interface**: ERC-20 tokens follow a standardized interface, which makes them compatible with various DApps and platforms, promoting interoperability.

4. **Decimals**: Many ERC-20 tokens use a decimal system to define the divisibility of the token. For example, if a token has 18 decimal places, it means it can be divided into 10^18 units, similar to how Ether (ETH) is represented.

## Interacting with ERC-20 Tokens in Smart Contracts

To interact with ERC-20 tokens within a smart contract, you typically need to perform the following actions:

1. Import the ERC-20 Interface(OZeppelin): Include the ERC-20 interface in your smart contract. The interface defines the standard functions that an ERC-20 token contract must implement.

2. Instantiate the Token Contract: Create an instance of the ERC-20 token contract using the token's address.

3. Use Standard Functions: Utilize the standard ERC-20 functions, such as transfer, balanceOf, approve, and transferFrom, to perform actions like transferring tokens, checking balances, and approving token transfers on behalf of other addresses.

Here's a simple example in **Solidity**, Ethereum's smart contract language, demonstrating how to check the balance of an ERC-20 token:

```
// Import the ERC-20 interface
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract TokenBalanceChecker {
    // Address of the ERC-20 token
    address public tokenAddress;

    constructor(address _tokenAddress) {
        tokenAddress = _tokenAddress;
    }

    // Function to get the balance of a specific address
    function getBalance(address _addressToCheck) public view returns (uint256) {
        // Create an instance of the ERC-20 token contract
        IERC20 token = IERC20(tokenAddress);

        // Use the balanceOf function to get the balance
        return token.balanceOf(_addressToCheck);
    }
}


```

This example showcases how to check the balance of a specific address for a given ERC-20 token. Remember that you'll need to use a development environment like Remix or Hardhat to compile and deploy the smart contract, and you should have the appropriate version of the @openzeppelin/contracts package installed to import the ERC-20 interface.

```
$ npm install @openzeppelin/contracts
```

This is just a basic example, and there are many other ways to interact with ERC-20 tokens, such as transferring tokens, handling events, and implementing more complex token-related functionality.

By understanding these core concepts and examples, developers can effectively work with ERC-20 tokens and integrate them into their decentralized applications.

## Interacting with ERC20 Token using ethers.js

1. Most often, any contract you will need to interact with will already be deployed to the blockchain, but for this example will will first deploy the contract:

```
new ethers.ContractFactory( abi , bytecode , signer )
```

Here we created a new ContractFactory that can deploy the contract to the blockchain.

Then we assign the bytecode and abi

```
const bytecode = "0x608060405234801561001057600080fd5b506040516103bc3803806103bc83398101604081905261002f9161007c565b60405181815233906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a333600090815260208190526040902055610094565b60006020828403121561008d578081fd5b5051919050565b610319806100a36000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063313ce5671461005157806370a082311461006557806395d89b411461009c578063a9059cbb146100c5575b600080fd5b604051601281526020015b60405180910390f35b61008e610073366004610201565b6001600160a01b031660009081526020819052604090205490565b60405190815260200161005c565b604080518082018252600781526626bcaa37b5b2b760c91b6020820152905161005c919061024b565b6100d86100d3366004610222565b6100e8565b604051901515815260200161005c565b3360009081526020819052604081205482111561014b5760405162461bcd60e51b815260206004820152601a60248201527f696e73756666696369656e7420746f6b656e2062616c616e6365000000000000604482015260640160405180910390fd5b336000908152602081905260408120805484929061016a9084906102b6565b90915550506001600160a01b0383166000908152602081905260408120805484929061019790849061029e565b90915550506040518281526001600160a01b0384169033907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a350600192915050565b80356001600160a01b03811681146101fc57600080fd5b919050565b600060208284031215610212578081fd5b61021b826101e5565b9392505050565b60008060408385031215610234578081fd5b61023d836101e5565b946020939093013593505050565b6000602080835283518082850152825b818110156102775785810183015185820160400152820161025b565b818111156102885783604083870101525b50601f01601f1916929092016040019392505050565b600082198211156102b1576102b16102cd565b500190565b6000828210156102c8576102c86102cd565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220d80384ce584e101c5b92e4ee9b7871262285070dbcd2d71f99601f0f4fcecd2364736f6c63430008040033";

// Pass the constructor with its parameters for abi
const abi = [
    "constructor(uint totalSupply)"
];

```

2. Get the contract Factory and then deploy the contract:

```
const factory = new ethers.ContractFactory(abi, bytecode, signer)

// Deploy, setting total supply to 100 tokens (assigned to the deployer)
const contract = await factory.deploy(parseUnits("100"));

```

3. Wait for the contract to be deployed before interacting:

```
await contract.deployTransaction.wait();
```
