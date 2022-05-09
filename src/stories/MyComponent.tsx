export interface MyComponentProps {
  text: string;
  onClick: () => void;
}

export default function MyComponent({ text, ...props }: MyComponentProps) {
  return <div {...props}>{text}</div>;
}
