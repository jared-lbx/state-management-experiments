import { marked } from "marked";

const md = `
### The jist
`;

export function Marked() {
  const markdown = marked(md);

  return <div>{markdown}</div>;
}
