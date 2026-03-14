import axios from "axios";
import { env } from "../config/env.js";
import { getAccessToken } from "./token.service.js";

export async function getPatientById(patientId) {
  const token = await getAccessToken();

  const { data } = await axios.get(
    `${env.cernerFhirBaseUrl}/Patient/${patientId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/fhir+json",
      },
    },
  );

  return data;
}

export async function searchObservationsByPatient(patientId) {
  const token = await getAccessToken();

  const { data } = await axios.get(
    `${env.cernerFhirBaseUrl}/Observation?patient=${patientId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/fhir+json",
      },
    },
  );

  return data;
}

export async function searchPatients(params) {
  const token = await getAccessToken();

  const query = new URLSearchParams(params).toString();

  const { data } = await axios.get(
    `${env.cernerFhirBaseUrl}/Patient?${query}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/fhir+json",
      },
    },
  );

  return data;
}
