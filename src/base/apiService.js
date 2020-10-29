import axios from 'axios';

export const getData = (url, params, callback, callbackError) => {
  axios
    .get(url, {
      params: {
        ...params,
      },
    })
    .then(function (response) {
      callback(response.data);
    })
    .catch(function (error) {
      callbackError(error);
    })
    .then(function () {});
};
