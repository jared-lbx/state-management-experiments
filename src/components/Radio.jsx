import { RenderCounter } from "./";

const choices = [
  { id: "1", title: "This one" },
  { id: "2", title: "No, this one" },
  { id: "3", title: "On second thought, this one" },
];

export function Radio({ value, setValue }) {
  return (
    <div>
      <div className="flex justify-between">
        <label className="block text-sm font-medium text-gray-300">
          Choices
        </label>
        <RenderCounter />
      </div>
      <p className="text-sm leading-5 text-gray-500">
        Which choice do you choose?
      </p>
      <fieldset className="mt-4">
        <div className="space-y-4">
          {choices.map((notificationMethod) => (
            <div key={notificationMethod.id} className="flex items-center">
              <input
                id={notificationMethod.id}
                name="notification-method"
                type="radio"
                defaultChecked={notificationMethod.id === "email"}
                onChange={() => {
                  setValue(notificationMethod.title);
                }}
                className="focus:ring-emerald-500 h-4 w-4 text-emerald-600 border-gray-300"
              />
              <label
                htmlFor={notificationMethod.id}
                className={`ml-3 block text-sm font-medium  ${
                  value === notificationMethod.title
                    ? "text-emerald-400"
                    : "text-gray-400"
                }`}
              >
                {notificationMethod.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
