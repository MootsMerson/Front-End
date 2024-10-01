import "./modalNovoPost.css";
import perfil from "../../assets/img/imagemPerfil.png";

export default function modalNovoPost() {
  return (
    <div className="containerModalNovoPost">
      <div className="modalNovoPost bg">
        <div className="tituloModalNovo">
          <h1>Nova Publicação</h1>
          <hr className="listraTitulo"></hr>
        </div>
        <div className="perfilNovoPost">
          <img src={perfil} alt="perfil"></img>
          <p>Leonardo</p>
          <div className="textoNovoPost">
            <input
              type="text"
              placeholder="Escreva o que você está pensando..."
            ></input>
          </div>
        </div>
        <div className="botaoPublicar">
          <button>Publicar</button>
        </div>
      </div>
    </div>
  );
}
