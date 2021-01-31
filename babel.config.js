module.exports = (api) => {
  api.cache(false)

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: true,
          },
        },
      ],
    ],
    plugins: [
      [
        "babel-plugin-module-resolver",
        {
          root: ["./src"],
          alias: { "@": "./src" },
        },
      ],
    ],
  }
}
