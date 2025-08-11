import React, { useEffect, useState } from "react";

export default function useCountdown(initialTime = 10) {
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (time <= 0) return;
    else if (isActive && time > 0) {
      setTimeout(() => {
        setTime(() => time - 1);
      }, 1000);
    }
  }, [time, isActive]);

  return [time, setIsActive, isActive];
}
