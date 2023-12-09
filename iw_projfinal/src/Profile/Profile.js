import React, { Component } from 'react';

class Profile extends Component {
    kjn
    state = {
        userProfile: {},
        userPagesList: []
    };

    async componentDidMount() {
        await this.getProfile();
        await this.getPaginas();
    }

    getProfile() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
                //a variável "token" está guardada em sessionStorage e contém o bearer token que é essencialmente uma password
                //para aceder às informações da api

                //ao fazer Login essa password fica guardada e sempre que a aplicação aceder a informações da api, vai precisar dela
            },
        };

        /*try {
            const data = await fetch("https://api.sheety.co/603075854cd9316246fab517d2525742/iwProjFinal/utilizadores/" + 2, requestOptions);
            const jsonData = await data.json();
            console.log(jsonData.utilizadore);
            this.setState({ userProfile: jsonData.utilizadore });
        } catch (error) {
            this.setState({userProfile: null});
            window.location.href = "/Home";      
        }*/


        fetch("https://api.sheety.co/c8f9393ba26be131ad4c95c036e9aba3/iwProjFinal/utilizadores/" + sessionStorage.getItem("userID"), requestOptions)
            .then(res => res.json())
            .then(json => json.utilizadore)
            .then(result => this.setState({ userProfile: result }))
            .catch(error => {
                console.log('error', error);
                this.setState({ userProfile: null })
            });
    }

    getPaginas() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            },
        };

        fetch("https://api.sheety.co/c8f9393ba26be131ad4c95c036e9aba3/iwProjFinal/paginas?filter[autorId]=" + sessionStorage.getItem("userID"), requestOptions)
            .then(res => res.json())
            .then(json => json.paginas)
            .then(result => this.setState({ userPagesList: result }))
            .catch(error => {
                console.log('error', error);
                this.setState({ userPagesList: null })
            });

    }


    render() {
        let pagesList = [];

        for (let i = 0; i < this.state.userPagesList.length; i++) {
            pagesList.push(
                <div className="col-3 mt-3">
                    <div className="card-body">
                        <img className="card-img-top rounded float-start"  alt="imagem" src="https://picsum.photos/300/200"></img>
                        <div className="container-fluid"></div>
                        <h5 className="card-title ms-1">{this.state.userPagesList[i].titulo} </h5>
                    </div>
                </div>
            )
        }

        return <div class="p-3">

            {/*
            
            esta parte aqui fazes tu!!

            o "userProfile" é um json com o utente que está logged in e tem os seguintes atributos:

            nome, nickname, password, email, telemovel, dataNasc, biografia, listaPaginas, membro

            os dois últimos atributos podes ignorar por agora, e as outras cenas podes usar como tu quiseres.
            obviamente só precisas mostrar aquilo que for relevante a ver-se no perfil.

            Não te esqueças que a versão do bootstrap é a 4, portanto não te enganes na documentação!
            
            Have fun :) 
            
            
            */}

            <div className="row">
                <div className="col-md-2 text-center">
                    <div className="card p-3">
                        <img  src="https://picsum.photos/150/150" alt="Profile" className="rounded-circle mb-3 " />
                        <h3 className="mb-2">{this.state.userProfile.nome}</h3>
                        <h5 className="text-muted mb-4">{"@" + this.state.userProfile.nickname}</h5>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="mb-3">Sobre mim:</h2>
                            <h5 className="text-muted mb-3">{this.state.userProfile.biografia}</h5>
                            <p className="card-text">Data de Nascimento: {this.state.userProfile.dataNasc}</p>
                            <p className="card-text">E-mail: {this.state.userProfile.email}</p>
                        </div>      
                    </div>
                    <div className="card mt-3">
                        <div className="card-body">
                            <h2 className="mb-3">Páginas:</h2>
                            <p className="card-text">{pagesList}</p>
                            
                        </div>      
                    </div>

                </div>
                
            </div>





        </div>
    }
}

export default Profile;