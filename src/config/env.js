import dotenv from "dotenv";
dotenv.config();

export const env = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || "development",
  cernerClientId: process.env.CERNER_CLIENT_ID,
  cernerTenantId: process.env.CERNER_TENANT_ID,
  cernerFhirBaseUrl: process.env.CERNER_FHIR_BASE_URL,
  cernerScope: process.env.CERNER_SCOPE,
  cernerJwtKid: process.env.CERNER_JWT_KID,
  cernerPrivateKeyPath: process.env.CERNER_PRIVATE_KEY_PATH,
};
