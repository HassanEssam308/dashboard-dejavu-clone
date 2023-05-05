

let Home = () => {
    console.log("home");
    return (
        <div>
            {/* logo header */}
            <div className=" p-2 bg-dark d-flex pb-4 lg-3">
                <button className="btn btn-success text-light btnHeader "> Buy Now</button>
            </div>

            {/* semi-header */}
            <div className="row">
                <div className="col-lg-3 bg-warning  text-center">
                    <div className="text-dark h1 lg-1 "> Dejaveau
                        <button className="btn btn-light h6 lg-4 mt-3 btnSemiHeader weightFont">Admin</button>
                    </div>

                </div>
                <div className="col-md-9 ps-0 border-secondary border-bottom">
                    <nav className="navbar navbar-expand-lg  bg-light ">
                        <div className="container-fluid   ms-3">

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse " id="navbarSupportedContent">

                                <form className="d-flex searchBox col-7" role="search">
                                    <div className="input-group mb-2 mt-2 w-50">
                                        <input type="text" className="form-control " placeholder="Search " aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span className="input-group-text" id="basic-addon2">Search</span>
                                    </div>
                                </form>
                                <div className="col-1">
                                    Flag
                                </div>
                                <div className="col-1">
                                    Bell
                                </div>
                                <div className="col-3">
                                    Fetch user Data
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* container */}
            <div className="row">
                

                <div className="col-md-9">
                    <div className="p-3 row">
                        <div className="col-8 h3">Dashboard</div>
                        <div className="col-4 ">
                            <div className="d-flex">
                                <input className="form-control  me-2" />
                                <button className="btn btn-warning ">Export</button>
                            </div>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <div className="bg-light m-2 p-4 shadow-md">
                                <div className="text-start text-muted">
                                    Total sells
                                </div>
                                <div className="text-center h2">
                                    $200.00
                                </div>
                                <div className="text-success text-center">30.7%</div>
                                <div className="text-center text-muted mb-3">Compared to jan 2022</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-light m-2 p-4 shadow-md">
                                <div className="text-start text-muted">
                                    Total sells
                                </div>
                                <div className="text-center h2">
                                    $320.00
                                </div>
                                <div className="text-success text-center">35.8%</div>
                                <div className="text-center text-muted mb-3">Compared to FEB 2022</div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="bg-light m-2 p-4 shadow-md">
                                <div className="text-start text-muted">
                                    Total sells
                                </div>
                                <div className="text-center h2">
                                    $350.00
                                </div>
                                <div className="text-success text-center">37.10%</div>
                                <div className="text-center text-muted mb-3">Compared to April 2022</div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="bg-light m-2 p-4 shadow-md">
                                <div className="text-start text-muted">
                                    Total sells
                                </div>
                                <div className="text-center h2">
                                    $360.00
                                </div>
                                <div className="text-success text-center">39.7%</div>
                                <div className="text-center text-muted mb-3">Compared to MAY 2022</div>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="bg-light m-2 p-4 shadow-md">
                                <div className="text-start text-muted">
                                    Total sells
                                </div>
                                <div className="text-center h2">
                                    $350.00
                                </div>
                                <div className="text-success text-center">40.7%</div>
                                <div className="text-center text-muted mb-3">Compared to JULY  2022</div>
                            </div>
                        </div>
                        


                    </div>
                </div>

            </div>





        </div>
    )
}
export default Home;
