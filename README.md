```
██████╗  ██████╗ ███████╗████████╗███████╗██████╗
██╔══██╗██╔═══██╗██╔════╝╚══██╔══╝██╔════╝██╔══██╗
██████╔╝██║   ██║███████╗   ██║   █████╗  ██████╔╝
██╔═══╝ ██║   ██║╚════██║   ██║   ██╔══╝  ██╔══██╗
██║     ╚██████╔╝███████║   ██║   ███████╗██║  ██║
╚═╝      ╚═════╝ ╚══════╝   ╚═╝   ╚══════╝╚═╝  ╚═╝
```

A ridiculously simple general purpose social media smart contract.
It takes a string as a parameter. That's it.

It is intended to be deployed on L2 Ethereum networks, or any EVM compatible network where gas is cheap/free.

Poster v4 has been deployed at `0x81b28b981259409d0fcd361896efa4bd1514515a` on multiple networks using the [Singleton Factory](https://eips.ethereum.org/EIPS/eip-2470). If it is not yet deployed on your chosen network, you can use the Singleton Factory to deploy an instance of Poster at the same address on just about any EVM compatible network using these parameters:

> **initCode:** `0x608060405234801561001057600080fd5b506101cd806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80638ee93cf314610030575b600080fd5b61004a600480360381019061004591906100b7565b61004c565b005b50565b600061006261005d84610129565b6100f8565b90508281526020810184848401111561007a57600080fd5b610085848285610159565b509392505050565b600082601f83011261009e57600080fd5b81356100ae84826020860161004f565b91505092915050565b6000602082840312156100c957600080fd5b600082013567ffffffffffffffff8111156100e357600080fd5b6100ef8482850161008d565b91505092915050565b6000604051905081810181811067ffffffffffffffff8211171561011f5761011e610168565b5b8060405250919050565b600067ffffffffffffffff82111561014457610143610168565b5b601f19601f8301169050602081019050919050565b82818337600083830152505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fdfea26469706673582212206edf544b1d3b0f014b9605355691c4da2009ad4d9c4ec9830f18543943b92faf64736f6c63430008000033`
>
> **salt:** `0x`

---

**TODO:**

- A standard json format for posts
- an example subgraph

---

`Made with ❤️ by Auryn.eth`
