import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext);
    return (
        <div>
            <h2>profile</h2>
            <p> email : {user.email}</p>
        </div>
    );
};

export default Profile;