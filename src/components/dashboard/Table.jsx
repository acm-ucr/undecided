import { BsCircle } from "react-icons/bs";
import { COLORS } from "@/data/Difficulty";
import { TOPIC_COLORS } from "@/data/Topic";

const Table = ({ headers, setHeaders, empty, objects, setObjects }) => {
  return (
    <div className="w-full overflow-hidden flex flex-col">
      <div className="w-full py-2 text-sm text-code-white grid grid-cols-4 px-0 m-0">
        {headers.map((header, index) => (
          <div
            key={index}
            className={`font-semibold text-code-white p-0 flex ${header.size} ${
              header.text === "status" && "justify-center"
            }`}
          >
            {header.text}
          </div>
        ))}
      </div>
      {objects.map((obj, index) => (
        <div
          key={obj.id}
          className={`${
            index % 2 == 0 ? "bg-code-black" : "bg-code-darkgray"
          } py-2 grid grid-cols-4 text-code-white w-full`}
        >
          {headers.map(
            (header, key) =>
              header.text !== "" && (
                <div
                  key={key}
                  className={`text-sm p-0 ${header.size} grid content-center`}
                >
                  {header.text === "status" && (
                    <div className="place-self-center">
                      <BsCircle />
                    </div>
                  )}
                  {header.text === "title" && (
                    <p className="place-self-left">{obj[header.text]}</p>
                  )}
                  {header.text === "topic" && (
                    <div
                      className={`${
                        TOPIC_COLORS[obj[header.text]]
                      } text-black rounded-full px-1.5 py-0.5 text-sm w-fit`}
                    >
                      {obj[header.text]}
                    </div>
                  )}
                  {header.text === "difficulty" && (
                    <div className={`${COLORS[obj[header.text]]}`}>
                      {obj[header.text]}
                    </div>
                  )}
                </div>
              )
          )}
        </div>
      ))}
    </div>
  );
};

export default Table;
