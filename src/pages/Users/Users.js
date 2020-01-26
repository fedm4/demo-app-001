import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';
import AddButton from '../../components/AddButton/AddButton';
import  { startGetUsers } from '../../redux/actions/users';
import SaveButton from '../../components/SaveButton/SaveButton';

import './Users.scss';
import Input from '../../components/Input/Input';

const columns = ['id', 'name', 'username', 'email'];

const Users = props => {
    const dispatch = useDispatch();
    const [flipped, setFlipped] = useState("");
    const { users } = useSelector(state => {
        return state.users;
    });
    useEffect(() => {
        dispatch(startGetUsers());
    }, [dispatch]);

    const toggleFlipped = () => {
        setFlipped(flipped === "" ? "flipped" : ""); 
    } 

    return (
        <div className="container">
            <div className="flip-card-outer">
                <div className={`flip-card-inner ${flipped}`}>
                    <Card className="flip-card-front" width="fullwidth" title="Users">
                        <Table columns={columns} data={users}></Table>
                    </Card>
                    <Card className="flip-card-back" width="halfwidth" title="User">
                        <Input type="text" placeholder="Name" />
                        <Input type="text" placeholder="Username" />
                        <Input type="email" placeholder="Email" />
                        <SaveButton />
                    </Card>
                </div>
            </div>
            <AddButton onClick={toggleFlipped}></AddButton>
        </div>
    );
};

export default Users;