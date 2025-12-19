const express = require("express");
const app = express();
app.get("/", async (req, res) => {
  res.status(200).send("Xin chào bạn");
});
const os = require("os");

app.get("/system", async (req, res) => {
  const systemInfo = {
    platform: os.platform(),
    cpuArch: os.arch(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    uptime: os.uptime(),
  };
  res.status(200).json(systemInfo);
});
// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
