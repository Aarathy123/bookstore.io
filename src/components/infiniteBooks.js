import InfiniteScroll from "react-infinite-scroll-component";

export default function InfiniteBooks(props) {
  return (
    <InfiniteScroll
      dataLength={props.contents.length}
      hasMore={true}
      next={props.loadMore}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-between",
          paddingTop: "10%",
          marginRight: "10px",
        }}
      >
        {props.contents.map((book) => (
          <div className="booklist_bookDetails">
            <div>
              <div>
                {(book["poster-image"] && (
                  <img
                    src={`./images/${book["poster-image"]}`}
                    style={{ width: "95%" }}
                  />
                )) || (
                  <img
                    src={`./images/posterthatismissing.jpg}`}
                    style={{ width: "95%" }}
                  />
                )}
              </div>
              <div
                className="booklist_bookTitle"
                title={book.name || "No Name"}
              >
                {book.name || "No Name"}
              </div>
            </div>
          </div>
        ))}
      </div>
    </InfiniteScroll>
  );
}
