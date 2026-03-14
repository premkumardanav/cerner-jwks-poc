const levels = ["error", "warn", "info", "debug"];

function shouldLog(targetLevel) {
  const current = process.env.LOG_LEVEL || "info";
  return levels.indexOf(targetLevel) <= levels.indexOf(current);
}

function log(level, message, meta) {
  if (!shouldLog(level)) {
    return;
  }

  const payload = {
    level,
    message,
    ...(meta ? { meta } : {}),
    timestamp: new Date().toISOString(),
  };

  console[level === "debug" ? "log" : level](JSON.stringify(payload));
}

const logger = {
  error: (message, meta) => log("error", message, meta),
  warn: (message, meta) => log("warn", message, meta),
  info: (message, meta) => log("info", message, meta),
  debug: (message, meta) => log("debug", message, meta),
};

export default logger;
