'use client'

export default function Setup({ bridgeInfo }) {

    function testButton() {
        console.log("cheesy bits")
    }

    function getBridge() {
        console.log(bridgeInfo)
    }

    return (
        <main>
            <h1>Setup Page</h1>
            <button onClick={testButton}>CHEESY BITS</button>
            <button onClick={getBridge}>Get Bridges</button>
        </main>
    )

}
