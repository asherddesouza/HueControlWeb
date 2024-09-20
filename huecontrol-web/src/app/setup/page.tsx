"use server";

import Setup, { BridgeInfo } from "./page.client";
import React, { ReactHTMLElement, useState } from "react";

const v3 = require("node-hue-api").v3;
const LightState = v3.lightStates.LightState;

console.log("hkwfyhfgdfhjk");

const USERNAME = "yXTlszolo9DeYSSyUR5FbGk5QTLcc2jURwA9mQai";
const LIGHT_ID = 5;
const CLIENT_KEY = "56A044BFE37EC7D5EA07859655D6F1BD";

// 1 = Bedroom 1
// 2 = Living Room
// 3 = Kitchen
// 4 = Hallway
// 5 = My Room

const appName = "hue-control-web";
const deviceName = "example-code";

interface HueError extends Error {
  getHueErrorType: () => number;
}

export interface HueUser {
  username: string;
  clientkey: string;
}

// async function lightState() {
//   const lightSettings = LightState();
// }

console.log(LightState, "23r3r");

async function getBridgeDetails() {
  const results = await v3.discovery.upnpSearch();

  if (results.length === 0) {
    console.error(`Couldn't find any bridges.`);
  } else {
    // return results[0].ipaddress;
    return results;
  }
}

async function discoverAndCreateUser(): Promise<HueUser> {
  const results = await getBridgeDetails();
  console.log(results);

  const ipAddress = results[0].ipaddress;

  if (!ipAddress) {
    console.error("IP Address not found");
  }

  // Create an unauthenticated instance of the Hue API so that we can create a new user
  const unauthenticatedApi = await v3.api.createLocal(ipAddress).connect();

  let createdUser;
  try {
    createdUser = await unauthenticatedApi.users.createUser(
      appName,
      deviceName
    );
    console.log(
      "*******************************************************************************\n"
    );
    console.log(
      "User has been created on the Hue Bridge. The following username can be used to\n" +
        "authenticate with the Bridge and provide full local access to the Hue Bridge.\n" +
        "YOU SHOULD TREAT THIS LIKE A PASSWORD\n"
    );
    console.log(`Hue Bridge User: ${createdUser.username}`);
    console.log(`Hue Bridge User Client Key: ${createdUser.clientkey}`);
    console.log(
      "*******************************************************************************\n"
    );

    // Create a new API instance that is authenticated with the new user we created
    const authenticatedApi = await v3.api
      .createLocal(ipAddress)
      .connect(createdUser.username)
      // .then((api: { configuration: { getConfiguration: () => any } }) => {
      //   return api.configuration.getConfiguration();
      // })
      .then((api: { lights: { getAll: () => any } }) => {
        return api.lights.getAll();
      })
      .then((allLights: any[]) => {
        // Display the details of the lights we got back
        console.log(JSON.stringify(allLights, null, 2));

        // Iterate over the light objects showing details
        allLights.forEach((light: { toStringDetailed: () => any }) => {
          console.log(light.toStringDetailed());
        });
      });

    console.log(authenticatedApi);

    console.log(createdUser);
    return createdUser;
  } catch (error) {
    const err = error as HueError;
    if (err.getHueErrorType && err.getHueErrorType() === 101) {
      console.error(
        "The Link button on the bridge was not pressed. Please press the Link button and try again."
      );
    } else {
      console.error(`Unexpected Error: ${err.message}`);
    }

    return { username: "", clientkey: "" };
  }
}

export default async function Page() {
  const bridgeInfo: BridgeInfo = await getBridgeDetails();
  const setupUser: HueUser = await discoverAndCreateUser();
  // const lightState: any = await currentLightState();
  // const allLights: any = await allLightState();

  return (
    <Setup
      bridgeInfo={bridgeInfo}
      setupUser={setupUser}
      // lightState={lightState}
      // allLights={allLights}
    />
  );
}
