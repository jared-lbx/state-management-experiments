import { RenderCounter } from "./";

export function Markdown() {
  return (
    <div className="border border-slate-50 p-4 mt-4 text-md">
      <RenderCounter />
      <h1 className="text-xl font-bold text-center">Summary</h1>
      <div className="grid grid-cols-2 gap-2 pt-2">
        <Section title={"Lines of code"}>
          <p className="italic">&lt; 100</p>
        </Section>

        <Section title={"Time to implement"}>
          <p>Roughly 1 hour</p>
        </Section>

        <Section title={"Ease of learning"}>
          <p>
            Medium. The APIs themselves are simple enough, and this approach
            simplifies the consumption of state when compared to callback
            drilling..
          </p>
        </Section>
        <Section title={"Complexity/Boilerplate"}>
          <p className="italic">Medium</p>
          <ul className="pl-6 list-disc">
            <li>Establish state/contexts</li>
            <li>Create hooks</li>
            <li>Wrap components with context providers</li>
            <li>Consume state in components via hooks</li>
          </ul>
        </Section>

        <Section title={"Community size/Is it maintained?"}>
          <p>Large by default - it is a core React API.</p>
        </Section>

        <Section title={"Does it solve our problems?"}>
          <ul>
            <li>
              Re-rendering:{" "}
              <span className="inline-flex justify-center items-center text-xl font-semibold text-green-500">
                o
              </span>
            </li>
            <li>
              Prop Drilling:{" "}
              <span className="inline-flex justify-center items-center text-xl font-semibold text-green-500">
                o
              </span>
            </li>
          </ul>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="p-4 border">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="text-md">{children}</div>
    </div>
  );
}
