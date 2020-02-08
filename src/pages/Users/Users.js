import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';
import AddButton from '../../components/AddButton/AddButton';
import  { startGetUsers } from '../../redux/actions/users';

import './Users.scss';
import UserForm from '../../components/UserForm/UserForm';

const columns = ['id', 'name', 'username', 'email'];

const Users = props => {
    const defaultSelectedUser = {id:"",name:"",username:"",email:""};
    const dispatch = useDispatch();
    const [flipped, setFlipped] = useState(false);
    const [selectedUser, setSelectedUser] = useState(defaultSelectedUser);
    const { users } = useSelector(state => {
        return state.users;
    });
    useEffect(() => {
        dispatch(startGetUsers());
    }, [dispatch]);

    const toggleFlipped = () => {
        setFlipped(!flipped); 
        if(flipped) {
            setSelectedUser(defaultSelectedUser);
        }
    } 

    const afterSave = () => {
        toggleFlipped();
    };
    const editUser = (user) => {
        setSelectedUser(user);
        toggleFlipped();
    };
    return (
        <div className="container">
            <div className="flip-card-outer">
                <div className={`flip-card-inner ${flipped ? "flipped" : ""}`}>
                    <Card className="flip-card-front" width="fullwidth" title="Users">
                        <Table edit={ user => editUser(user)} columns={columns} data={users}></Table>
                    </Card>
                    <Card className="flip-card-back" width="fullwidth" title="User">
                        <UserForm
                            afterSave={afterSave}
                            id={selectedUser.id}
                            name={selectedUser.name}
                            username={selectedUser.username}
                            email={selectedUser.email}
                            ></UserForm>
                    </Card>
                </div>
            </div>
            <AddButton backOnClick={true} flipped={flipped} onClick={toggleFlipped}></AddButton>
        </div>
    );
};

export default Users;