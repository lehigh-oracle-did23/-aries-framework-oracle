import type { Config } from "@jest/types";

import packageJson from "./package.json";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        isolatedModules: true,
      },
    ],
  },

  displayName: packageJson.name,
  setupFilesAfterEnv: ["./tests/setup.ts"],
};

export default config;
