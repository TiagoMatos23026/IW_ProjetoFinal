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

      dificuldade: null,
      categoria: null,

      autorId: sessionStorage.getItem("userID"),
      exclusividade: false,

      visualizacoes: 0,
      likes: 0,
      comentarios: "oi",

      showModal: false
    };
  }

  criarPagina() {
    let obj = {
      pagina: {
        titulo: this.state.titulo,
        introducao: this.state.introducao,
        corpo: this.state.corpo,
        conclusao: this.state.conclusao,
        notas: this.state.notas,
        dificuldade: this.state.dificuldade,

        categoria: this.state.categoria,
        autorId: this.state.autorId,

        exclusividade: this.state.exclusividade,
        visualizacoes: this.state.visualizacoes,
        likes: this.state.likes,
        comentarios: this.state.comentarios
      }
    };

    var requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        'Authorization': 'Bearer ' + sessionStorage.getItem("token")
      },
      body: JSON.stringify(obj)
    };

    fetch("https://api.sheety.co/c8f9393ba26be131ad4c95c036e9aba3/iwProjFinal/paginas", requestOptions)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        window.location.href = "/Home"
      })
      .catch(error => console.log('error', error));
  }

  handleTituloChange(evt) {
    this.setState({ titulo: evt.target.value });
  }

  handleIntroducaoChange(evt) {
    this.setState({ introducao: evt.target.value });
  }

  handleCorpoChange(evt) {
    this.setState({ corpo: evt.target.value });
  }

  handleConclusaoChange(evt) {
    this.setState({ conclusao: evt.target.value });
  }

  handleNotasChange(evt) {
    this.setState({ notas: evt.target.value });
  }

  handleDificuldadeChange(evt) {
    this.setState({ dificuldade: evt.target.value });
  }

  handleCategoriaChange(evt) {
    this.setState({ categoria: evt.target.value })
  }

  handleClose() {
    this.setState({ showModal: false });
  }

  handleSubmit() {
    let titulo = this.state.titulo;
    let introducao = this.state.introducao;
    let corpo = this.state.corpo;
    let conclusao = this.state.conclusao;
    let dificuldade = this.state.dificuldade;
    let categoria = this.state.categoria;

    if (titulo === '' || dificuldade === '' || categoria === '' ||
      introducao === '' || corpo === '' || conclusao === '') {

      this.setState({ showModal: true })

    } else if (titulo === null || dificuldade === null || categoria === null ||
      introducao === null || corpo === null || conclusao === null) {

      this.setState({ showModal: true })

    } else {

      this.criarPagina();
      //window.location.href = "/Home"

    }
  }

  render() {
    return (

      <div className="container ms-1">
        <div class="container-fluid mx-auto">
          <h2 for="nome" class="form-label">Criar Página</h2>

        </div>

        <div className="container-fluid ms-3 mb-3">
          <label for="titulo" className="form-label">Título</label>
          <input type="email" className="form-control me-auto" id="titulo" placeholder="'Como Resolver o Cubo Mágico...'"
            value={this.state.titulo} onChange={(evt) => { this.handleTituloChange(evt) }}></input>
        </div>

        <div className="container-fluid ms-3 mb-3">
          <label for="introducao" className="form-label">Introdução</label>
          <textarea className="form-control" id="introducao" rows="3" placeholder="Uma introdução curta e objetiva..."
            value={this.state.introducao} onChange={(evt) => { this.handleIntroducaoChange(evt) }}></textarea>
        </div>

        <div className="container-fluid ms-3 mb-3">
          <label for="corpo" className="form-label">Corpo</label>
          <textarea className="form-control" id="corpo" rows="3" placeholder="Corpo da página aqui..."
            value={this.state.corpo} onChange={(evt) => { this.handleCorpoChange(evt) }}></textarea>
        </div>

        <div className="container-fluid ms-3 mb-3">
          <label for="conclusao" className="form-label">Conclusão</label>
          <textarea className="form-control" id="conclusao" rows="3" placeholder="Texto que resuma os pontos principais..."
            value={this.state.conclusao} onChange={(evt) => { this.handleConclusaoChange(evt) }}></textarea>
        </div>

        <div className="container-fluid ms-3 mb-3">
          <label for="notas" className="form-label">Notas Adicionais</label>
          <textarea className="form-control" id="notas" rows="3" placeholder=""
            value={this.state.notas} onChange={(evt) => { this.handleNotasChange(evt) }}></textarea>
        </div>

        <div className="container-fluid ms-3 mb-3">
          <label className="form-label" for="dificuldade">Dificuldade</label>
          <select class="form-control" id="dificuldade"
            value={this.state.dificuldade} onChange={(evt) => { this.handleDificuldadeChange(evt) }}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>

        <div className="container-fluid ms-3 mb-3">
          <label className="form-label" for="categoria">Categoria</label>
          <select class="form-control" id="dificuldade"
            value={this.state.categoria} onChange={(evt) => { this.handleCategoriaChange(evt) }}>
            <option>Culinária</option>
            <option>Desporto</option>
            <option>Ilusionismo</option>
            <option>Truques de festa</option>
            <option>Dança</option>
            <option>Tradicional</option>
            <option>Tecnologia</option>
            <option>Conhecimento</option>
            <option>Matemática</option>
            <option>Línguas</option>
            <option>Programação</option>
            <option>Natureza</option>
            <option>Música</option>
            <option>Puzzles</option>
          </select>
        </div>

        <div className="container-fluid ms-3 mb-3 mt-4" >
          <button className="btn btn-outline-info mb-3 mr-3 " type="submit" onClick={() => this.handleSubmit()}>Submeter</button>
          <button className="btn btn-outline-warning mb-3 " type="submit" onClick={() => this.verObj()}>Ver objeto</button>
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