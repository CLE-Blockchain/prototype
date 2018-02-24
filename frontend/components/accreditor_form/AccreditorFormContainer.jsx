import AccreditorForm from "./AccreditorForm";
import { createTransaction } from "../../actions/accreditor_actions";
import { connect } from "react-redux";

// const mapStateToProps = (state, ownProps) => {
//   return {
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    createTransaction: data => dispatch(createTransaction(data))
  };
};

export default connect(null, mapDispatchToProps)(AccreditorForm);
