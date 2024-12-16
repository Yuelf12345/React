import { useState, useDeferredValue, memo } from "react";

const SlowList = memo(function SlowList({ text }: { text: string }) {
  console.log("[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />");

  let items = [];
  for (let i = 0; i < 250; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

function SlowItem({ text }: { text: string }) {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {}
  return <li className="item">Text: {text}</li>;
}

export default function App() {
  const [text, setText] = useState("");
  const deferredText: string = useDeferredValue(text);
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <SlowList text={deferredText} />
    </>
  );
}
