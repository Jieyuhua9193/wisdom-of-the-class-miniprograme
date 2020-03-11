import {mapState} from 'vuex'

export default {
  computed: mapState({
    userInfo (state) {
      return state.commonState.userInfo
    },
    miniInfo (state) {
      return state.commonState.miniInfo
    },
    isLoaded (state) {
      return state.commonState.isLoaded
    },
    classInfo (state) {
      return state.commonState.classInfo
    }
  })
}
