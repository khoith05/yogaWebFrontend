import { useSelector } from "react-redux";
import { MoonLoader } from "react-spinners";

import { selectIsLoading } from "../store/loading";

function LoadingWrapper(props) {
  const { children, loadingKeys, style } = props;

  const isLoading = useSelector((state) => selectIsLoading(state, loadingKeys));

  return isLoading ? (
    <div style={style}>
      <div className="loading-wrapper__spinner">
        <MoonLoader color="#36d7b7" />
      </div>
    </div>
  ) : (
    children
  );
}

export default LoadingWrapper;
