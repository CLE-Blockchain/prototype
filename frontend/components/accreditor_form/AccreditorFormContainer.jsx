import AccreditorForm from "./AccreditorForm";
import { createRecord } from "../../actions/record_actions";
import { connect } from "react-redux";

const mapDispatchToProps = dispatch => {
  return {
    createRecord: data => dispatch(createRecord(data))
  };
};

export default connect(null, mapDispatchToProps)(AccreditorForm);
