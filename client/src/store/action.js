
const actions = {
  incrementAsync ({commit}, amount) {
    setTimeout(() => {
      commit('SOME_MUTATION', amount)
    }, 1000)
  }
}
export default actions
