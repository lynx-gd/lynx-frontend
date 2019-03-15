export const INITIALIZE = "app/INITIALIZE";
export const INITIALIZED = "app/INITIALIZED";
export const CREATE_NOTIFICATION = "app/CREATE_NOTIFICATION";
export const REMOVE_NOTIFICATION = "app/REMOVE_NOTIFICATION";
export const FETCHED_ASSETS = "app/FETCHED_ASSETS";
export const ADD_ASSET = "app/CREATE_ASSET";

export const initialize = () => ({
  type: INITIALIZE,
  payload: {}
});

export const initialized = isInitialized => ({
  type: INITIALIZED,
  payload: {
    isInitialized
  }
});

export const fetchedAssets = assets => ({
  type: FETCHED_ASSETS,
  payload: assets
});

export const createNotification = (text, good) => ({
  type: CREATE_NOTIFICATION,
  payload: { text, good, open: true }
});

export const removeNotification = () => ({
  type: REMOVE_NOTIFICATION
});

export const addAsset = asset => ({
  type: ADD_ASSET,
  payload: asset
});
