'use client'

export default function Setup({ bridgeInfo }) {

    function getBridge() {
        console.log(bridgeInfo)
    }

    return (
        <main>
            <h1>Setup Page</h1>
            <button onClick={getBridge}>Get Bridges</button>
        </main>
    )

}
