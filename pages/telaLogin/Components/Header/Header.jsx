import mootsLogo from '../../../../src/assets/img/mootsLogo.png';
import './header.css'

export default function Header() {
    return(
        <header>
            <div className="logoDiv">
                <img src={mootsLogo}></img>
            </div>
            <div className='botaoSobreDiv'>
                <button className='bg'>Sobre</button>
            </div>
        </header>
    )
}