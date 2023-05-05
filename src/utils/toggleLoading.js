import store from "../store";
import { toggleLoading as toggleLoadingReducer } from "../store/loading";

export default function toggleLoading({ key, loading }) {
  return store.dispatch(toggleLoadingReducer({ key, loading }));
}
