import "./documentacao.css";
import video from "../../assets/videos/teste.mp4";

export default function Documentacao() {
  return (
    <div className="documentacao">
      <div className="container-1-documentacao">
        <div className="texto-1">
          <p>
            Lorem ipsum, dolor sit amet
            <br />
            consectetur adipisicing elit. Nulla rem eligendi, placeat doloremque
            <br />
            blanditiis ut minima provident, nihil vitae error voluptas sequi
            nesciunt
          </p>
        </div>
        <div className="video-1">
          <video width="550" height="300" controls>
            <source src={video} type="video/mp4" />
            Seu navegador não suporta o elemento <code>video</code>.
          </video>
        </div>
      </div>
    </div>
  );
}
