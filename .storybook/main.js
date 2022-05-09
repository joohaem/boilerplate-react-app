module.exports = {
  //👇 Location of our stories
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
    // 다크모드 적용
    // "storybook-addon-styled-component-theme/dist/preset",
    // "storybook-dark-mode",
  ],
  // 추가::절대경로로 import를 하기 위해 플러그인 설정
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));
    return config;
  },
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
