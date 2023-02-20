import { Link } from 'react-router-dom';

function Index() {
    return (
        <div>
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="/assets/images/banner1.jpg" className="d-block w-100" alt="banner1" />
                    </div>
                    <div className="carousel-item">
                        <img src="/assets/images/banner2.jpg" className="d-block w-100" alt="banner2" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <main className="container">
                <div className="row mt-3">
                    <div className="col-sm-3">
                        <div className="card">
                            <img src="/assets/images/bok2.png" className="card-img-top" alt="Product 1" />
                            <div className="card-body">
                                <h5 className="card-title">Product 1</h5>
                                <p className="card-text">Product 1 Description</p>
                                <h6 className="card-subtitle mb-2 text-muted">$99.99</h6>
                                <Link to="#" className="btn btn-primary">Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <img src="assets/images/bok2.png" className="card-img-top" alt="Product 2" />
                            <div className="card-body">
                                <h5 className="card-title">Product 2</h5>
                                <p className="card-text">Product 2 Description</p>
                                <h6 className="card-subtitle mb-2 text-muted">$79.99</h6>
                                <Link to="#" className="btn btn-primary">Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <img src="/assets/images/bok2.png" className="card-img-top" alt="Product 3" />
                            <div className="card-body">
                                <h5 className="card-title">Product 3</h5>
                                <p className="card-text">Product 3 Description</p>
                                <h6 className="card-subtitle mb-2 text-muted">$129.99</h6>
                                <Link to="#" className="btn btn-primary">Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="card">
                            <img src="/assets/images/bok2.png" className="card-img-top" alt="Product 4" />
                            <div className="card-body">
                                <h5 className="card-title">Product 4</h5>
                                <p className="card-text">Product 4 Description</p>
                                <h6 className="card-subtitle mb-2 text-muted">$59.99</h6>
                                <Link to="#" className="btn btn-primary">Add to Cart</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <nav aria-label="Page navigation example" className="mt-4">
                    <ul className="pagination justify-content-end">
                        <li className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                    </ul>
                </nav>
            </main>
        </div>
    );
}

export default Index;