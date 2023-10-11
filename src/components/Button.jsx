"use client";
import { TbArrowRight } from "react-icons/tb";
import { COLORS } from "@/data/Button";
const Next = ({ text, color, transition }) => {
  return transition ? (
    <button
      className={`${COLORS[color].bg}  ${COLORS[color].text} p-3 w-20 h-20 rounded-full group transition-all hover:delay-200 hover:w-fit ${COLORS[color].hoverbg} ${COLORS[color].hovertext} ease-in-out`}
    >
      <TbArrowRight className="text-5xl transition group-hover:opacity-0" />
    </button>
  ) : (
    <button
      className={`${COLORS[color].bg}  ${COLORS[color].text} m-5 px-5 w-fit h-20 rounded-full text-lg`}
    >
      {text}
    </button>
  );
};

export default Next;
