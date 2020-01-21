import React, { useState, useEffect } from 'react';
import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';
import Axios from 'axios';
import AddButton from '../../components/AddButton/AddButton';

const columns = ['id', 'name', 'username', 'email'];

const Users = () => {
    let [data, setData] = useState([]);
    const fetchData = async () => {
        try{
            const res = await Axios.get('https://jsonplaceholder.typicode.com/users');
            setData(res.data);
        } catch(e) {
            throw e;
        } 
    };
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            <Card width="fullwidth" title="Users">
                <Table columns={columns} data={data}></Table>
            </Card>
            <AddButton></AddButton>
        </div>
    );
};

export default Users;