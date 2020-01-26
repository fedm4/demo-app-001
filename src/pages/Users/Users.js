import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';
import AddButton from '../../components/AddButton/AddButton';
import  { startGetUsers } from '../../redux/actions/users';

const columns = ['id', 'name', 'username', 'email'];

const Users = props => {
    const dispatch = useDispatch();
    const { users } = useSelector(state => {
        return state.users;
    });
    useEffect(() => {
        dispatch(startGetUsers());
    }, [dispatch]);
    return (
        <div>
            <Card width="fullwidth" title="Users">
                <Table columns={columns} data={users}></Table>
            </Card>
            <AddButton></AddButton>
        </div>
    );
};

export default Users;