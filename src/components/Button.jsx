"use client";
import { TbArrowRight } from "react-icons/tb";
import { COLORS } from "@/data/Button";
import { useState } from "react";

const Next = ({ text, color }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      className={`${COLORS[color].bg}  ${COLORS[color].text} p-3 w-20 h-20 rounded-full grid place-items-center group transition-all hover:w-60 ${COLORS[color].hoverbg} ${COLORS[color].hovertext} ease-in-out`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!hover ? (
        <TbArrowRight className="text-5xl transition group-hover:opacity-0" />
      ) : (
        <span className="text-2xl">{text}</span>
      )}
    </button>
  );
};

export default Next;
