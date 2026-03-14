import { env } from "../config/env.js";

export const CERNER = {
  smartConfigUrl: `${env.cernerFhirBaseUrl}/.well-known/smart-configuration`,
};
