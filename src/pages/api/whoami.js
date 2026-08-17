// Witness endpoint for the PandaStack app scale-out test: returns which VM
// instance served this request, so an external observer can count distinct live
// instances (the gateway LB injects no instance header — proof comes from here).
import os from "os";

export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ instance: os.hostname(), pid: process.pid });
}
