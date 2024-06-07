'use client'

interface Model {
    number: string;
    description: string;
    name: string;
    serial: string;
}

interface Version {
    major: string;
    minor: string;
}

interface Icon {
    mimetype: string;
    height: string;
    width: string;
    depth: string;
    url: string;
}

interface BridgeInfo {
    name: string;
    manufacturer: string;
    ipaddress: string;
    model: Model;
    version: Version;
    icon: Icon[];
}

interface SetupProps {
    bridgeInfo: BridgeInfo
}

export default function Setup({bridgeInfo}: SetupProps) {
    function getBridge() {
        let parsedResults = (JSON.stringify(bridgeInfo, null, 2))
        console.log(parsedResults)
    }
    return (
        <main>
            <h1>Setup Page</h1>
            <button onClick={getBridge}>Get Bridges</button>
        </main>
    )
}