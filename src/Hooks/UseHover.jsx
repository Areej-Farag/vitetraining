import { useEffect, useState } from "react";

export default function useHover(reference) {
  const [onHover, setOnHover] = useState(false);

  useEffect(() => {
    if (!reference?.current) return;

    const element = reference.current;

    const handleMouseOver = () => setOnHover(true);
    const handleMouseOut = () => setOnHover(false);

    element.addEventListener("mouseover", handleMouseOver);
    element.addEventListener("mouseout", handleMouseOut);

    return () => {
      element.removeEventListener("mouseover", handleMouseOver);
      element.removeEventListener("mouseout", handleMouseOut);
    };
  }, [reference]);

  return onHover;
}
