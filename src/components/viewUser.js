import React from 'react';

const ViewUser = (props) => {
  // when user click button back to all users
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="user-conrainer">
      <div className="conatiner">
        <h2>user: {props.user.name}</h2>
        <div className="overlay">
          <div>name: {props.user.name}</div>
          <div>email: {props.user.email}</div>
          <div>city: {props.user.address.city}</div>
          <div>company name: {props.user.company.name}</div>
        </div>
        <div className="back">
          <button className="btn btn-secondary" onClick={handleBack}>
            back to all users
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewUser;
