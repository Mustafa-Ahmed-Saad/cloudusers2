const CustomAlert = ({ show, text, confirmYes, confirmNo }) => {
  if (show) {
    return (
      <div className="customAlert">
        <div>
          <p>{text}</p>
        </div>
        <div>
          <button className="customAlertyes" onClick={confirmYes}>
            yes
          </button>
          <button className="customAlertno" onClick={confirmNo}>
            no
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};
export default CustomAlert;
