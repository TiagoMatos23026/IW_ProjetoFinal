import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email: "",
            password: "",

            listaUsers: [],

            erro: "",
            showModal: false
        };
    }

    async funcaoLogin() {
        //caso os dados não estejam todos preenchidos
        if (this.state.email === null || this.state.email === "" || this.state.password === null || this.state.password === "") {

            this.setState({erro: "Por favor preencha todos os dados."});
            this.setState({showModal: true});

        //caso os dados tenham sido introduzidos
        } else {

            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    'Authorization': 'Bearer segredo'
                },
            };

            fetch("https://api.sheety.co/603075854cd9316246fab517d2525742/iwProjFinal/utilizadores", requestOptions)
                .then(res => {
                    if (!res.ok) {
                        throw new Error();
                    }
                    return res.json();
                })
                .then(json => json.utilizadores)
                .then(result => this.setState({listaUsers: result}))
                .catch(error => {
                    console.log('error', error);
                    this.setState({erro: "Por favor, verifique as suas credenciais"});
                    this.setState({showModal: true});
                });

            let arrayUsers = this.state.listaUsers;

            for (let i = 0; i < arrayUsers.length; i++){

                if (arrayUsers[i].email === this.state.email){
                    console.log("Email encontrado")
                    if(arrayUsers[i].password === this.state.password){
                        console.log("Login feito")
                        sessionStorage.setItem("token", "segredo")
                        sessionStorage.setItem("idUser", arrayUsers[i].id)
                        window.location.href = "/Home"
                    }else{
                        this.setState({erro: "Password Errada"})
                        this.setState({showModal: true})
                    }

                }else{
                    console.log("Email não encontrado")
                }

            }   
        }
    }

    render() {
        return (
            <div>
                <div className="container ms-1">
                    <h3>Efetuar Login</h3>
                    <div>

                        <p>Introduza os seus dados</p>
                        <input onChange={(evt) => this.setState({email: evt.target.value})} type="text" class="form-control mb-3" placeholder="Email"></input>

                        <input onChange={(evt) => this.setState({password: evt.target.value})} type="password" class="form-control" placeholder="Password"></input>

                        <div>
                            <button className="btn btn-outline-info mt-3" onClick={() => this.funcaoLogin()} >Login</button>
                        </div>

                    </div>
                </div>

                <div>
                    <Modal show={this.state.showModal} onHide={() => this.setState({showModal: false})}>
                        <Modal.Header closeButton>
                            <Modal.Title>Oops! Ocorreu um erro.</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>{this.state.erro}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => this.setState({showModal: false})}>
                                Voltar
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </div>


            </div>
        );
    }
}

export default Login;
