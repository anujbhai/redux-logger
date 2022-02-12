import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLogs } from '../../actions/logActions';

import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";

const Logs = props => {
  const { log: { logs, loading }, getLogs } = props;

  // const [logs, setLogs] = useState([]);
  // const [loading, SetLoading] = useState(false);

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  // const getLogs = async () => {
  //   SetLoading(true);

  //   const res = await fetch('/logs');
  //   const data = await res.json();

  //   setLogs(data);
  //   SetLoading(false);
  // };

  if (loading || logs === null) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>

      {!loading && logs.length === 0
        ? (<p>No logs to show...</p>)
        : (logs.map(log => <LogItem key={ log.id } log={ log } />))}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
