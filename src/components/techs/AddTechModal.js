import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

import M from "materialize-css/dist/js/materialize.min.js";
import { addTech } from '../../actions/techActions';

const AddTechModal = props => {
  const { addTech } = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html: 'Please enter all fields..'
      });
    } else {
      addTech({ firstName, lastName });

      M.toast({
        html: `New Techncian ${firstName} ${lastName} added..`
      });

      // @TODO clear fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <div
      id="tech-modal"
      className="modal"
      style={modalStyle}
    >
      <div className="modal-content">
        <h4>New Technician</h4>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">First Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">Last Name</label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
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

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
