const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
    const gameContract = await gameContractFactory.deploy(
        ["XUV500", "Thar", "Amg"],       // Names
        ["QmWB7PvntoM4n7c1GgYjXGrP74XHsp5H7FHCJ81jGByXHy", // Images
            "QmYKgPNN9yBXMFfKMegxSGZMJmxoYXzy3P1DoTZk8EGHiL",
            "QmPY1bTmv7cvPrBF4C3hUsxczUHc5NN3vTbpkQuMALKnQ7"],
        [100, 200, 300],
        [100, 50, 25],
        "Monster Truck", // Boss name
        "https://gateway.pinata.cloud/ipfs/QmZzUyfJeASZRn5QL36xYFaTi5VQYBRjw5St97KhEdF8d5", // Boss image
        1000, // Boss hp
        50 // Boss attack damage
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);


    let txn;
    txn = await gameContract.mintCharacterNFT(0);
    await txn.wait();
    console.log("Minted NFT #1");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #2");

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();
    console.log("Minted NFT #3");

    txn = await gameContract.mintCharacterNFT(1);
    await txn.wait();
    console.log("Minted NFT #4");

    console.log("Done deploying and minting!");

    txn = await gameContract.mintCharacterNFT(2);
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

    txn = await gameContract.attackBoss();
    await txn.wait();

};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();