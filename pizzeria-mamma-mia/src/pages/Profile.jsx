import React from 'react';
import './Profile.css';

const Profile = () => {
  const email = 'jesus@apitz.com';

  const handleLogout = () => {
    alert('Cerrar sesión');
  };

  return (
    <div className="profile-container">
      <h1 className="profile-title">Perfil del Usuario</h1>
      <p className="profile-email">Email: {email}</p>
      <button className="profile-logout-button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
