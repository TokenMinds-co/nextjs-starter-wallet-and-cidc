module.exports = {
  apps: [
    {
      name: "next-with-gh-actions-staging",
      script: "node_modules/next/dist/bin/next", // npm start
      args: "start -p 3000",
      listen_timeout: 12000, // Hack Without timeout we will get downtime in deployment
      instances: "1", // Max Use all the CPU
      exec_mode: "cluster", // Cluster Mode
    },
  ],
};
