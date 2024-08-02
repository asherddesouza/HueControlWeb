"use client";

import Button from "../components/button/button";
import Navbar from "../components/navbar/navbar";
import { HueUser } from "./page";
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
  setupUser: HueUser;
}

export default function Setup({ bridgeInfo, setupUser }: SetupProps) {
  function getBridge() {
    let parsedResults = JSON.stringify(bridgeInfo, null, 2);
    console.log(parsedResults);
  }

  function getUserDetails() {
    console.log(`User: ${setupUser}`);
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
          <Button content={"Get Bridges"} onClickEvent={getBridge} />
          <Button content={"Get User"} onClickEvent={getUserDetails} />
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
          <p>‎ </p>
        </div>

        <div className={styles.footer}>© Asher De Souza 2024</div>
      </div>
    </main>
  );
}
