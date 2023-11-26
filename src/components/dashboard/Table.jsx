import Row from "./Row";

const Table = ({ objects }) => {
  return (
    <div className="text-white w-11/12">
      <div className="grid grid-cols-16">
        <div className="col-span-2 text-center">Status</div>
        <div className="col-span-6">Title</div>
        <div className="col-span-4">Topics</div>
        <div className="col-span-2 text-center">Difficulty</div>
        <div className="col-span-2" />
      </div>

      {objects.map(
        ({ id, title, status, topics, difficulty, saved }, index) => (
          <Row
            key={index}
            index={index}
            id={id}
            title={title}
            status={status}
            topics={topics}
            difficulty={difficulty}
            saved={saved}
          />
        )
      )}
    </div>
  );
};

export default Table;
