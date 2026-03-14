import express from "express";
import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import fhirRoutes from "./routes/fhir.routes.js";

const app = express();

app.use(express.json());

app.use("/health", healthRoutes);
app.use("/auth", authRoutes);
app.use("/fhir", fhirRoutes);

app.use((err, req, res, next) => {
  const status = err.response?.status || 500;
  const details = err.response?.data || err.message;

  res.status(status).json({
    ok: false,
    error: "Request failed",
    details,
  });
});

export default app;
