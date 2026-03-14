import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ ok: true, message: "Cerner JWKS POC is running" });
});

export default router;
