const fs = require('fs');
const path = require('path');

const createMetadata = (id) => {
    const metadata = {
        name: `Crypto Llama #${id}`,
        description: "A highly prized collectible Crypto Llama.",
        image: `ipfs://QmTmV...hashForImage${id}`,
        attributes: [
            { trait_type: "Background", value: "Llama Land" },
            { trait_type: "Clothing", value: id % 2 === 0 ? "Tuxedo" : "Sweater" },
            { trait_type: "Mood", value: id % 2 === 0 ? "Happy" : "Sad" }
        ]
    };

    fs.writeFileSync(
        path.join(__dirname, 'metadata', `${id}.json`),
        JSON.stringify(metadata, null, 2)
    );
};

for (let i = 1; i <= 10; i++) {
    createMetadata('nft'+i);
}
