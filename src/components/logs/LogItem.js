import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Moment from 'react-moment';

import M from 'materialize-css/dist/js/materialize.min.js';
import { deleteLog, setCurrent } from '../../actions/logActions';

const LogItem = props => {
  const { log, deleteLog, setCurrent } = props;

  const onDelete = () => {
    deleteLog(log.id);
    M.toast({ html: 'Log Deleted' });
  };

  return (
    <li className="collection-item">
      <a
        href="#edit-log-modal"
        className={ `modal-trigger ${ log.attention ? 'red-text' : 'blue-text' }` }
        onClick={ () => setCurrent(log) }
      >{ log.message }</a>
      <br />
      <span className="grey-text">
        <span className="black-text">ID# { log.id }</span> Last updated by{' '}
        <span className="black-text">{ log.tech }</span> on{' '}
        <Moment format="MMMM Do YYYY, h:mm:ss a">{ log.date }</Moment>
      </span>

      <a
        href="#!"
        className="secondary-content"
        onClick={ () => onDelete() }
      >
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  )
}

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(null, {deleteLog, setCurrent})(LogItem);
