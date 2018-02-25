import { connect } from "react-redux";
import Lawyer from "./Lawyer";
import { uploadRecord } from "../../actions/record_actions";

const mapDispatchToProps = dispatch => {
  return {
    uploadRecord: data => dispatch(uploadRecord(data))
  };
};

export default connect(null, mapDispatchToProps)(Lawyer);
