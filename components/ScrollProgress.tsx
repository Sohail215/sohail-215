"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        (window.scrollY / totalHeight) * 100;

      setScroll(progress);
    };

    window.addEventListener("scroll", updateScroll);

    updateScroll();

    return () =>
      window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 z-[9999] h-[4px] bg-yellow-400 transition-all duration-150"
      style={{ width: `${scroll}%` }}
    />
  );
}