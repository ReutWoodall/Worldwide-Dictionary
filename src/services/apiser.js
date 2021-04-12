export const URL_API = "https://restcountries.eu/rest/v2/name/";

export const doApiGet = async (_url) => {
  try {
    let resp = await fetch(_url);
    let data = await resp.json();
    return data;
  }
  catch (err) {
    console.log(err);
    alert("there ia a problem!")
    return err;
  }
}