import { RenderCounter } from "./";

export function Markdown() {
  return (
    <div className="border border-slate-50 p-4 mt-4 text-md">
      <RenderCounter />
      <h1 className="text-xl font-bold text-center">Summary</h1>
      <div className="grid grid-cols-2 gap-2 pt-2">
        <Section title={"Complexity/Boilerplate"}>
          <p className="italic">Low-medium</p>
          <ul className="pl-6 list-disc">
            <li>Familiarize with new interfaces</li>
            <li>Create atoms</li>
            <li>Consume atoms</li>
          </ul>
        </Section>
        <Section title={"Lines of code"}>
          <p>&lt; 20 (!!!)</p>
        </Section>

        <Section title={"Time to implement"}>
          <p>Roughly 15 minutes.</p>
        </Section>

        <Section title={"Difficulty of learning"}>
          <p>
            Low. This is a seriously simple approach to global state management.
          </p>
        </Section>

        <Section title={"Community size/Is it maintained?"}>
          <p>
            Large, and yes. Discord server with &gt; 5,000 members, 82
            contributors on github, updated regularly. 600+ closed PRs, 400+
            closed issues.
          </p>
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
