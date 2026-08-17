// Witness endpoint for the PandaStack app scale-out test: holds the connection
// open for `ms` (default 8s, max 60s) then responds. Holding many of these open
// concurrently is what accumulates in-flight load — the signal the concurrency
// autoscaler scales on.
import os from "os";

export default async function handler(req, res) {
  const ms = Math.min(parseInt(req.query.ms || "8000", 10) || 8000, 60000);
  await new Promise((r) => setTimeout(r, ms));
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ instance: os.hostname(), held_ms: ms });
}
