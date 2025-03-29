import { defineConfig } from "orval";

const toCamelCase = (string: string) => string.replace(/(?:^|\s+)(\w)/g, (match, group) => group.toUpperCase()).replace("’", "");

export default defineConfig({
  api: {
    input: { target: "http://185.213.164.217:8000/api/docs/schema/" },
    output: {
      tslint: true,
      mode: "single",
      client: "axios-functions",
      target: "./src/services/api.ts",
      override: {
        mutator: { name: "api", path: "./src/services/api.instance.ts" },
        operationName: (operation, route, verb) => {
          const tag = operation?.tags?.[0]
            .split("/")
            .map((item) => toCamelCase(item))
            .join("");
          const summary = operation.operationId?.replace(/_/g, " ");
          const title = tag + " " + summary;
          return `api${toCamelCase(title)}`;
        },
      },
    },
  },
});
