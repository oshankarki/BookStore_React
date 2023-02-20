import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, deleteCategory } from 'api/request.api';
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function Index() {
    const [categories, setCategories] = useState([]);

    const fetchData = async () => {
        try {
            const res = await getCategories();
            console.log(res);
            console.log(res.data);
            setCategories(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = (id) => async () => {
        try {
            await deleteCategory(id);
            setCategories(categories.filter(category => category._id !== id));
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCategories().then(response => setCategories(response.data));
      }, []);
    // useEffect(() => { fetchData() }, []);

    return (
        <div>
            <table className="table caption-top">
                <caption>
                    <div className="d-flex justify-content-between mx-3">
                        <h3>Category List</h3>
                        <Link to="/admin/category/create" className="btn btn-outline-primary">Create</Link>
                    </div>
                </caption>
                <thead>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Title</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        categories.map((category, index) => (
                            <tr key={category._id}>
                                <th scope="row">{ index + 1 }</th>
                                <td>{ category.title }</td>
                                <td><button className="btn btn-danger" onClick={handleDelete(category._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Index;

