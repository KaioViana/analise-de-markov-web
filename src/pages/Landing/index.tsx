import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiGithub, FiMenu } from 'react-icons/fi'
import Menu from '../../components/Menu/index'
import landGif from '../../images/galtontab.gif'
import './style.css'


function Landing() {
    const [slidingMenu, setSlidingMenu] = useState<boolean>(false)

    const slideMenu = () => {
        return slidingMenu ? { width: '39vw' } : { marginLeft: '-1000px' }
    }

    const menuButtonCliked = () => {
        setSlidingMenu(!slidingMenu)
    }

    return (
        <>
            <div id="page-landing">
                <header>
                    <div>
                        <button onClick={() => { menuButtonCliked() }}>
                            <FiMenu size="25px" />
                        </button>
                    </div>
                    <div className="desenvolvedor-markov">
                        <Link to="/desenvolvedor">
                            Desenvolvedor
                        </Link>
                        <Link to="/cadeia_markov">
                            Cadeia de Markov ?
                        </Link>
                    </div>
                </header>
                <div className="flyoutMenu">
                    <Menu style={slideMenu()} />
                </div>
                <main>
                    <h1>MARKOV CHAINS</h1>
                    <span>Gere textos a partir de tweets do Twitter utilizando Cadeias de Markov.</span>
                    <span>Divirta-se!</span>
                    <div>
                        <img src={landGif} width="321px" height="612px" alt="máquina de Galton" />
                    </div>
                </main>
                <footer>
                    <div>
                        <FiGithub />
                        <a href="https://github.com/KaioViana/analise-de-markov-web" target="blanck">
                            https://github.com/KaioViana/analise-de-markov-web
                        </a>
                    </div>
                </footer>
            </div>
        </>

    )
}

export default Landing