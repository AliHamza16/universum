import { createGlobalState } from "react-hooks-global-state";
const { setGlobalState, useGlobalState } = createGlobalState({
  post: null,
  search: null,
  log: false,
  data: null,
});

export { useGlobalState, setGlobalState };
