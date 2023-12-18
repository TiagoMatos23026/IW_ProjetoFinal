import React, { Component } from 'react';


class ViewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  async componentDidMount() {
  }

  render() {

    return (
      <div className="d-flex justify-content-center align-items-center">
        <div className="row">
          <h1 className="text-center"></h1>
          <div className="container text-center">
            <img src={this.props.page.thumbnail} alt="Thumbnail" className="img-center" />
            <p className="text-center">Escrito Por: {this.props.user.nome}</p>
          </div>

          <div className="row mt-3">
            <div className="col-md-8 offset-md-2">
              <h2 className="text-center">---Introducao---</h2>
              <p className="text-center">{this.props.page.introducao}</p>

              <h2 className="text-center">---Tutorial---</h2>
              <p className="text-center">{this.props.page.corpo}</p>

              <h2 className="text-center">---Conclusão---</h2>
              <p className="text-center">{this.props.page.conclusao}</p>

              <h3 className="text-center">Notas Adicionais</h3>
              <p className="text-center">{this.props.page.notas}</p>

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