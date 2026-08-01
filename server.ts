import express from "express";
import path from "path";
import cors from "cors";
import pinoHttp from "pino-http";
import { createServer as createViteServer } from "vite";
import apiRouter from "./artifacts/api-server/src/routes/index";
import { logger } from "./artifacts/api-server/src/lib/logger";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(
    pinoHttp({
      logger,
      serializers: {
        req(req) {
          return {
            id: req.id,
            method: req.method,
            url: req.url?.split("?")[0],
          };
        },
        res(res) {
          return {
            statusCode: res.statusCode,
          };
        },
      },
    })
  );
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve API routes first
  app.use("/api", apiRouter);

  // Serve Vite frontend in dev mode, static dist in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      root: path.resolve(process.cwd(), "artifacts/blendskills"),
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), "artifacts/blendskills/dist");
    app.use(
      express.static(distPath, {
        maxAge: "1y",
        immutable: true,
        index: false,
      })
    );
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    logger.info(`Server running! Open http://localhost:${PORT} in your browser.`);
  });
}

startServer().catch((err) => {
  logger.error({ err }, "Failed to start server");
  process.exit(1);
});
