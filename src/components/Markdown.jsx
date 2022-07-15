import { RenderCounter } from "./";

export function Markdown() {
  return (
    <div className="border border-slate-50 p-4 mt-4 text-md">
      <RenderCounter />
      <h1 className="text-xl font-bold text-center">Summary</h1>
      <div className="grid grid-cols-2 gap-2 pt-2">
        <Section title={"Does it solve our problems?"}>
          <ul>
            <li>
              Re-rendering:{" "}
              <span className="inline-flex justify-center items-center text-xl font-semibold text-red-500">
                x
              </span>
            </li>
            <li>
              Prop Drilling:{" "}
              <span className="inline-flex justify-center items-center text-xl font-semibold text-red-500">
                x
              </span>
            </li>
          </ul>
        </Section>
        <Section title={"Lines of code"}>
          Nearly 100. Depends on how you count.
        </Section>

        <Section title={"Community size/Is it maintained?"}>
          <p>Large by default - it is a core React API.</p>
        </Section>
        <Section title={"Time to implement"}>
          <p>
            Roughly 1 <span className="diagonal-fractions">1/2</span> - 2 hours
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

        <Section title={"Difficulty of learning"}>
          <p>
            Medium. The APIs themselves are simple enough - there is simply a
            large amount of boilerplate that is necessary.
          </p>
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
