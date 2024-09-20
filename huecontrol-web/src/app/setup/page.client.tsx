"use client";

import { useEffect, useState } from "react";
import Button from "../components/button/button";
import Navbar from "../components/navbar/navbar";
import { HueUser } from "./page";
import styles from "./page.module.css";

const USERNAME = "yXTlszolo9DeYSSyUR5FbGk5QTLcc2jURwA9mQai";
const LIGHT_ID = 5;
const CLIENT_KEY = "56A044BFE37EC7D5EA07859655D6F1BD";

// const v3 = require("node-hue-api").v3;

// 1 = Bedroom 1
// 2 = Living Room
// 3 = Kitchen
// 4 = Hallway
// 5 = My Room

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
  // lightState: Object;
  // allLights: Object;
}

export default function Setup({
  bridgeInfo,
  setupUser,
}: // lightState,
SetupProps) {
  // const LightState = v3.lightStates.LightState;

  // const lightOff = new LightState().off();
  // const lightOn = new LightState().on().bri(255);

  const [userStatus, setUserStatus] = useState(false);

  // console.log(`(IP:${bridgeInfo}, Type: ${typeof bridgeInfo})`);/

  function getBridge() {
    console.log(bridgeInfo);
  }

  const getUserDetails = () => {
    if (setupUser.username === "" && setupUser.clientkey === "") {
      setUserStatus(true);
    }
    console.log(`Username: ${setupUser.username}`);
    console.log(`Client Key: ${setupUser.clientkey}`);
  };

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
          <Button content={"Turn Light On"} onClickEvent={() => {}} />
          <Button content={"Turn Light Off"} onClickEvent={() => {}} />
          {userStatus ? (
            <div className={styles.error}>
              Username: {setupUser.username}, Key: {setupUser.clientkey}
            </div>
          ) : null}
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
