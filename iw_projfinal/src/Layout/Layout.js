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

    async funcLogout(){
        sessionStorage.setItem("token", null);
        sessionStorage.setItem("idUser", null);
        window.location.href = "/Home"
    }

    verifyLogging = () => {
        if (sessionStorage.getItem("token") === 'segredo'){
            return true;
        }else{
            return false;
        }
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/Home">HowToMaster</Link>

                        <div className="container mr-1" >

                            <form className="form-inline ml-auto">
                                <input className="form-control mr-2" type="search" placeholder="" aria-label="Search" />
                                
                            </form>

                            {this.verifyLogging() && <ul className="navbar-nav">

                                <li className="nav-item">
                                <Link type="button" className="btn btn-success ml-3" to="/Profile">Meu Perfil</Link>
                                </li>

                                <li className="nav-item">
                                    <Link type="button" className="btn btn-danger ml-3" to="/CreatePage">Criar Página</Link>
                                </li>

                                <li className="nav-item">
                                    <button type="button" className="btn btn-warning ml-3" onClick={() => this.funcLogout()}>Sair</button>
                                </li>

                            </ul>}

                            {!this.verifyLogging() && <ul className="navbar-nav">
                                <li className="nav-item">

                                    <Link type="button" className="btn btn-info ml-3" to="/Register">Registar</Link>
                                </li>
                                <li className="nav-item">

                                    <Link type="button" className="btn btn-warning ml-3" to="/Login">Log In</Link>
                                </li>
                            </ul>}

                        </div>
                    </div>
                </nav>

                <Outlet />

            </div>
        )
    }
};

export default Layout;
