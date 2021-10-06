import { IoSearch } from "react-icons/io5";
import { BiArrowBack } from "react-icons/bi";
import { connect } from "react-redux";
import { setOpenFilter } from "./redux";

function Header(props) {
  return (
    <div className="booklist_header">
      <div className="booklist_encloseHeader">
        <div className="booklist_headerComponent">
          <BiArrowBack color="white" />
        </div>
        <div className="booklist_headerTitle">{props.title}</div>
      </div>
      <div className="booklist_headerComponent booklist_encloseHeader">
        <IoSearch color="white" onClick={props.setOpenFilter} />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setOpenFilter: () => dispatch(setOpenFilter()),
});

export default connect(undefined, mapDispatchToProps)(Header);
