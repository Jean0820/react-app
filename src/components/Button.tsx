type ButtonPros = {
  name: string;
  type: string;
  disabled?: boolean;
  onClick: () => void;
};
const Button = ({ name, type, disabled, onClick }: ButtonPros) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn ${type} m-10 cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default Button;
