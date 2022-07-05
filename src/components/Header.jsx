import logo from "../logo.svg";
import { RenderCounter } from "./";

export function Header({ name }) {
  return (
    <nav className="pb-2 mb-2 border-b-2 flex flex-row justify-between items-center">
      <img src={logo} className="w-8" alt="an icon" />
      <h1 className="text-emerald-400 font-bold">{name}</h1>
      <RenderCounter />
    </nav>
  );
}
