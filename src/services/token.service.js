import axios from "axios";
import { env } from "../config/env.js";
import { getSmartConfiguration } from "./smartDiscovery.service.js";
import { buildClientAssertion } from "./jwtAssertion.service.js";

let cachedToken = null;
let cachedTokenExpiry = 0;

export async function getAccessToken() {
  const now = Date.now();

  if (cachedToken && now < cachedTokenExpiry - 30_000) {
    return cachedToken;
  }

  const smartConfig = await getSmartConfiguration();
  const tokenEndpoint = smartConfig.token_endpoint;

  const clientAssertion = await buildClientAssertion(tokenEndpoint);

  const body = new URLSearchParams({
    grant_type: "client_credentials",
    scope: env.cernerScope,
    client_assertion_type:
      "urn:ietf:params:oauth:client-assertion-type:jwt-bearer",
    client_assertion: clientAssertion,
  });

  const { data } = await axios.post(tokenEndpoint, body.toString(), {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  });

  cachedToken = data.access_token;
  cachedTokenExpiry = Date.now() + (data.expires_in || 300) * 1000;

  return cachedToken;
}
