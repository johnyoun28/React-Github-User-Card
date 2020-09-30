import React from 'react';

const Followers = (props) => {
  return (
    <div>
      {props.gitFollowers.map((follower) => (
        <div key={follower.id}>
          <h2>Followers</h2>

          <h3>{follower.login}</h3>
          <img src={follower.avatar_url}></img>
        </div>
      ))}
    </div>
  );
};

export default Followers;
