import axios from "axios";
import { env } from "../config/env.js";
import { getAccessToken } from "./token.service.js";

async function fhirGet(path) {
  const token = await getAccessToken();

  const { data } = await axios.get(`${env.cernerFhirBaseUrl}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/fhir+json",
    },
  });

  return data;
}

export async function getPatientById(patientId) {
  return fhirGet(`/Patient/${patientId}`);
}

export async function searchPatients(params) {
  const query = new URLSearchParams(params).toString();
  return fhirGet(`/Patient?${query}`);
}

export async function searchObservationsByPatient(patientId) {
  return fhirGet(`/Observation?patient=${patientId}`);
}

export async function searchAllergiesByPatient(patientId) {
  return fhirGet(`/AllergyIntolerance?patient=${patientId}`);
}

export async function searchConditionsByPatient(patientId) {
  return fhirGet(`/Condition?patient=${patientId}`);
}

export async function searchMedicationRequestsByPatient(patientId) {
  return fhirGet(`/MedicationRequest?patient=${patientId}`);
}

export async function searchEncountersByPatient(patientId) {
  return fhirGet(`/Encounter?patient=${patientId}`);
}

export async function getEncounterById(encounterId) {
  return fhirGet(`/Encounter/${encounterId}`);
}

export async function searchProceduresByPatient(patientId) {
  return fhirGet(`/Procedure?patient=${patientId}`);
}

export async function searchImmunizationsByPatient(patientId) {
  return fhirGet(`/Immunization?patient=${patientId}`);
}

export async function searchDiagnosticReportsByPatient(patientId) {
  return fhirGet(`/DiagnosticReport?patient=${patientId}`);
}

export async function searchDocumentReferencesByPatient(patientId) {
  return fhirGet(`/DocumentReference?patient=${patientId}`);
}

export async function searchCarePlansByPatient(patientId) {
  return fhirGet(`/CarePlan?patient=${patientId}`);
}

export async function searchCareTeamsByPatient(patientId) {
  return fhirGet(`/CareTeam?patient=${patientId}`);
}

export async function searchGoalsByPatient(patientId) {
  return fhirGet(`/Goal?patient=${patientId}`);
}

export async function searchCoverageByPatient(patientId) {
  return fhirGet(`/Coverage?patient=${patientId}`);
}

export async function getPractitionerById(practitionerId) {
  return fhirGet(`/Practitioner/${practitionerId}`);
}

export async function getOrganizationById(organizationId) {
  return fhirGet(`/Organization/${organizationId}`);
}

export async function getLocationById(locationId) {
  return fhirGet(`/Location/${locationId}`);
}
