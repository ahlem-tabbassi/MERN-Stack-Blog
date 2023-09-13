import React, { useState, useEffect } from 'react';

const UserProfile = ({ userFromBackend }) => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      if (userFromBackend) {
        setUser(userFromBackend);
      } else {
        setError("User data not available");
      }
    }, [userFromBackend]);
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    if (!user) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="user-profile">
        <img
          src={user.img}
          alt={`${user.username}'s Profile`}
          className="profile-picture"
        />
        <h2>{user.username}</h2>
      </div>
    );
  };
  
export default UserProfile;
