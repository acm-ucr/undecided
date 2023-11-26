const Tag = ({ text, color }) => {
  return (
    <div className={`${color} px-2 py-0.5 w-fit rounded-full text-black`}>
      {text}
    </div>
  );
};

export default Tag;
