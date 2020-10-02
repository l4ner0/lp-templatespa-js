import axios from "axios";

const headers = {
  "content-type": "application/json",
  Authorization: process.env.VUE_APP_AUTHORIZATION,
};

async function defaultFunctionTemplate(payload) {
  try {
    const { data } = await axios({
      url: `${process.env.VUE_APP_URL}/`,
      method: "POST",
      headers: headers,
      data: payload
    });
    return data;
  } catch (error) {
    return {
      codRes: "99"
    };
  }
}

export { defaultFunctionTemplate };