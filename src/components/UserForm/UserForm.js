import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import SaveButton from '../SaveButton/SaveButton';
import { startPostUser, clearErrorUser } from '../../redux/actions/user';
import MessageBar from '../MessageBar/MessageBar';

const UserForm = props => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState("");
    
    // If parameters then set state
    useEffect(() => {
        setName(props.name);
        setUsername(props.username);
        setEmail(props.email);
    }, [props.name, props.username, props.email, props.id])
    
    const error = useSelector(state => {
        return state.user.error;
    });
    const handleAction = () => {
        if(props.id) {
            return;
        }
        dispatch(startPostUser({name, username, email}));
    };
    const afterSave = () => {
        props.afterSave();
        setName("");
        setUsername("");
        setEmail("");
    };

    const closeMessageBar = () => {
        dispatch(clearErrorUser());
    };

    return (
        <div>
            <MessageBar className={`error halfwidth`} display={error} message="There was an error. " onClick={closeMessageBar}/>
            <Input onChange={e => setName(e.target.value)} value={name} type="text" placeholder="Name" />
            <Input onChange={e => setUsername(e.target.value)} value={username} type="text" placeholder="Username" />
            <Input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder="Email" />
            <SaveButton onClick={handleAction} callback={afterSave}/>
        </div>
    );
};

UserForm.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    afterSave: PropTypes.func.isRequired
};

export default UserForm;