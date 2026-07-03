import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext);
    return (
        <div className='max-w-lg mx-auto my-10'>
            <h2>profile</h2>
            <p> email : {user.email}</p>
        </div>
    );
};

export default Profile;