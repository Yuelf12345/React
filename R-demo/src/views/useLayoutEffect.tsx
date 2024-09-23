import { useLayoutEffect, useRef } from "react";
const LayoutEffect: React.FC = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const current: HTMLElement | null = ref.current;
    console.log("useLayoutEffect", current!.offsetWidth);
  }, []);

  return <div ref={ref}>LayoutEffect</div>;
};

export default LayoutEffect;
