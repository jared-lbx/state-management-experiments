import { RenderCounter, Input, Radio } from "./";

export function Grid({ name, lastname, radio }) {
  return (
    <div className="mt-5 flex p-2 border">
      <RenderCounter />
      <div className="mt-4 grid grid-cols-2 p-2 w-full justify-items-center">
        <div className="w-64 border m-4 p-2">
          <Input value={name.value} setValue={name.handle} name={"Firstname"} />
        </div>
        <div className="w-64 border m-4 p-2">
          <Input
            value={lastname.value}
            setValue={lastname.handle}
            name={"Lastname"}
          />
        </div>
        <div className="w-64 border p-2">
          <Radio value={radio.value} setValue={radio.handle} />
        </div>
      </div>
    </div>
  );
}
