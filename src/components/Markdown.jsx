import { RenderCounter } from "./";

export function Markdown() {
  return (
    <div className="border border-slate-50 p-4 mt-4 text-md">
      <RenderCounter />
      <h1 className="text-xl font-bold text-center">Summary</h1>
      <div className="grid grid-cols-2 gap-2 pt-2">
        <Section title={"Complexity/Boilerplate"}>
          <p className="italic">
            Low-medium. Not intrinsically difficult, I just found the concept of
            mutable state strange.
          </p>
          <ul className="pl-6 list-disc">
            <li>Establish state/proxies</li>
            <li>Grab & mutate those proxies from components.</li>
          </ul>
        </Section>
        <Section title={"Lines of code"}>
          <p>&lt; 50.</p>
        </Section>

        <Section title={"Time to implement"}>
          <p>Around 20 minutes.</p>
        </Section>

        <Section title={"Ease of learning"}>
          <p>
            Medium. The APIs themselves are simple enough - there is simply a
            large amount of boilerplate that is necessary.
          </p>
        </Section>

        <Section title={"Community size/Is it maintained?"}>
          <p>
            Medium, and yes. 50 contributors, 200+ closed PRs, 100+ closed
            issues.
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
