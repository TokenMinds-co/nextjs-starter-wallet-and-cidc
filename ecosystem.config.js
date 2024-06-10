module.exports = {
  apps: [
    {
      name: "next-with-gh-actions",
      script: "node_modules/next/dist/bin/next", // npm start
      args: "start",
      listen_timeout: 12000, // Hack Without timeout we will get downtime in deployment
      instances: "max", // Max Use all the CPU
      exec_mode: "cluster", // Cluster Mode
    },
  ],
};
