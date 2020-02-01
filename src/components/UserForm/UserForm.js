import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from '../Input/Input';
import SaveButton from '../SaveButton/SaveButton';
import { startPostUser } from '../../redux/actions/user';

const UserForm = props => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState("");
    const handleAction = () => {
        dispatch(startPostUser({name, username, email}));
    };
    const afterSave = () => {
        props.afterSave();
        setName("");
        setUsername("");
        setEmail("");
    };

    return (
        <div>
            <Input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Name" />
            <Input onChange={e => setUsername(e.target.value)} value={username} type="text" placeholder="Username" />
            <Input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
            <SaveButton onClick={handleAction} callback={afterSave}/>
        </div>
    );
};
export default UserForm;