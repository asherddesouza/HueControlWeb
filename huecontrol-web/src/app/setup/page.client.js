'use client'

export default function Setup(bridgeInfo){

    console.log(bridgeInfo)

    let bridge = bridgeInfo

    function testButton(){
        console.log("cheesy bits")
    }

    function getBridge(data){
        console.log(data)
    }

    return (
        <main>
            <h1>Setup Page</h1>
            <button onClick={testButton}>CHEESY BITS</button>
            <button onClick={getBridge(bridge)}>Get Bridges</button>
        </main>
    )

}