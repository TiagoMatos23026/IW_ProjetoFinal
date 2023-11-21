import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends Component {
    state = {
        showModal : false
    }

    handleError = () => {
        this.setState({ showModal: true });
    }

    handleClose = () => {
        this.setState({ showModal: false });
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/Home">HowToMaster</Link>

                        <div className="container mr-1" >

                            <form className="form-inline ml-auto">
                                <input className="form-control mr-3" type="search" placeholder="" aria-label="Search" />
                                <Link className="btn btn-success" type="submit" to="/Profile">Perfil</Link>
                            </form>

                            <ul className="navbar-nav">
                                <li className="nav-item">

                                    <Link type="button" className="btn btn-info ml-3" to="/Register">Registar</Link>
                                </li>
                                <li className="nav-item">

                                    <Link type="button" className="btn btn-warning ml-3" to="/WIP">Log In</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

                <Outlet />

            </div>
        )
    }
};

export default Layout;
