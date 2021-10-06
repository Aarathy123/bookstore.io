import { createAction } from "@reduxjs/toolkit";

export const getBooks = createAction("FETCH_BOOK_LIST");

export const setBooks = createAction("SET_BOOK_LIST");

export const setOpenFilter = createAction("SET_FILTER_OPEN");

export const setCloseFilter = createAction("SET_FILTER_CLOSE");

export const setTitleFilter = createAction("SET_TITLE_FITLER");
