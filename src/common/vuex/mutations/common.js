export default {
  SET_USER_INFO: (state, userInfo) => {
    state.commonState.userInfo = userInfo
  },
  SET_MINI_INFO: (state, miniInfo) => {
    state.commonState.miniInfo = miniInfo
  },
  SET_TOKEN: (state, token) => {
    state.commonState.token = token
  },
  IS_LOADED: (state) => {
    state.commonState.isLoaded = true
  },
  SET_CLASS_INFO: (state, classInfo) => {
    state.commonState.classInfo = classInfo
  }
}
