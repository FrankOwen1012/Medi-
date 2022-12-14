import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AgregarProductoAdmin from '../Pages/AgregarProductoAdmin';
import NuevoUsuario from './TablaUsuarios/NuevoUsuario';
const EncapsulaDashboard = () => {
    return (

        <div className='flex'>
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a href="http://localhost:3000/tienda" className="nav-link align-middle px-0">
                                        <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                                    </a>
                                </li>
                              
                                <li>
                                    <a href="http://localhost:3000/tienda" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></a>
                                </li>
                            
                                <li>
                                    <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </a>
                               
                                </li>
                                <li>
                                    <a href="http://localhost:3000/tienda" className="nav-link px-0 align-middle">
                                        <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </a>
                                </li>
                            </ul>
                            <hr />
                            <div className="dropdown pb-4">
                                <a href="http://localhost:3000/tienda" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle" />
                                    <span className="d-none d-sm-inline mx-1">ADMINISTRADOR</span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                                    <li><a className="dropdown-item" href="http://localhost:3000/tienda">New project...</a></li>
                                    <li><a className="dropdown-item" href="http://localhost:3000/tienda">Settings</a></li>
                                    <li><a className="dropdown-item" href="http://localhost:3000/tienda">Profile</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="http://localhost:3000/tienda">Sign out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col py-3">
                       <AgregarProductoAdmin/>
                    </div>
                </div>
            </div>
            <div className='content'>
                <Switch>
                    <Router>
                        <Route path="/contact" component={AgregarProductoAdmin} />
                        <Route path="/cliente" component={NuevoUsuario} />
                    </Router>
                </Switch>
            </div>
        </div>





    )
}

export default EncapsulaDashboard;