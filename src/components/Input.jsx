import { RenderCounter } from "./";

export function Input({ value, setValue, name }) {
  return (
    <div>
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-300"
        >
          {name}
        </label>
        <RenderCounter />
      </div>
      <div className="mt-1 mx-auto">
        <input
          type="text"
          name="name"
          id="name"
          className="shadow-sm px-1 font-medium h-6 text-lg focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border-gray-300 rounded-md bg-zinc-700"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </div>
  );
}
