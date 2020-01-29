import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../Input/Input';
import SaveButton from '../SaveButton/SaveButton';
import { startPostUser } from '../../redux/actions/user';

const UserForm = props => {
    const dispatch = useDispatch();
    const [name, setName] = useState(null);
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const handleAction = () => {
        dispatch(startPostUser({name, username, email}));
    };

    return (
        <div>
            <Input onChange={e => setName(e.target.value)} type="text" placeholder="Name" />
            <Input onChange={e => setUsername(e.target.value)} type="text" placeholder="Username" />
            <Input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
            <SaveButton onClick={handleAction}/>
        </div>
    );
};
export default UserForm;