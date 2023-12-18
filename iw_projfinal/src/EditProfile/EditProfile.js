import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentUser: null,

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

    componentDidMount() {
        this.getCurrentUser()
    }

    async getCurrentUser() {
        var requestOptionsUser = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            },
        };

        await fetch("https://api.sheety.co/b87cef28352483d04b59d63bc988d481/iwProjFinal/utilizadores/" + sessionStorage.getItem("userID"), requestOptionsUser)
            .then(res => res.json())
            .then(result => result.utilizadore)
            .then(result => {
                this.setState({ currentUser: result })
                console.log(result)
            })
            .catch(error => console.log('error', error));


    }

    async setCurrentUser() {
        this.setState({
            nome: this.state.currentUser.nome,
            nickname: this.state.currentUser.nickname,
            password: this.state.currentUser.password,

            confPassword: this.state.currentUser.password,

            email: this.state.currentUser.email,
            telemovel: this.state.currentUser.telemovel,

            dataNasc: this.state.currentUser.dataNasc,
            biografia: this.state.currentUser.biografia,
            icon: this.state.currentUser.icon,
            membroYorN: this.state.currentUser.membroYorN,
            listaPaginas: this.state.currentUser.listaPaginas
        })
    }

    /*
    async 

        //fetch para criar User
        fetch("https://api.sheety.co/529a06531dfa4e9f8e77256cd5e1f636/iwProjFinal/utilizadores", requestOptionsUser)
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

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
        let password = this.state.password;
        let confPassword = this.state.confPassword;


        if (password !== confPassword) {
            this.setState({ erro: "As passwords não são iguais.", showModal: true })

        } else {

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
                method: 'PUT',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    'Authorization': 'Bearer segredo'
                },
                body: JSON.stringify(objUser)
            };

            fetch("https://api.sheety.co/b87cef28352483d04b59d63bc988d481/iwProjFinal/utilizadores/" + sessionStorage.getItem("userID"), requestOptionsUser)
                .then(res => res.json())
                .then(result => window.location.href = "/Home")
                .catch(error => console.log('error', error));
        }

    }


    render() {
        return (
            <div class="container ms-1">
                <div class="container-fluid mb-3 ms-3">
                    <h1 for="nome" class="form-label">Edite os seus dados</h1>
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
                        value={this.state.password} onChange={(evt) => { this.handleConfPasswordChange(evt) }}></input>
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

                <div class="container-fluid ms-3">
                    <button class="btn btn-warning mb-3 " type="submit" onClick={() => this.setCurrentUser()}>Revelar Dados Atuais</button>
                </div>

                <div class="container-fluid mb-3 ms-3">
                    <button class="btn btn-success mb-3 " type="submit" onClick={() => this.handleSubmit()}>Submeter Dados Novos</button>
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

export default EditProfile;