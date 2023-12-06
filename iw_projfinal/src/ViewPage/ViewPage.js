import React, { Component } from 'react';

class ViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      utente: []
    }
  }

  async componentDidMount() {
    this.getPage(this.props.dados.utenteFK);
  }

  async buscarUtente(id) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': 'Bearer ' + sessionStorage.getItem("token")
      },
    };

    fetch("https://localhost:7032/api/UtentesApi/" + id, requestOptions)
      .then(res => {
        return res.json()
      })
      .then(result => {
        this.setState({ utente: result });
        console.log(result);
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <h1 className="text-center">{this.props.dados.titulo}</h1>
          <div className="container text-center">
            <img src="https://picsum.photos/300/200" alt="Thumbnail" className="img-center" />
            <p className="text-center">Escrito Por: {this.state.utente.nickname}</p>
          </div>

          <div className="row mt-3">
            <div className="col-md-8 offset-md-2">
              <h2 className="text-center">---Introducao---</h2>
              <p className="text-center">{this.props.dados.introducao}</p>

              <h2 className="text-center">---Tutorial---</h2>
              <p className="text-center">{this.props.dados.corpo}</p>

              <h2 className="text-center">---Conclusão---</h2>
              <p className="text-center">{this.props.dados.conclusao}</p>

              <h3 className="text-center">Notas Adicionais</h3>
              <p className="text-center">{this.props.dados.notas}</p>

              <div class="text-center mb-3">
                <button class="btn btn-warning" onClick={() => window.location.reload()}>Voltar</button>
              </div>

            </div>
          </div>

        </div>
      </div >

    );
  }
}

export default ViewPage;