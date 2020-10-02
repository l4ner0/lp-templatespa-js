export default {
  UPDATE_STEP(state, payload) {
    state.step = payload;
  },
  SET_MODAL_TEXT(state, payload) {
    state.modalText = payload;
  },
  SET_MODAL_ALERT(state, payload) {
    state.modalAlert = payload;
  }
}
