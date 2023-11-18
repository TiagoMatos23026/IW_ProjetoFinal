import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getTeste: [],
        }
    }

    async buscarTeste() {
        var requestOptions = {
          method: 'GET',
          redirect: 'follow',
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              'Authorization': 'Bearer ' + sessionStorage.getItem("token")
          },
      };
    
        fetch("https://api.sheety.co/603075854cd9316246fab517d2525742/idk/folha1", requestOptions)
          .then(res => res.json())
          .then(result => { this.setState({ getTeste: result }) })
          .catch(error => console.log('error', error));
      }

    render() {

        return (
            <div className="container-fluid">
                <div className="alert alert-primary
                 mb-3" role="alert">
                    Homepage
                </div>
                <div className="alert alert-primary mb-3" role="alert">
                    Coisas...
                </div>
                <div className="alert alert-primary mb-3" role="alert">
                    Mais coisas...
                </div>
                <div className="alert alert-primary mb-3" role="alert">
                    {this.state.getTeste};
                </div>
            </div>
        );
    }
}

export default Home;
