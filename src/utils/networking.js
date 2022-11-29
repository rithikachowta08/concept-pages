import axios from "axios";
let MJX_ENDPOINT = `https://rmqrk3fq58.execute-api.ap-southeast-1.amazonaws.com/mjax/render.json`;
export async function fetchData(equation = "$\\frac{1}{2}$") {
  try {
    const resp = await axios.post(MJX_ENDPOINT, {
      texInput: {
        title: equation
      }
    });
    return Promise.resolve(resp.data.data);
  } catch (err) {
    return Promise.reject(err);
  }
}
