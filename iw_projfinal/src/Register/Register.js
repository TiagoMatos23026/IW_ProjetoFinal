import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: null,
            nickname: null,
            password: null,

            confPassword: null,

            email: null,
            telemovel: null,

            dataNasc: null,
            biografia: null,
            icon: null,
            membroYorN: true,
            listaPaginas: null,

            showModal: false,
            erro: ""
        };
    }

    async registerUser() {
        let objUser = {
            utilizadore: {
                nome: this.state.nome,
                nickname: this.state.nickname,
                password: this.state.password,
                email: this.state.email,
                telemovel: this.state.telemovel,

                dataNasc: this.state.dataNasc,
                biografia: this.state.biografia,
                membro: this.state.membroYorN,
                listaPaginas: this.state.listaPaginas,
            }
        };

        var requestOptionsUser = {
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                'Authorization': 'Bearer segredo'
            },
            body: JSON.stringify(objUser)
        };

        //fetch para criar User
        fetch("https://api.sheety.co/f3ef01c50366ea9a89b64403ecc55b41/iwProjFinal/utilizadores", requestOptionsUser)
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

        /*
        fetch("https://localhost:7032/api/auth/Register", requestOptionsLoginUtente)
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
            .catch(error => console.log('error', error));
        */
    }

    /*
    funcaoLogin = () => {
        //caso os dados não estejam todos preenchidos


        let obj = {
            'Username': this.state.emailUtente,
            'Password': this.state.passwordUtente
        }

        var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(obj)
        };

        fetch("https://localhost:7032/api/auth/Login", requestOptions)
            .then(res => {
                if (!res.ok) {
                    throw new Error();
                }
                return res.json();
            })
            .then(result => {
                sessionStorage.setItem("token", result);
                console.log(result);
                window.location.href = "/Home"
            })
            .catch(error => {
                console.log('error', error);
                this.setState({ erro: "Por favor, verifique as suas credenciais" });
                this.setState({ showModal: true });
            });



    }
    */

    handleNomeChange(evt) {
        this.setState({ nome: evt.target.value });
    }

    handleNicknameChange(evt) {
        this.setState({ nickname: evt.target.value });
    }

    handlePasswordChange(evt) {
        this.setState({ password: evt.target.value });
    }

    handleConfPasswordChange(evt) {
        this.setState({ confPassword: evt.target.value });
    }

    handleDataNascimentoChange(evt) {
        this.setState({ dataNasc: evt.target.value });
    }

    handleEmailChange(evt) {
        this.setState({ email: evt.target.value });
    }

    handleTelemovelChange(evt) {
        this.setState({ telemovel: evt.target.value });
    }

    handleBiografiaChange(evt) {
        this.setState({ biografia: evt.target.value });
    }

    handleClose() {
        this.setState({ showModal: false });
    }

    handleSubmit() {
        let nome = this.state.nome;
        let password = this.state.password;

        let confPassword = this.state.confPassword;

        let nickname = this.state.nickname;
        let dataNasc = this.state.dataNasc;
        let email = this.state.email;
        let telemovel = this.state.telemovel;
        let biografia = this.state.biografia;

        if (nome === '' || password === '' || nickname === '' || dataNasc === '' ||
            email === '' || telemovel === '' || biografia === '') {
            this.setState({ erro: "Por favor preencha todos os campos.", showModal: true })

        } else if (nome === null || password === null || nickname === null || dataNasc === null ||
            email === null || telemovel === null || biografia === null) {
            this.setState({ erro: "Por favor preencha todos os campos.", showModal: true })

        } else {
            if (password !== confPassword) {
                this.setState({ erro: "As passwords não são iguais.", showModal: true })

            } else {
                this.registerUser();
                window.location.href = "/Home"

            }
        }
    }

    render() {
        return (
            <div class="container ms-1">
                <div class="container-fluid mb-3 ms-3">
                    <h1 for="nome" class="form-label">Introduza os seus dados</h1>

                </div>
                <div class="container-fluid mb-3 ms-3">
                    <label for="nome" class="form-label">Nome e Apelido</label>
                    <input type="email" class="form-control me-auto" id="nome" placeholder="'Ex: João Ferreira'"
                        value={this.state.nome} onChange={(evt) => { this.handleNomeChange(evt) }}></input>
                </div>
                <div class="container-fluid mb-3 ms-3">
                    <label class="form-label" for="nickname">Nickname</label>
                    <input type="nickname" id="dificuldade" class="form-control" placeholder="'Ex: jonnyMiguel1"
                        value={this.state.nickname} onChange={(evt) => { this.handleNicknameChange(evt) }}></input>
                </div>
                <div class="container-fluid mb-3 ms-3">
                    <label for="pass" class="form-label">Password</label>
                    <input type="password" class="form-control me-auto" id="pass" rows="3" placeholder=""
                        value={this.state.password} onChange={(evt) => { this.handlePasswordChange(evt) }}></input>
                </div>
                <div class="container-fluid mb-3 ms-3">
                    <label for="confpass" class="form-label">Confirme Password</label>
                    <input type="password" class="form-control me-auto" id="confpass" rows="3" placeholder=""
                        value={this.state.confPassword} onChange={(evt) => { this.handleConfPasswordChange(evt) }}></input>
                </div>
                <div class="container-fluid mb-3 ms-3">
                    <label for="datanasc" class="form-label">Data de Nascimento</label>
                    <input type="email" class="form-control me-auto" id="datanasc" rows="3" placeholder="'dd/mm/aa'"
                        value={this.state.dataNasc} onChange={(evt) => { this.handleDataNascimentoChange(evt) }}></input>
                </div>
                <div class="container-fluid mb-3 ms-3">
                    <label for="conclusao" class="form-label">Email</label>
                    <input type="email" class="form-control me-auto" id="conclusao" rows="3" placeholder="'Ex: joaomglopes@gmail.com'"
                        value={this.state.email} onChange={(evt) => { this.handleEmailChange(evt) }}></input>
                </div>
                <div class="container-fluid mb-3 ms-3">
                    <label for="notas" class="form-label">Telemóvel</label>
                    <input type="email" class="form-control me-auto" id="notas" rows="3" placeholder="XXXXXXXXX"
                        value={this.state.telemovel} onChange={(evt) => { this.handleTelemovelChange(evt) }}></input>
                </div>
                <div class="container-fluid mb-3 ms-3">
                    <label for="notas" class="form-label">Biografia</label>
                    <textarea class="form-control" id="notas" rows="3" placeholder=""
                        value={this.state.biografia} onChange={(evt) => { this.handleBiografiaChange(evt) }}></textarea>
                </div>
                <div class="container-fluid mb-3 ms-3">
                    <button class="btn btn-info mb-3 " type="submit" onClick={() => this.handleSubmit()}>Submeter</button>

                </div>
                <div>
                    <Modal show={this.state.showModal} onHide={() => this.handleClose()}>

                        <Modal.Header closeButton>
                            <Modal.Title>Oops! Ocorreu um erro.</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>{this.state.erro}</Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={() => this.handleClose()}>
                                Voltar
                            </Button>

                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Register;