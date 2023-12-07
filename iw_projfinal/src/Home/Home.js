import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import ViewPage from '../ViewPage/ViewPage';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [],
            users: [],
            checkIfPage: false,
            pageID: null
        };
    }

    componentDidMount() {
        this.getUsers();
        this.getPages();
    }

    getPages() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                'Authorization': 'Bearer segredo'
            },
        };

        fetch("https://api.sheety.co/c8f9393ba26be131ad4c95c036e9aba3/iwProjFinal/paginas", requestOptions)
            .then(res => res.json())
            .then(result => {
                this.setState({ pages: result.paginas })
            })
            .catch(error => console.log('error', error));
    }

    getUsers() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                'Authorization': 'Bearer segredo'
            },
        };

        fetch("https://api.sheety.co/c8f9393ba26be131ad4c95c036e9aba3/iwProjFinal/utilizadores", requestOptions)
            .then(res => res.json())
            .then(result => {
                this.setState({ users: result.utilizadores })
            })
            .catch(error => console.log('error', error));
    }



    render() {
        let users = this.state.users;
        let pages = this.state.pages;

        console.log(this.state.users);
        console.log(this.state.pages);

        let pagesList = [];

        for (let i = 0; i < this.state.pages.length; i++) {
            pagesList.push(
                <div className="col-3 mt-3">
                    <div className="card-body">
                        <img className="card-img-top rounded float-start" alt="imagem" src="https://picsum.photos/300/200"></img>

                        <h5 className="card-title ms-1">{pages[i].titulo} </h5>
                        <p className="card-text ms-1">Autor: {users[(pages[i].autorId) - 2].nome}</p>

                        <button className="btn btn-warning" onClick={() => this.setState({ checkIfPage: true, pageID: i })}>Ver Página</button>
                    </div>
                </div>
            )
        }

        if (this.state.checkIfPage === true) {
            return <ViewPage page={this.state.pages[this.state.pageID]} user={this.state.users[(pages[this.state.pageID].autorId) - 2]} />
        }else{
            return (
                <div className="container-fluid">
                    <div className="row justify-content-start">
                        {pagesList}
                    </div>
                </div>
            )
        }

    }
}

export default Home;
