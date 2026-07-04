import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL("../", import.meta.url));
const defaultPort = Number(process.argv.includes("--port")
  ? process.argv[process.argv.indexOf("--port") + 1]
  : process.env.PORT || 4173);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp"
};

function safeResolve(urlPath) {
  const cleanPath = urlPath === "/" ? "/index.html" : urlPath;
  const resolvedPath = normalize(join(rootDir, cleanPath));

  if (!resolvedPath.startsWith(rootDir)) {
    return null;
  }

  return resolvedPath;
}

const server = createServer((request, response) => {
  const requestUrl = new URL(request.url, "http://127.0.0.1");
  const filePath = safeResolve(requestUrl.pathname);

  if (!filePath || !existsSync(filePath)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("404 Not Found");
    return;
  }

  const stats = statSync(filePath);
  if (stats.isDirectory()) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("403 Forbidden");
    return;
  }

  const type = contentTypes[extname(filePath)] || "application/octet-stream";
  response.writeHead(200, {
    "Content-Length": stats.size,
    "Content-Type": type,
    "Cache-Control": "no-store"
  });

  createReadStream(filePath).pipe(response);
});

server.listen(defaultPort, "127.0.0.1", () => {
  console.log(`AI Tools Hub is running at http://127.0.0.1:${defaultPort}`);
});
