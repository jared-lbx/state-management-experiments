import { RenderCounter } from "./";

export function Markdown() {
  return (
    <div className="border border-slate-50 p-4 mt-4 text-md">
      <RenderCounter />
      <h1 className="text-xl font-bold text-center">Summary</h1>
      <p className="italic">
        Also includes <span className="font-mono not-italic">localStorage</span>{" "}
        integration!!!
      </p>
      <div className="grid grid-cols-2 gap-2 pt-2">
        <Section title={"Lines of code"}>~50.</Section>

        <Section title={"Time to implement"}>
          <p>Roughly 30 minutes.</p>
        </Section>

        <Section title={"Difficulty of learning"}>
          <p>
            Low-medium. Simple, very intuitive APIs. Excellent documentation!{" "}
          </p>
        </Section>
        <Section title={"Complexity/Boilerplate"}>
          <p className="italic">Medium-High</p>
          <ul className="pl-6 list-disc">
            <li>Establish state</li>
            <li>Create contexts</li>
            <li>Wrap components with context providers</li>
            <li>Consume contexts</li>
            <li>Pass their props</li>
            <li>Use these props</li>
          </ul>
        </Section>

        <Section title={"Community size/Is it maintained?"}>
          <p>
            Large, yes. 99 contributors, 300+ closed PRs, 400+ closed issues.
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
