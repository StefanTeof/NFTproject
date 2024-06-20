const { ethers } = require("hardhat");

async function main() {
    const [owner] = await ethers.getSigners();
    const contract = await ethers.getContractAt("NFTCollection", "0x4BA0BDc9A6C9b593910f2Dfb4EDbfe5bC180b96B");

    const tokenURIs = [
        "ipfs://QmQmZpFeoHs7UHeD3srbTLSw8VJsGxff2YtyMrP1xZRsDR/nft1.json",
        "ipfs://QmQmZpFeoHs7UHeD3srbTLSw8VJsGxff2YtyMrP1xZRsDR/nft2.json",
        "ipfs://QmQmZpFeoHs7UHeD3srbTLSw8VJsGxff2YtyMrP1xZRsDR/nft3.json",
        "ipfs://QmQmZpFeoHs7UHeD3srbTLSw8VJsGxff2YtyMrP1xZRsDR/nft4.json",
        "ipfs://QmQmZpFeoHs7UHeD3srbTLSw8VJsGxff2YtyMrP1xZRsDR/nft5.json",
        "ipfs://QmQmZpFeoHs7UHeD3srbTLSw8VJsGxff2YtyMrP1xZRsDR/nft6.json",
        "ipfs://QmQmZpFeoHs7UHeD3srbTLSw8VJsGxff2YtyMrP1xZRsDR/nft7.json",
        "ipfs://QmQmZpFeoHs7UHeD3srbTLSw8VJsGxff2YtyMrP1xZRsDR/nft8.json",
        "ipfs://QmQmZpFeoHs7UHeD3srbTLSw8VJsGxff2YtyMrP1xZRsDR/nft9.json",
        "ipfs://QmQmZpFeoHs7UHeD3srbTLSw8VJsGxff2YtyMrP1xZRsDR/nft10.json"
    ];

    for (let uri of tokenURIs) {
        const tx = await contract.mint(uri);
        await tx.wait();
        console.log(`NFT minted successfully with URI: ${uri}`);
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
