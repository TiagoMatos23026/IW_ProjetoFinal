import React, { Component } from 'react';

class Profile extends Component {
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
            },
        };

        /*try {
            const data = await fetch("https://api.sheety.co/603075854cd9316246fab517d2525742/iwProjFinal/utilizadores/" + 2, requestOptions);
            const jsonData = await data.json();
            console.log(jsonData.utilizadore);
            this.setState({ userProfile: jsonData.utilizadore });
        } catch (error) {
            console.log('error', error);
        }*/

        
        fetch("https://api.sheety.co/603075854cd9316246fab517d2525742/iwProjFinal/utilizadores/" + 2, requestOptions)
            .then(x => x.json())
            .then(json => json.utilizadore)
            .then(result => this.setState({ userProfile: result }))
            .catch(error => console.log('error', error));
    }


    render() {
        return <div>
            <button className="alert btn-warning" onClick={() => this.getProfile()}>Ver Perfil</button>
            <h1>Nome: {this.state.userProfile.nickname}</h1>
        </div>
    }
}

export default Profile;