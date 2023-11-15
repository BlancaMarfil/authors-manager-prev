export default {
    schema: [
      `functions/graphql/*.graphql`,
    ],
    documents: ["functions/graphql/**/*.ts", `functions/graphql/generated.ts`],
    hooks: {
      afterOneFileWrite: ["prettier --write"],
    },
    generates: {
      "./graphql/generated.ts": {
        config: {
          withHooks: true,
          withRefetchFn: true,
          scalars: {
            AWSDateTime: "Date",
          },
        },
        plugins: [
          "typescript",
          "typescript-operations",
          "typescript-react-apollo",
        ],
      },
    },
    ignoreNoDocuments: true,
  };