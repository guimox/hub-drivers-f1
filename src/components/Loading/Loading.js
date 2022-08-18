import { ReactComponent as HelmetLogo } from "./helmet.svg";
import { LoadingWrapper } from "./LoadingStyles";

const Loading = () => {
  return (
    <>
      <LoadingWrapper>
        <HelmetLogo />
      </LoadingWrapper>
    </>
  );
};

export default Loading;
