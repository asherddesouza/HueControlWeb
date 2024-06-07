import Setup, { BridgeInfo } from "./page.client"

const v3 = require('node-hue-api').v3;

async function getBridgeDetails() {
    const results = await v3.discovery.upnpSearch();
    return results;
}

export default async function Page() {
    const bridgeInfo: BridgeInfo = await getBridgeDetails();
    return (
        <Setup bridgeInfo={bridgeInfo} />
    )
}
