import { connect } from "react-redux";
import Modal from "react-modal";
import React, { useState } from "react";
import { setCloseFilter, setTitleFilter } from "./redux";

const BooksFilter = ({ openFilter, closeFilter, setTitleFilter }) => {
  const [title, setTitleFilterValue] = useState("");
  const onTitleFilterChange = (value) => {
    setTitleFilterValue(value);
    if (value && value.length > 0) {
      setTitleFilter(value);
    }
    if (!value || value.length == 0) {
      setTitleFilter("");
    }
  };
  return (
    <div>
      <Modal
        isOpen={openFilter}
        style={{
          content: {
            height: "10%",
            width: "85%",
            top: "7.5%",
            left: "2%",
            background: "linear-gradient(180deg, white, white, white, gray)",
          },
          overlay: { backgroundColor: "rgba(255, 255, 255, 0.3)" },
        }}
        onRequestClose={() => closeFilter()}
        ariaHideApp={false}
      >
        <div className="booklist_filterArrow"></div>
        <div>
          <div className="booklist_filterSearchBy">Search By:</div>
          <input
            type="search"
            value={title}
            placeholder="Title of Book"
            style={{ width: "100%" }}
            onChange={(e) => onTitleFilterChange(e.target.value)}
          />
        </div>
      </Modal>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setTitleFilter: (title) => dispatch(setTitleFilter(title)),
  closeFilter: () => dispatch(setCloseFilter()),
});

const mapStateToProps = (state) => ({
  openFilter: state.books.openFilter,
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksFilter);
