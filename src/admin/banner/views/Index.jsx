import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBanners, deleteBanner } from 'api/request.api';
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function Index() {
    const [banners, setBanners] = useState([]);

    const fetchData = async () => {
        try {
            const res = await getBanners();
            console.log(res);
            console.log(res.data);
            setBanners(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = (id) => async () => {
        try {
            await deleteBanner(id);
            setBanners(banners.filter(banner => banner._id !== id));
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getBanners().then(response => setBanners(response.data));
      }, []);
    // useEffect(() => { fetchData() }, []);

    return (
        <div>
            <table className="table caption-top">
                <caption>
                    <div className="d-flex justify-content-between mx-3">
                        <h3>Banner List</h3>
                        <Link to="/admin/book/create" className="btn btn-outline-primary">Create</Link>
                    </div>
                </caption>
                <thead>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Title</th>
                        <th scope="col">Image</th>
                        <th scope="col">Expire Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        banners.map((banner, index) => (
                            <tr key={banner._id}>
                                <th scope="row">{ index + 1 }</th>
                                <td>{ banner.title }</td>
                                <td><img src={`${baseUrl}${banner.image}`} alt={banner.title} width="50" height="50" /> </td>
                                <td>{ banner.expire_date }</td>
                                <td><button className="btn btn-danger" onClick={handleDelete(banner._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Index;

