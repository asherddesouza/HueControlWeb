import Setup from "./page.client"

const v3 = require('node-hue-api').v3;

async function getBridgeDetails() {
    const results = await v3.discovery.nupnpSearch();
    console.log(JSON.stringify(results, null, 2))
    return results;
}

export default async function Page() {
    const bridgeInfo = await getBridgeDetails();
    return (
        <Setup bridgeInfo={bridgeInfo} />
    )
}
