import './App.css'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {FaPaw} from "react-icons/fa6";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {SiBuymeacoffee} from "react-icons/si";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {BsGithub} from "react-icons/bs";

function App() {

    return (
        <>
            {/*navigation bar*/}
            <div className="nav">
              <a className="title-name">mei's Coffee</a>
              <div className="nav-links">
                <li><a><SiBuymeacoffee id="coffee"></SiBuymeacoffee></a></li>
                <li><a href="http://">About</a></li>
                <li><a><BsGithub id="github"></BsGithub>Source</a></li>
              </div>
              
          
            </div>
            {/* Effect ? */}

            {/*Header*/}
            <div className="name">
                <h2>Natanaeru Seito</h2>
                <h3>Developer & Digital Artist</h3>
            </div>
            {/* Bio */}
            <div className="bio">
                <div className="me">
                    <p className="bio-username"><span>Username:</span> Mei</p>
                    <p className="bio-whoiam"><span>Who I'm:</span> musician and student</p>
                    <p className="bio-location"><span>Location:</span> ...</p>
                    <p className="bio-os"><span>OS:</span> Windows 11 (mostly), I'ld dream of having a Macbook.</p>
                    <p className="bio-shell"><span>Shell:</span> zsh</p>
                    <p className="bio-editor"><span>Editor:</span> VSCode, nvim & I'm trying Fleet.</p>                
                    <p className="bio-fmanga"><span>Favorite manga:</span> Death note</p>
                    <p className="bio-hobbies"><span>Hobbies:</span> Playing music, playing video games, reading manga and code</p>
                    <p className="bio-equation"><span>Favorite equation:</span> Schrodinger's Equation</p>
                    <p className="bio-song"><span>Favorite song:</span> My Sweet Maiden</p>
                    <p className="bio-understand"><span>I understand:</span> English, French, Dutch and I'm learning 日本語</p>
                </div>
                <div className="whatilove">
                  <p>
                    Art, drawing, music, playing saxophone & flute, computer science & space.
                  </p>                  
                </div>
                <div className="social">
                  <p>Discord</p>
                  <p>Twitter</p>
                  <p></p>
                </div>
                


            </div>


        </>
    )
}

export default App
