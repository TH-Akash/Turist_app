import React from "react";

const AdminLayout = ({ children }) => {
    return (
        <div>
            <div class="container-fluid ">
                <div class="row">
                    <div class="col-md-4 ">
                        <ul class="list-group">
                            <li class="list-group-item active">
                                Home
                            </li>
                            <li class="list-group-item">
                                Dashboard
                            </li>
                            <li class="list-group-item">Orders</li>
                            <li class="list-group-item">
                                Porta ac consectetur ac
                            </li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                    </div>
                    <div class="col-md-8 ">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">First</th>
                                    <th scope="col">Last</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td colspan="2">Larry the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {children}
        </div>
    );
};

export default AdminLayout;
