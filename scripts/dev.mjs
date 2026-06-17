import { rmSync, existsSync } from "node:fs";
import { spawn } from "node:child_process";
import { join } from "node:path";

const root = process.cwd();
const nextDir = join(root, ".next");
const cacheDir = join(root, "node_modules", ".cache");
const nextBin = join(root, "node_modules", "next", "dist", "bin", "next");

// Prevent stale/corrupt webpack chunks (common cause of unstyled pages)
for (const dir of [nextDir, cacheDir]) {
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true, force: true });
    console.log(`Cleaned: ${dir}`);
  }
}

const child = spawn(process.execPath, [nextBin, "dev"], {
  stdio: "inherit",
  cwd: root,
});

child.on("exit", (code) => process.exit(code ?? 0));
