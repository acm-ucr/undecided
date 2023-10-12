"use client";
import { TbArrowRight } from "react-icons/tb";
import { COLORS } from "@/data/Button";
import { useState } from "react";

const Next = ({ text, color, transition }) => {
  const [hover, setHover] = useState(false);
  return transition ? (
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
  ) : (
    <button
      className={`${COLORS[color].bg}  ${COLORS[color].text} m-5 px-5 w-fit h-20 rounded-full text-2xl transition ${COLORS[color].hoverbg} ${COLORS[color].hovertext}`}
    >
      {text}
    </button>
  );
};

export default Next;
