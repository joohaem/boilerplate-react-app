import { Meta, Story } from "@storybook/react";

import MyComponent, { MyComponentProps } from "./MyComponent";

// 스토리북의 폴더
export default {
  title: "Example/MyComponent",
  component: MyComponent,
  decorators: [
    (Story: () => JSX.Element) => (
      <div style={{ margin: "3em" }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

// Story 정의
const Template: Story<MyComponentProps> = (args) => {
  return <MyComponent {...args} />;
};

export const MyComponentStory1 = Template.bind({});
MyComponentStory1.args = {
  text: "",
};
MyComponentStory1.parameters = {
  backgrounds: {
    values: [
      { name: "lightBlue", value: "lightBlue" },
      { name: "gray", value: "#eeeeee" },
    ],
  },
};
MyComponentStory1.storyName = "Custom";
