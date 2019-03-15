import initialState from "../initialState";
import {
  INITIALIZED,
  CREATE_NOTIFICATION,
  REMOVE_NOTIFICATION,
  FETCHED_ASSETS
} from "./actions";

export default function appReducer(
  state = initialState.app,
  { type, payload }
) {
  switch (type) {
    case CREATE_NOTIFICATION: {
      return {
        ...state,
        notification: payload
      };
    }
    case REMOVE_NOTIFICATION: {
      return {
        ...state,
        notification: { open: false }
      };
    }
    case FETCHED_ASSETS: {
      return {
        ...state,
        assets: payload.data
      };
    }
    case INITIALIZED: {
      return {
        ...state,
        isInitialized: payload.isInitialized
      };
    }
    default:
      return state;
  }
}
