import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getUsers, deleteUser } from 'api/request.api';

function Index() {
    const [users, setUsers] = useState([]);

    const fetchData = async () => {
        try {
            const res = await getUsers();
            setUsers(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = (id) => async () => {
        try {
            await deleteUser(id);
            fetchData();
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => { fetchData() }, []);

    return (
        <div>
            <table className="table caption-top">

                <caption>
                    <div className="d-flex justify-content-between mx-3">
                        <h3>User List</h3>
                        <Link to="/admin/user/create" className="btn btn-outline-primary">Create</Link>
                    </div>
                </caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row">{ index+1 }</th>
                                <td>{ user.name }</td>
                                <td>{ user.email }</td>
                                <td>{ user.role }</td>
                                <td><button className="btn btn-danger" onClick={handleDelete(user._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Index