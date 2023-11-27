import React, { Component } from 'react';

class Profile extends Component {kjn
    state = {
        userProfile: {}
    };

    async componentDidMount() {
        await this.getProfile();
    }

    async getProfile(id) {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
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

        
        fetch("https://api.sheety.co/603075854cd9316246fab517d2525742/iwProjFinal/utilizadores/" + sessionStorage.getItem("idUser"), requestOptions)
            .then(res => res.json())
            .then(json => json.utilizadore)
            .then(result => this.setState({ userProfile: result }))
            .catch(error => {
                console.log('error', error);
                this.setState({userProfile : null})
                window.location.href = "/Home"
            });
    }


    render() {
        return <div>
            <button className="alert btn-warning" onClick={() => this.getProfile()}>Ver Perfil</button>
            <h1>Nome: {this.state.userProfile.nome}</h1>
        </div>
    }
}

export default Profile;