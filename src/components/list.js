import React from "react";
import { connect } from "react-redux";
import { getBooks, setBooks } from "./redux";
import InfiniteBooks from "./infiniteBooks";
import Header from "./header";
import BooksFilter from "./filter";
import bookSelector from "../selectors/selector";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
    };
  }

  componentDidMount() {
    this.props.getBooks({ pageNumber: 1, callBack: this.props.setBooks });
  }

  componentDidUpdate() {
    if (this.props.contents !== this.state.contents) {
      this.setState({ contents: this.props.contents });
    }
  }
  loadMore = () => {
    const booksDisplayed = this.state.contents.length;
    if (booksDisplayed != this.props.totalItems) {
      const pageNumber = Math.floor(booksDisplayed / 20) + 1;
      this.props.getBooks({ pageNumber, callBack: this.props.setBooks });
    }
  };
  render() {
    return (
      <div className="booklist_parentDiv">
        <Header title={this.props.title} />
        <InfiniteBooks
          contents={this.state.contents}
          loadMore={this.loadMore}
        />
        <BooksFilter />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  contents: bookSelector(state.books.contents, state.books.titleFilter),
  title: state.books.title,
  totalItems: state.books.totalItems,
});
const mapDispatchToProps = (dispatch, props) => ({
  getBooks: (pageNo) => dispatch(getBooks(pageNo)),
  setBooks: (params) => dispatch(setBooks(params)),
});
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
