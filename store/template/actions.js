import { defaultFunctionTemplate } from "~/api/microservicio";
export default {
  async defaultFunction({ state, commit, dispatch, rootState }) {
    try {
      const res = await defaultFunctionTemplate(this.$axios, null);
      console.log("data: ", res);
    } catch (error) {
      console.log(error)
    }
  }
}
