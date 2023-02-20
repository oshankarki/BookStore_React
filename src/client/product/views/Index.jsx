import { Link } from 'react-router-dom';

function Index() {
    return (
        <div>
            <main className="container">
                <div className="input-group my-3">
                    <input type="text" className="form-control" placeholder="Book Name..." aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-primary" type="button" id="button-addon2">Search</button>
                </div>

                <div className="row mt-3">
                    <div className="col-sm-12">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/assets/images/bok2.png" className="img-fluid rounded-start" alt="book2" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/assets/images/bok2.png" className="img-fluid rounded-start" alt="book2" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/assets/images/bok2.png" className="img-fluid rounded-start" alt="book2" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12">
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="/assets/images/bok2.png" className="img-fluid rounded-start" alt="book2" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural
                                            lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <nav aria-label="Page navigation example" className="mt-4">
                    <ul className="pagination justify-content-end">
                        <li className="page-item"><Link className="page-link" to="">Previous</Link></li>
                        <li className="page-item"><Link className="page-link" to="">1</Link></li>
                        <li className="page-item"><Link className="page-link" to="">Next</Link></li>
                    </ul>
                </nav>
            </main>
        </div>
    );
}

export default Index;