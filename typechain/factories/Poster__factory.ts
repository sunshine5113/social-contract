/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Poster } from "../Poster";

export class Poster__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Poster> {
    return super.deploy(overrides || {}) as Promise<Poster>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Poster {
    return super.attach(address) as Poster;
  }
  connect(signer: Signer): Poster__factory {
    return super.connect(signer) as Poster__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Poster {
    return new Contract(address, _abi, signerOrProvider) as Poster;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "NewPost",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "post",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102d6806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638ee93cf314610030575b600080fd5b61004a60048036038101906100459190610105565b61004c565b005b3373ffffffffffffffffffffffffffffffffffffffff167f6babe127d1599cad37c523a2dd29c5d02acd7132a883e378a2d9b42ec75a1fa982604051610092919061017f565b60405180910390a250565b60006100b06100ab846101d2565b6101a1565b9050828152602081018484840111156100c857600080fd5b6100d384828561021e565b509392505050565b600082601f8301126100ec57600080fd5b81356100fc84826020860161009d565b91505092915050565b60006020828403121561011757600080fd5b600082013567ffffffffffffffff81111561013157600080fd5b61013d848285016100db565b91505092915050565b600061015182610202565b61015b818561020d565b935061016b81856020860161022d565b6101748161028f565b840191505092915050565b600060208201905081810360008301526101998184610146565b905092915050565b6000604051905081810181811067ffffffffffffffff821117156101c8576101c7610260565b5b8060405250919050565b600067ffffffffffffffff8211156101ed576101ec610260565b5b601f19601f8301169050602081019050919050565b600081519050919050565b600082825260208201905092915050565b82818337600083830152505050565b60005b8381101561024b578082015181840152602081019050610230565b8381111561025a576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f830116905091905056fea26469706673582212207c6e52035536d860606b364f67ce98317ed4cb1e9b9be6fd719ae34f55c207cc64736f6c63430008000033";
