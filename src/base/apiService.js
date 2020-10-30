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

export const getDataAsync = async (url, params, callback, callbackError) => {
  try {
    const response = await axios.get(url, {
      params: {
        ...params,
      },
    });
    return callback(response.data);
  } catch (error) {
    return callbackError(error);
  }
};
