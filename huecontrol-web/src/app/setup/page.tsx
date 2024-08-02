import Setup, { BridgeInfo } from "./page.client";

const v3 = require("node-hue-api").v3;

const appName = "hue-control-web";
const deviceName = "example-code";

interface HueError extends Error {
  getHueErrorType: () => number;
}

export interface HueUser {
  username: string;
  clientkey: string;
}

async function getBridgeDetails() {
  const results = await v3.discovery.upnpSearch();

  if (results.length === 0) {
    console.error(`Couldn't find any bridges.`);
    return null;
  } else {
    return results[0].ipaddress;
  }
}

async function discoverAndCreateUser(): Promise<HueUser | null> {
  const ipAddress = await getBridgeDetails();

  if (!ipAddress) {
    return null;
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
      .connect(createdUser.username);

    // Do something with the authenticated user/api
    const bridgeConfig =
      await authenticatedApi.configuration.getConfiguration();
    console.log(
      `Connected to Hue Bridge: ${bridgeConfig.name} :: ${bridgeConfig.ipaddress}`
    );
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

    return null;
  }
}

export default async function Page() {
  const bridgeInfo: BridgeInfo = await getBridgeDetails();
  const setupUser: HueUser | null = await discoverAndCreateUser();

  if (!bridgeInfo || !setupUser) {
    let setupUser = { username: "", clientkey: "" }; // Create a blank/fake user
    return <Setup bridgeInfo={bridgeInfo} setupUser={setupUser} />;
  }

  return <Setup bridgeInfo={bridgeInfo} setupUser={setupUser} />;
}
