import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import { importPKCS8, SignJWT } from "jose";
import { env } from "../config/env.js";

export async function buildClientAssertion(tokenEndpoint) {
  const privateKeyPem = await fs.readFile(env.cernerPrivateKeyPath, "utf8");
  const privateKey = await importPKCS8(privateKeyPem, "RS384");

  const now = Math.floor(Date.now() / 1000);

  return await new SignJWT({})
    .setProtectedHeader({
      alg: "RS384",
      kid: env.cernerJwtKid,
      typ: "JWT",
    })
    .setIssuer(env.cernerClientId)
    .setSubject(env.cernerClientId)
    .setAudience(tokenEndpoint)
    .setJti(uuidv4())
    .setIssuedAt(now)
    .setExpirationTime(now + 300)
    .sign(privateKey);
}
