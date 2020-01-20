import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Table from '../../components/Table/Table';
import Axios from 'axios';

const columns = ['id', 'name', 'username', 'email'];


const Users = () => {
    let [data, setData] = useState([]);
    const fetchData = async () => {
        try{
            const res = await Axios.get('http://jsonplaceholder.typicode.com/users');
            setData(res.data.slice(0, 10));
            console.log(data);
        } catch(e) {
            throw e;
        } 
    };
    fetchData();
    return (
        <div>
            <Card width="fullwidth" title="Users">
                <Table columns={columns} data={data}></Table>
            </Card>
        </div>
    );
};

export default Users;