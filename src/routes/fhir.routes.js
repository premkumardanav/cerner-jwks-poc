import { Router } from "express";
import {
  getPatientById,
  searchObservationsByPatient,
  searchPatients,
  searchAllergiesByPatient,
  searchConditionsByPatient,
  searchMedicationRequestsByPatient,
  searchEncountersByPatient,
  getEncounterById,
  searchProceduresByPatient,
  searchImmunizationsByPatient,
  searchDiagnosticReportsByPatient,
  searchDocumentReferencesByPatient,
  searchCarePlansByPatient,
  searchCareTeamsByPatient,
  searchGoalsByPatient,
  searchCoverageByPatient,
  getPractitionerById,
  getOrganizationById,
  getLocationById,
} from "../services/fhir.service.js";

const router = Router();

router.get("/patient/:id", async (req, res, next) => {
  try {
    const data = await getPatientById(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/observations", async (req, res, next) => {
  try {
    const data = await searchObservationsByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/allergies", async (req, res, next) => {
  try {
    const data = await searchAllergiesByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/conditions", async (req, res, next) => {
  try {
    const data = await searchConditionsByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/medications", async (req, res, next) => {
  try {
    const data = await searchMedicationRequestsByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/encounters", async (req, res, next) => {
  try {
    const data = await searchEncountersByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/procedures", async (req, res, next) => {
  try {
    const data = await searchProceduresByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/immunizations", async (req, res, next) => {
  try {
    const data = await searchImmunizationsByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/diagnostic-reports", async (req, res, next) => {
  try {
    const data = await searchDiagnosticReportsByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/documents", async (req, res, next) => {
  try {
    const data = await searchDocumentReferencesByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/care-plans", async (req, res, next) => {
  try {
    const data = await searchCarePlansByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/care-teams", async (req, res, next) => {
  try {
    const data = await searchCareTeamsByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/goals", async (req, res, next) => {
  try {
    const data = await searchGoalsByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient/:id/coverage", async (req, res, next) => {
  try {
    const data = await searchCoverageByPatient(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/patient-search", async (req, res, next) => {
  try {
    const { family, given, birthdate, identifier, phone, email } = req.query;

    const params = {};
    if (family) params.family = family;
    if (given) params.given = given;
    if (birthdate) params.birthdate = birthdate;
    if (identifier) params.identifier = identifier;
    if (phone) params.phone = phone;
    if (email) params.email = email;

    const data = await searchPatients(params);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/encounter/:id", async (req, res, next) => {
  try {
    const data = await getEncounterById(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/practitioner/:id", async (req, res, next) => {
  try {
    const data = await getPractitionerById(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/organization/:id", async (req, res, next) => {
  try {
    const data = await getOrganizationById(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

router.get("/location/:id", async (req, res, next) => {
  try {
    const data = await getLocationById(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

export default router;
