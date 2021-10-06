const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_BOOK_LIST":
      const data = action.payload.page;
      const { title } = data;
      const contentItems = data["content-items"];
      const totalItems = data["total-content-items"];
      const contents =
        (state.contents && state.contents.concat(contentItems.content)) ||
        contentItems.content;
      return { ...state, contents, title, totalItems };
    case "SET_FILTER_OPEN":
      return { ...state, openFilter: true };
    case "SET_FILTER_CLOSE":
      return { ...state, openFilter: false };
    case "SET_TITLE_FITLER":
      return { ...state, titleFilter: action.payload };
    default:
      return state;
  }
};
