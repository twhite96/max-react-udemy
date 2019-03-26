import React from 'react';

const UserOutput = (props) => {
  return (
    <div>
      <p>Username: {props.user}</p>
      <p>Overwrite me!</p>
    </div>
  );
}

export default UserOutput;
