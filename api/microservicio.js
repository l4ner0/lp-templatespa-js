const headers = {
  "content-type": "application/json",
  Authorization: process.env.VUE_APP_AUTHORIZATION
};

 async function defaultFunctionTemplate(axios, payload) {
  try {
    const { data } = await axios({
      url: `/api/news?page=2`,
      method: "GET"
    });
    return data;
  } catch (error) {
    return {
      codRes: "99",
      msg: error
    };
  }
}

export { defaultFunctionTemplate };
