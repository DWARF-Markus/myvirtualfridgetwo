export const state = () => ({
  isUserLoggedIn: false,
})

export const mutations = {
  setUserLoggedIn(state) {
    state.isUserLoggedIn = true
  },
  setUserLoggedOut(state) {
    state.isUserLoggedIn = false
  },
}
