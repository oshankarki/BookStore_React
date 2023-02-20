import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCoupons, deleteCoupon } from 'api/request.api';
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function Index() {
    const [coupons, setCoupons] = useState([]);

    const fetchData = async () => {
        try {
            const res = await getCoupons();
            console.log(res);
            console.log(res.data);
            setCoupons(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = (id) => async () => {
        try {
            await deleteCoupon(id);
            setCoupons(coupons.filter(coupon => coupon._id !== id));
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCoupons().then(response => setCoupons(response.data));
      }, []);
    // useEffect(() => { fetchData() }, []);

    return (
        <div>
            <table className="table caption-top">
                <caption>
                    <div className="d-flex justify-content-between mx-3">
                        <h3>Coupons List</h3>
                        <Link to="/admin/author/create" className="btn btn-outline-primary">Create</Link>
                    </div>
                </caption>
                <thead>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Titlr</th>
                        <th scope="col">Code</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">Expire Date</th>
                        <th scope="col">Discount %</th>
                        <th scope="col">Maximum Amount</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        coupons.map((coupon, index) => (
                            <tr key={coupon._id}>
                                <th scope="row">{ index + 1 }</th>
                                <td>{ coupon.title }</td>
                                <td>{ coupon.code }</td>
                                <td>{ coupon.start_date }</td>
                                <td>{ coupon.expire_date }</td>
                                <td>{ coupon.discount_percent }</td>
                                <td>{ coupon.max_amount }</td>

                                <td><button className="btn btn-danger" onClick={handleDelete(coupon._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Index;

