import { BsCircle } from "react-icons/bs";

const Table = ({ headers, setHeaders, empty, objects, setObjects }) => {
  return (
    <div className="w-full overflow-hidden flex flex-col">
      <div className="w-full py-2 text-sm text-code-white flex justify-evenly px-0 m-0">
        {headers.map((header, index) => (
          <div
            key={index}
            className={`font-semibold text-code-white flex items-center p-0 ${header.size}`}
          >
            {header.text}
          </div>
        ))}
      </div>
      {objects.map((obj, index) => (
        <div key={obj.id} className="text-code-white items-center">
          <div
            className={`${
              index % 2 == 0 ? "bg-code-black" : "bg-code-darkgray"
            } py-2 flex justify-evenly items-center w-full`}
          >
            {headers.map(
              (header, key) =>
                header.text !== "" && (
                  <div key={key} className={`p-0 text-sm ${header.size}`}>
                    {header.text === "status" ? <BsCircle /> : obj[header.text]}
                  </div>
                )
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
