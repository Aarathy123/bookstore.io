import request from "request";

export const getBooksApi = ({ pageNumber, callBack }) => {
  try {
    request(
      {
        url: `https://615c97dac29813001773627d.mockapi.io/books/page${pageNumber}`,
        json: true,
      },
      (error, { body } = {}) => {
        callBack(body);
      }
    );
  } catch (e) {
    throw Error("Couldn't connect to server");
  }
};
