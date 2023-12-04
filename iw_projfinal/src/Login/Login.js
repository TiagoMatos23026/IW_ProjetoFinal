import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email: "",
            password: "",

            user: null,

            erro: "",
            showModal: false
        };
    }

    funcaoLogin() {

        //caso os dados não estejam todos preenchidos
        if (this.state.email === null || this.state.email === "" || this.state.password === null || this.state.password === "") {

            this.setState({erro: "Por favor preencha todos os dados."}); //mensagem de erro
            this.setState({showModal: true}); //janela de erro

        //caso os dados tenham sido introduzidos corretamente
        } else {

            var requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    'Authorization': 'Bearer segredo'
                    //Como a aplicação está a aceder aos utentes para verificar se as credenciais estão corretas, foi introduzido o
                    //bearer token (password da api) diretamente no código
                },
            };

            //este fetch faz um fetch na api com o email que foi introduzido
            fetch("https://api.sheety.co/f3ef01c50366ea9a89b64403ecc55b41/iwProjFinal/utilizadores?filter[email]=" + this.state.email, requestOptions)
                .then(res => {
                    if (!res.ok) {
                        throw new Error();
                        //caso a api não devolva informações, é lançado um erro (provavelmente significa que o email não existe)
                    }
                    return res.json(); //conversão da resposta da api num objeto json
                })
                .then(json => json.utilizadores) //conversão do objeto json encapsulado num objeto não encapsulado
                .then(result=> result[0])
                .then(result => {
                    this.setState({user: result}) //o objeto é guardado na variavel de state "users"
                    console.log(this.state.user)
                }) 
                .catch(error => { //qualquer erro é tratado aqui
                    console.log('error', error); //o erro é impresso na consola
                    this.setState({erro: "Por favor, verifique as suas credenciais"}); //mensagem de erro
                    this.setState({showModal: true}); //janela de erro
                    
                });

            let user = this.state.user;

            if (user.password === this.state.password ){
                console.log("Login feito") //o login é efetuado
                sessionStorage.setItem("token", "segredo") //o bearer token é guardado em sessão
                sessionStorage.setItem("userID", this.state.user.id) //o id do utilizador logged in é guardado em sessão
                window.location.href = "/Home" //o utilizador é enviado para a Homepage
            }else{
                this.setState({erro: "Password Errada"}) //mensagem de erro
                this.setState({showModal: true}) //janela de erro
            }

            /*
            let arrayUsers = this.state.listaUsers; //uso de uma variável para guardar o valor da variável de state

            //ciclo que percorre todos os utilizadores à procura do utilizador que coincida com as credenciais introduzidas
            for (let i = 0; i < arrayUsers.length; i++){ 
                 
                //caso o email seja encontrado na base de dados
                if (arrayUsers[i].email === this.state.email){ 
                    console.log("Email encontrado") //confirmação de que o email existe na base de dados

                    //caso o email e a password coincidam
                    if(arrayUsers[i].password === this.state.password){
                        console.log("Login feito") //o login é efetuado
                        sessionStorage.setItem("token", "segredo") //o bearer token é guardado em sessão
                        sessionStorage.setItem("userID", arrayUsers[i].id) //o id do utilizador logged in é guardado em sessão
                        window.location.href = "/Home" //o utilizador é enviado para a Homepage

                    //caso apenas o email coincida
                    }else{
                        this.setState({erro: "Password Errada"}) //mensagem de erro
                        this.setState({showModal: true}) //janela de erro
                    }
                //caso o email não seja encontrado na base de dados
                }else{
                    console.log("Email não encontrado") //rejeição da credencial
                    this.setState({erro: "Por favor, verifique as suas credenciais"}) //mensagem de erro
                    this.setState({showModal: true}) //janela de erro
                }

            }   
            */
        }
    }

    render() {
        return (
            <div>

                {/*Aspeto da página para a introdução de dados*/}
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

                {/*Aspeto da janela de erro*/}
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
