import { Meta, Story } from "@storybook/react";

import MySearchBar, { MySearchBarProps } from "./MySearchBar";

export default {
  title: "Example/MySearchBar",
  component: MySearchBar,
} as Meta;

const Template: Story<MySearchBarProps> = (args) => {
  return <MySearchBar {...args} />;
};

export const MySearchBarOrganism = Template.bind({});
MySearchBarOrganism.args = {
  debounceQuery: "",
  onDebounceQuery: (tempQuery: string) => {
    console.log(tempQuery);
  },
  isScroll: true,
};
