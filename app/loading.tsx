import { CircularProgress } from "@nextui-org/react";

const loadingPage = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <CircularProgress size="lg" color="success"/>
    </div>
  );
};

export default loadingPage;
