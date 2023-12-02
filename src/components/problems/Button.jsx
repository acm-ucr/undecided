const Button = ({ text, bg, color, onClick }) => {
  return (
    <button
      className={`${bg} ${color} px-3 py-2 rounded hover:opacity-80`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
