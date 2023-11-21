import React, { Component } from 'react';


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autorPagina: null,
        };
    }



    render() {
        let listaLis = [];

        console.log(this.props.lista);

        this.props.lista.forEach(element =>
            listaLis.push(
                <div class="col-6">
                    <div class="card-body">
                        <img class="card-img-top rounded float-start" alt="imagem" src="https://picsum.photos/300/200"></img>

                        <h5 class="card-title">{element.titulo} </h5>
                        <button class="btn btn-warning" onClick={() => this.props.dados(element.id)}>Ver Página</button>
                    </div>
                </div>
            )
            );

        return (
            <div className="container">
                <div className="row">

                    {/*Container para as informações da pessoa*/}
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <img src="https://picsum.photos/200/200" alt="Profile" class="img-fluid" />
                                <h5 className="card-title mt-2">{this.props.utente.nickname}</h5>
                                <p className="card-text">{this.props.utente.biografia}</p>
                            </div>
                        </div>
                    </div>

                    {/*Container para a lista de páginas escritas pela pessoa*/}
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Páginas Escritas por {this.props.utente.nickname}</h5>
                                <div>
                                  {listaLis}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default ListaPerfil;