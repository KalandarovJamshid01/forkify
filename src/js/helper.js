import { TIMEOUT_SEC } from './config';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(`Salom Request took too long! Timeout after ${s} second`)
      );
    }, s * 1000);
  });
};
export const getJSON = async function (url) {
  try {
    const data = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const dataJSON = await data.json();
    return dataJSON;
  } catch (err) {
    throw err;
  }
};
