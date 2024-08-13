"use client";

import { useEffect, useState } from "react";
import Button from "../components/button/button";
import Navbar from "../components/navbar/navbar";
import { HueUser } from "./page";
import styles from "./page.module.css";

// const v3 = require("node-hue-api").v3;
// const LightState = v3.lightStates.LightState;

// const USERNAME = "yXTlszolo9DeYSSyUR5FbGk5QTLcc2jURwA9mQai";
// const LIGHT_ID = 5;
// const CLIENT_KEY = "56A044BFE37EC7D5EA07859655D6F1BD";

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
}

export default function Setup({ bridgeInfo, setupUser }: SetupProps) {
  const [userStatus, setUserStatus] = useState(false);

  function lightOn(): void {
    // try {
    //   const host = bridgeInfo;
    //   const api = await v3.api.createLocal(host).connect(USERNAME);
    //   // Using a LightState object to build the desired state
    //   const state = new LightState().on().ct(200).brightness(100);
    //   const result = await api.lights.setLightState(LIGHT_ID, state);
    //   console.log(`Light state change was successful? ${result}`);
    //   return result;
    // } catch (error) {
    //   console.error("Error changing light state", error);
    //   return false;
    // }
  }

  const lightOff = async () => {
    console.log(`(IP:${bridgeInfo}, Type: ${typeof bridgeInfo})`);
  };

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
          <Button content={"Turn Light On"} onClickEvent={lightOn} />
          <Button content={"Turn Light Off"} onClickEvent={lightOff} />
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
