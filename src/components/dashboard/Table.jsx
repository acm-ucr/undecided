import { BsCircle } from "react-icons/bs";

const Table = ({ headers, setHeaders, empty, objects, setObjects }) => {
  return (
    <div className="w-full overflow-hidden flex flex-col">
      <div className="w-full py-2 text-sm text-code-white flex justify-evenly px-0 m-0">
        {headers.map((header, index) => (
          <div
            key={index}
            className="font-semibold text-code-white flex items-center p-0"
          >
            {header.text}
          </div>
        ))}
      </div>
      {objects.map((obj, index) => (
        <div key={obj.id} className="text-code-white">
          <div
            className={`${
              index % 2 == 0 ? "bg-code-black" : "bg-code-darkgray"
            } py-2 grid grid-cols-1 w-full`}
          >
            <div className="m-0 p-0 flex justify-evenly items-center">
              <BsCircle />
              <div>{obj.name}</div>
              <div>{obj.topic}</div>
              <div>{obj.difficulty}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
