import logo from "../logo.svg";
import { RenderCounter } from "./";

export function Header() {
  return (
    <nav className="pb-2 mb-2 border-b-2 flex flex-row justify-between items-center">
      <img src={logo} className="w-8" alt="an icon" />
      <h1>State Management Re-Render Comparison</h1>
      <RenderCounter />
    </nav>
  );
}
