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

export const Basic = () => <MyComponent />;
// export const WithProp = () => <MyComponent prop="value" />;
