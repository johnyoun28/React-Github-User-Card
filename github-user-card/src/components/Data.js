import React from 'react';

const Data = (props) => {
  console.log('here', props.gitData);
  return (
    <div className="data">
      <h2>Username: {props.gitData.login}</h2>
      <img src={props.gitData.avatar_url}></img>
    </div>
  );
};

export default Data;
