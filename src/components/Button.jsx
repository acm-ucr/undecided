"use client";
import { TbArrowRight } from "react-icons/tb";
import { COLORS } from "@/data/Button";
import { useState } from "react";

const Next = ({ text, color, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <button
      className={`${COLORS[color].bg}  ${COLORS[color].text} p-3 rounded-full transition-all ${COLORS[color].hoverbg} ${COLORS[color].hovertext} ease-in-out flex items-center justify-center text-4xl`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      {!hover ? (
        <TbArrowRight className="transition" />
      ) : (
        <span className="py-1 text-2xl">{text}</span>
      )}
    </button>
  );
};

export default Next;
