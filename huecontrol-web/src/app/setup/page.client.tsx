"use client";

import Navbar from "../components/navbar/navbar";
import styles from "./page.module.css";

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
  bridgeInfo: BridgeInfo;
}

export default function Setup({ bridgeInfo }: SetupProps) {
  function getBridge() {
    let parsedResults = JSON.stringify(bridgeInfo, null, 2);
    console.log(parsedResults);
  }
  return (
    <main>
      <Navbar />
      <div className={styles.setup}>
        <div className={styles.headerText}>
          <h1 className={styles.title}>Welcome to HueControl!</h1>
          <p className={styles.subtext}>
            a simple app to control your Philips hue lightbulbs.
          </p>
        </div>

        <div className={styles.background}>
          <button onClick={getBridge}>Get Bridges</button>
        </div>
      </div>

      <footer>© Asher De Souza 2024</footer>
    </main>
  );
}
