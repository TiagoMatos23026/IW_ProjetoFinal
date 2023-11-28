import React, { Component } from 'react';

class Profile extends Component {
    kjn
    state = {
        userProfile: {}
    };

    async componentDidMount() {
        await this.getProfile();
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


        fetch("https://api.sheety.co/f3ef01c50366ea9a89b64403ecc55b41/iwProjFinal/utilizadores/" + sessionStorage.getItem("userID"), requestOptions)
            .then(res => res.json())
            .then(json => json.utilizadore)
            .then(result => this.setState({ userProfile: result }))
            .catch(error => {
                console.log('error', error);
                this.setState({ userProfile: null })
                window.location.href = "/Home"
            });
    }


    render() {
        return <div>

            {/*
            
            esta parte aqui fazes tu!!

            o "userProfile" é um json com o utente que está logged in e tem os seguintes atributos:

            nome, nickname, password, email, telemovel, dataNasc, biografia, listaPaginas, membro

            os dois últimos atributos podes ignorar por agora, e as outras cenas podes usar como tu quiseres.
            obviamente só precisas mostrar aquilo que for relevante a ver-se no perfil.

            Não te esqueças que a versão do bootstrap é a 4, portanto não te enganes na documentação!
            
            Have fun :) 
            
            
            */}

            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <img src="https://picsum.photos/200/200" alt="Profile" class="img-fluid" />

                        <h5 className="card-title mt-2">{this.state.userProfile.nome}</h5>
                        <h4 className="card-title mt-2">{this.state.userProfile.nickname}</h4>
                        <p className="card-text">{this.state.userProfile.biografia}</p>
                        
                        <p className="card-text">{this.state.userProfile.dataNasc}</p>
                        <p className="card-text">{this.state.userProfile.email}</p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Profile;