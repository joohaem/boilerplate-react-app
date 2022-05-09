import MyComponent from "./MyComponent";

export default {
  title: "Example/MyComponent",
  component: MyComponent,
  decorators: [
    (MyComponent: () => JSX.Element) => (
      <div style={{ margin: "3em" }}>
        <MyComponent />
      </div>
    ),
  ],
};

// export const WithProp = () => <MyComponent prop="value" />;
export const Basic = () => <MyComponent />;

Basic.parameters = {
  backgrounds: {
    values: [
      { name: "lightBlue", value: "lightBlue" },
      { name: "gray", value: "#eeeeee" },
    ],
  },
};

Basic.storyName = "Custom";
