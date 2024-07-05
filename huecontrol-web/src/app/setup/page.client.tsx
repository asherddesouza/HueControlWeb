'use client'

import Navbar from "../components/navbar/navbar";

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

export interface BridgeInfo {
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
            <Navbar/>
            <h1>Welcome to HueControl!</h1>
            <p>a simple app to control your Philips hue lightbulbs.</p>
            <p>Made using TypeScript & Next.js</p>
            <button onClick={getBridge}>Get Bridges</button>
            <footer>© Asher De Souza 2024</footer>
        </main>
    )
}