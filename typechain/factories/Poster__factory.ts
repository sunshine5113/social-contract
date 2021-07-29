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
  "0x608060405234801561001057600080fd5b506101cd806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638ee93cf314610030575b600080fd5b61004a600480360381019061004591906100b7565b61004c565b005b50565b600061006261005d84610129565b6100f8565b90508281526020810184848401111561007a57600080fd5b610085848285610159565b509392505050565b600082601f83011261009e57600080fd5b81356100ae84826020860161004f565b91505092915050565b6000602082840312156100c957600080fd5b600082013567ffffffffffffffff8111156100e357600080fd5b6100ef8482850161008d565b91505092915050565b6000604051905081810181811067ffffffffffffffff8211171561011f5761011e610168565b5b8060405250919050565b600067ffffffffffffffff82111561014457610143610168565b5b601f19601f8301169050602081019050919050565b82818337600083830152505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea26469706673582212206edf544b1d3b0f014b9605355691c4da2009ad4d9c4ec9830f18543943b92faf64736f6c63430008000033";
