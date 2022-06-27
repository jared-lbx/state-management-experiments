import React from "react";

export function RenderCounter() {
  const renderCounter = React.useRef(0);
  renderCounter.current = renderCounter.current + 1;
  return (
    <div className="w-8">
      <span className="text-sm text-emerald-500">{renderCounter.current}x</span>
    </div>
  );
}
