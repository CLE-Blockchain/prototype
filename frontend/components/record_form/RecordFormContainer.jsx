import RecordForm from "./RecordForm";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    records: state.records
  };
};

export default connect(mapStateToProps, null)(RecordForm);
