import { Router } from "express";
import {
  getPatientById,
  searchObservationsByPatient,
  searchPatients,
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

export default router;
