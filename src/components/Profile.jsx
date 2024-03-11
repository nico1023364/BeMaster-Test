import React from "react";

const Profile = ({ email, password }) => {
  return (
    <div>
      <h2>Perfil del Usuario</h2>
      <p>Email: {email}</p>
      <p>Contraseña: {password}</p>
    </div>
  );
};

export default Profile;
