import Setup from "./page.client"

const v3 = require('node-hue-api').v3;

async function getBridgeDetails() {
    const results = await v3.discovery.nupnpSearch();

    //console.log(JSON.stringify(results, null, 2))

    // Results will be an array of bridges that were found
    return JSON.stringify(results, null, 2)
  }

export default async function Page() {
    return (
        <Setup
            bridgeInfo = {getBridgeDetails()}
        />
    )
}