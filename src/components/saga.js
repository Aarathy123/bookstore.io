import { takeLatest, all } from "redux-saga/effects";
import { getBooks as getBooksAction } from "./redux";
import { getBooksApi } from "../service/booksService";

let pageNumberValue = 0;
export function* getBookList(action) {
  try {
    const { pageNumber, callBack } = action.payload;
    if (pageNumber !== pageNumberValue) {
      pageNumberValue = pageNumber;
      const data = getBooksApi({ pageNumber, callBack });
    }
  } catch (e) {}
}

export function* startGetBooks() {
  yield takeLatest(getBooksAction.type, getBookList);
}

export default function* rootSaga() {
  yield all([startGetBooks()]);
}
