import React, { useState } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({
        html: 'Please enter all fields..'
      });
    } else {
      console.log(firstName, lastName);

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

export default AddTechModal;
