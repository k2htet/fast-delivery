import { RotatingSquare } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <RotatingSquare
        height="100"
        width="100"
        color="#273036"
        ariaLabel="rotating-square-loading"
        strokeWidth="4"
        visible={true}
      />
    </div>
  );
};

export default Loading;
