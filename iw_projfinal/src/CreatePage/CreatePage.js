import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class CreatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titulo: null, 

      introducao: null,
      corpo: null,
      conclusao: null,
      notas: null,

      dificuldadePagina: null,
      visualizacoesPagina: 100,
      listaCategoriaPagina: [],
      utenteFKPagina: 0,

      showModal: false
    };
  }

  async criarPagina() {
    let obj = { 
      titulo: this.state.tituloPagina,
      exclusividade: this.state.exclusividadePagina, 
      introducao: this.state.introducaoPagina,
      corpo: this.state.corpoPagina,
      conclusao: this.state.conclusaoPagina,
      notas: this.state.notasPagina,
      dificuldade: this.state.dificuldadePagina,
      visualizacoes: this.state.visualizacoesPagina,
      listaMedia: this.state.listaMediaPagina,
      listaCategoria: this.state.listaCategoriaPagina,
      utenteFK: this.state.utenteFKPagina
    };

    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': 'Bearer '+sessionStorage.getItem("token")
      }, 
      body: JSON.stringify(obj)
    };

    fetch("https://localhost:7032/api/PaginasApi", requestOptions)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        window.location.href = "/VerPerfil"
      })
      .catch(error => console.log('error', error));
  }

  handleTituloChange(evt) {
    this.setState({ tituloPagina: evt.target.value });
  }

  handleDificuldadeChange(evt) {
    this.setState({ dificuldadePagina: evt.target.value });
  }

  handleIntroducaoChange(evt) {
    this.setState({ introducaoPagina: evt.target.value });
  }

  handleCorpoChange(evt) {
    this.setState({ corpoPagina: evt.target.value });
  }

  handleConclusaoChange(evt) {
    this.setState({ conclusaoPagina: evt.target.value });
  }

  handleNotasChange(evt) {
    this.setState({ notasPagina: evt.target.value });
  }

  handleClose() {
    this.setState({showModal: false});
  }

  handleSubmit(evt) {
    let tituloPaginaTexto = this.state.tituloPagina;
    let dificuldadePaginaTexto = this.state.dificuldadePagina;
    let introducaoPaginaTexto = this.state.introducaoPagina;
    let corpoPaginaTexto = this.state.corpoPagina;
    let conclusaoPaginaTexto = this.state.conclusaoPagina;

    if (tituloPaginaTexto === '' || dificuldadePaginaTexto === '' ||
    introducaoPaginaTexto === '' || corpoPaginaTexto === '' || conclusaoPaginaTexto === ''){

      this.setState({ showModal: true })

    } else if (tituloPaginaTexto === null || dificuldadePaginaTexto === null || 
      introducaoPaginaTexto === null || corpoPaginaTexto === null || conclusaoPaginaTexto === null){

      this.setState({ showModal: true })

    }else{

      this.criarPagina();

    }
  }

  render() {
    return (
      <div class="row me-3">
        <div class="mb-3 ms-3">
          <label for="titulo" class="form-label">Título</label>
          <input type="email" class="form-control me-auto" id="titulo" placeholder="'Como Resolver o Cubo Mágico...'"
            value={this.state.tituloPagina} onChange={(evt) => { this.handleTituloChange(evt) }}></input>
        </div>

        <div class="mb-3 ms-3">
          <label class="form-label" for="dificuldade">Dificuldade</label>
          <input min="1" max="5" type="number" id="dificuldade" class="form-control"
            value={this.state.dificuldadePagina} onChange={(evt) => { this.handleDificuldadeChange(evt) }}></input>
        </div>

        <div class="mb-3 ms-3">
          <label for="introducao" class="form-label">Introdução</label>
          <textarea class="form-control" id="introducao" rows="3" placeholder="Uma introdução curta e objetiva..."
            value={this.state.introducaoPagina} onChange={(evt) => { this.handleIntroducaoChange(evt) }}></textarea>
        </div>

        <div class="mb-3 ms-3">
          <label for="corpo" class="form-label">Corpo</label>
          <textarea class="form-control" id="corpo" rows="3" placeholder="Corpo da página aqui..."
            value={this.state.corpoPagina} onChange={(evt) => { this.handleCorpoChange(evt) }}></textarea>
        </div>

        <div class="mb-3 ms-3">
          <label for="conclusao" class="form-label">Conclusão</label>
          <textarea class="form-control" id="conclusao" rows="3" placeholder="Texto que resuma os pontos principais..."
            value={this.state.conclusaoPagina} onChange={(evt) => { this.handleConclusaoChange(evt) }}></textarea>
        </div>

        <div class="mb-3 ms-3">
          <label for="notas" class="form-label">Notas Adicionais</label>
          <textarea class="form-control" id="notas" rows="3" placeholder=""
            value={this.state.notasPagina} onChange={(evt) => { this.handleNotasChange(evt) }}></textarea>
        </div>

        <div class="mb-3 ms-3">
          <button class="btn btn-outline-danger mb-3 " type="submit" onClick={() => this.handleSubmit()}>Submit</button>

        </div>

        <div>
          <Modal show={this.state.showModal} onHide={() => this.handleClose()}>
            <Modal.Header closeButton>
              <Modal.Title>Oops! Ocorreu um erro.</Modal.Title>
            </Modal.Header>
            <Modal.Body>Por favor preencha todos os campos.</Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={() => this.handleClose()}>
                Voltar
              </Button>

            </Modal.Footer>
          </Modal>
        </div>

      </div>
    );
  }
}

export default CreatePage;