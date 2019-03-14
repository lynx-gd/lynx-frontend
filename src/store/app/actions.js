export const INITIALIZE = "app/INITIALIZE";
export const INITIALIZED = "app/INITIALIZED";
export const SET_USER = "app/SET_USER";
export const LOGIN_USER = "app/LOGIN_USER";
export const SIGNUP_USER = "app/SIGNUP_USER";
export const LOGOUT_USER = "app/LOGOUT_USER";
export const SET_ERROR = "app/ERROR";
export const CREATE_NOTIFICATION = "app/CREATE_NOTIFICATION";
export const REMOVE_NOTIFICATION = "app/REMOVE_NOTIFICATION"
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

export const setUser = user => ({
  type: SET_USER,
  payload: { user }
});

export const login = (location, { username, password }) => ({
  type: LOGIN_USER,
  payload: { location, username, password }
});

export const signup = (location, form) => ({
  type: SIGNUP_USER,
  payload: { location, ...form }
});

export const logout = () => ({
  type: LOGOUT_USER
});

export const setError = error => ({
  type: SET_ERROR,
  payload: { error }
});

export const createNotification = (text, good) =>({
  type:CREATE_NOTIFICATION,
  payload:{text,good, open:true}
})

export const removeNotification = () => ({
  type:REMOVE_NOTIFICATION
})