import CleRecordIndex from "./CleRecordIndex";
import { fetchLawyerRecords } from "../../actions/record_actions";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    records: state.records
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchLawyerRecords: lawyerId => dispatch(fetchLawyerRecords(lawyerId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CleRecordIndex);
