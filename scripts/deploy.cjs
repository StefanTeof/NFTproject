const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const NFTCollection = await ethers.getContractFactory("NFTCollection");

    const nftCollection = await NFTCollection.deploy();

    await nftCollection.deployed();

    console.log("NFTCollection deployed to:", nftCollection.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});