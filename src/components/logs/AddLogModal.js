import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import M from 'materialize-css/dist/js/materialize.min.js';
import { addLogs } from '../../actions/logActions';
import TechSelectOptions from '../techs/TechSelectOptions';

const AddLogModal = props => {
  const { addLogs } = props;

  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter message and add a technician..' });
    } else {
      console.log(message, tech, attention);
      const newLog = {
        message,
        tech,
        attention,
        date: new Date()
      };

      addLogs(newLog);
      M.toast({ html: `Log added by ${ tech }` });

      // @TODO clear fields
      setMessage('');
      setAttention(false);
      setTech('');
    }
  };

  return (
    <div
      id="add-log-modal"
      className="modal"
      style={ modalStyle }
    >
      <div className="modal-content">
        <h4>Enter System Log</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={ message }
              onChange={ e => setMessage(e.target.value) }
            />
            <label htmlFor="message" className="active">Log Message</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={ e => setTech(e.target.value) }
            >
              <option value="" disabled>-- Select --</option>
              <TechSelectOptions />
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={ attention }
                  value={ attention }
                  onChange={ () => setAttention(!attention) }
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={ onSubmit }
          className="modal-close waves-effect waves-light btn blue"
        >Enter</a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: 'auto'
};

AddLogModal.propTypes = {
  addLogs: PropTypes.func.isRequired,
};

export default connect(null, { addLogs })(AddLogModal);
