import { Router } from "express";
import { getAccessToken } from "../services/token.service.js";

const router = Router();

router.get("/debug-token", async (req, res, next) => {
  try {
    const token = await getAccessToken();
    res.json({ ok: true, tokenPreview: `${token.slice(0, 20)}...` });
  } catch (error) {
    next(error);
  }
});

export default router;
