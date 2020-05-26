import preStorageProcessing from "./utils/preStorageProcessing";
import location from './utils/location';

export default (store) => {
  const user = (localStorage.getItem("user") &&
      preStorageProcessing.fromString(localStorage.getItem("user"))) ||
      null;
  if(!user) return;

  store.dispatch({
    type: "setUserAction",
    payload:
      (localStorage.getItem("user") &&
        preStorageProcessing.fromString(localStorage.getItem("user"))) ||
      null,
  });
  // location.push('/home');
};
