import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand ms-3" to="/">E-Bookstore Site</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                            <NavLink to="/" className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/product" className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')}>Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/login" className={({isActive}) => (isActive ? "nav-link active" : 'nav-link')}>Login</NavLink>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item me-3">
                        <Link className="btn btn-primary mx-2" to="/login">Login</Link>
                        <Link className="btn btn-success mx-2" to="/register">Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;