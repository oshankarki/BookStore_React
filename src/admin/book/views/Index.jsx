import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBooks, deleteBook } from 'api/request.api';
const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function Index() {
    const [books, setBooks] = useState([]);

    const fetchData = async () => {
        try {
            const res = await getBooks();
            console.log(res);
            console.log(res.data);
            setBooks(res.data);
        } catch (err) {
            console.log(err);
        }
    }

    const handleDelete = (id) => async () => {
        try {
            await deleteBook(id);
            setBooks(books.filter(book => book._id !== id));
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getBooks().then(response => setBooks(response.data));
      }, []);
    // useEffect(() => { fetchData() }, []);

    return (
        <div>
            <table className="table caption-top">
                <caption>
                    <div className="d-flex justify-content-between mx-3">
                        <h3>Book List</h3>
                        <Link to="/admin/book/create" className="btn btn-outline-primary">Create</Link>
                    </div>
                </caption>
                <thead>
                    <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map((book, index) => (
                            <tr key={book._id}>
                                <th scope="row">{ index + 1 }</th>
                                <td>{ book.title }</td>
                                <td>{ book.author }</td>
                                <td><img src={`${baseUrl}${book.image}`} alt={book.title} width="50" height="50" /> </td>
                                <td>{ book.price }</td>
                                <td>{ book.discount }</td>

                                <td><button className="btn btn-danger" onClick={handleDelete(book._id)}>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Index;

