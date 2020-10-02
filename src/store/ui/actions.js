export function updateStep({ commit }, payload) {
  commit("ui/UPDATE_STEP", payload, { root: true });
}

export function setModalText({ commit }, payload) {
  commit("ui/SET_MODAL_TEXT", payload, { root: true });
}

export function setModalAlert({ commit }, payload) {
  commit("ui/SET_MODAL_ALERT", payload, { root: true });
}

export function resetModalText({ commit }) {
  commit(
    "ui/SET_MODAL_TEXT",
    {
      isModal: false,
      isPersistent: false,
      maxWidth: 450,
      sizeModal: null,
      titulo: "",
      texto: "",
    },
    { root: true }
  );
}

export function resetModalAlert({ commit }) {
  commit(
    "ui/SET_MODAL_ALERT",
    {
      isModal: false,
      isPersistent: false,
      maxWidth: 350,
      imgModal: false,
      tituloModal: null,
      msgModal: null,
      href: false,
    },
    { root: true }
  );
}
