import React, { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class Layout extends Component {

    funcLogout(){ //função para logout
        sessionStorage.setItem("token", null); //eliminação do bearer token da sessão
        sessionStorage.setItem("userID", null); //eliminação do id do utilizador que estava logged in

        //sem o bearer token e a informação de qual utente está logged in, a aplicação automaticamente perde o acesso às informações 
        //deste utilizador e efetivamente faz o logout

        window.location.href = "/Home" //redirecionamento para a Homepage
    }

    verifyLogging(){ //função para verificação de login

         //caso a variável de sessão coincida com o bearer token
        if (sessionStorage.getItem("token") === 'segredo'){
            return true;
        }else{
            return false;
        }
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
                    <div className="container-fluid">

                        <Link className="navbar-brand" to="/Home">HowToMaster</Link>

                        <div className="container mr-1" >
                            
                            <form className="form-inline ml-auto">
                                <input className="form-control mr-2" type="search" placeholder="" aria-label="Search" />
                            </form>

                            {/*Esta porção de código apenas é mostrada caso o utilizador esteja logged in*/}
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


                            {/*Esta porção de código apenas é mostrada caso o utilizador esteja logged out*/}
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
