#!/usr/bin/env node

import {
  getValues,
  createGenerator,
  getCurrentPath,
  getStubsPath,
} from "../utils";

const deploy = async () => {
  const parameters = ["key", "cloudflareKey", "env", "host"];
  const values = getValues(parameters);
  values.branch = values.env === "production" ? "main" : "release/v*";
  const generator = createGenerator(values);

  await generator.copy(
    getStubsPath(".github/workflows/kubernetes-deployment.yml"),
    getCurrentPath(`kubernetes-${values.env}-deployment.yml`)
  );
  console.log("copied");
};

export default deploy;
