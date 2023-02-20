import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand ms-3" to="/">E-Bookstore Site - Admin</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/admin/user" className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')}>User</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/book" className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')}>Book</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/banner" className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')}>Banner</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/category" className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')}>Category</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/Author" className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')}>Author</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/Coupon" className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')}>Coupon</NavLink>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item me-3">
                        <Link className="btn btn-danger mx-2" to="/login">Logout</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;