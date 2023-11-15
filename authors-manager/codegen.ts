
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:5000/authors-manager/europe-west1/graphql",
  documents: ["graphql/**/*.graphql", `!graphql/generated.ts`],
  generates: {
    "./graphql/gql/": {
      presetConfig: {
        gqlTagName: "gql",
      },
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  }
};

export default config;
