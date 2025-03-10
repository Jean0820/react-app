type showPros = {
  show: boolean;
};
const Alert = ({ show }: showPros) => {
  return (
    <div
      className={`bg-red-400 text-white py-0 px-6 rounded-sm w-fit absolute bottom-4
     right-4 gap-2 items-center justify-center ${show ? "flex" : "hidden"}`}
    >
      <i className="fa-regular fa-circle-exclamation"></i>
      <p className="flex justify-between items-center text-center pt-3">Error: lorem ipsum, dolor sit amet consectetur</p>
    </div>
  );
};

export default Alert;
