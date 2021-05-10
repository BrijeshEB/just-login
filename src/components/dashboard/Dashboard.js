import React from "react";
// import "./Login.css";

const Dashboard = () => {
    return (
        <div className="main-content">
            <h4 className="title text-center mt-5 mb-5">Dashboard Page</h4>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="table-responsive">
                            <table className="table table-bordered bg-white">
                                <thead>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Weight(KG)</th>
                                        <th>Detail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td>Product 1</td>
                                        <td>$1,200</td>
                                        <td>2,200</td>
                                        <td>Lorem ipsum dolor sit amet</td>
                                    </tr>
                                    <tr>
                                        <td>Product 2</td>
                                        <td>$5,600</td>
                                        <td>4,200</td>
                                        <td>Lorem ipsum dolor sit amet</td>
                                    </tr>
                                    <tr>
                                        <td>Product 3</td>
                                        <td>$400</td>
                                        <td>200</td>
                                        <td>Lorem ipsum dolor sit amet</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-12 col-md-10 mt-3">
                        <p>lorem ipsum dolor set amet. lorem ipsum dolor set set amet. lorem ipsum dolor set set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. lorem ipsum dolor set amet. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;