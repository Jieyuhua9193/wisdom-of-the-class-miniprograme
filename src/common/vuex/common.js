import {mapState} from 'vuex'

export default {
  computed: mapState({
    userInfo (state) {
      return state.commonState.userInfo
    },
    miniInfo (state) {
      return state.commonState.miniInfo
    }
  })
}
