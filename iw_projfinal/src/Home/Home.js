import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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

    shuffle(array) {
        let currentIndex = array.length, randomIndex;
    
        while (currentIndex !== 0) {
    
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
    
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
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

        fetch("https://api.sheety.co/44bd5fc740d7913a1d6efa48ad6868aa/iwProjFinal/paginas", requestOptions)

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

        fetch("https://api.sheety.co/44bd5fc740d7913a1d6efa48ad6868aa/iwProjFinal/utilizadores", requestOptions)
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
                        <img className="card-img-top rounded float-start" onClick={() => this.setState({ checkIfPage: true, pageID: i })} alt="imagem" src={pages[i].thumbnail}></img>
                        <h5 className="card-title ms-1">{pages[i].titulo} </h5>
                        <p className="card-text ms-1">@{users[(pages[i].autorId) - 2].nickname}</p>
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
                        {this.shuffle(pagesList)}
                        
                    </div>
                </div>
            )
        }

    }
}

export default Home;
