import React from 'react'

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <div>
       {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <center><strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
        </center></div>}
    </div>
  )
};

export default Alert;