import { SOME_MUTATION } from './mutation-type'
const mutations = {
  [SOME_MUTATION] (state, payload) {
    // 变更状态
    state.count += payload.amount
  }
}
export default mutations
