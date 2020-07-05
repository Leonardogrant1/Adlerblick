import {LitElement, html, css} from "lit-element";

class NotFound extends LitElement {

    static get styles(){
        return css`
        
        section {
            width: 100%;
            height: 800px;
            display: flex;
            justify-content: center;
            background-color: rgba(255, 215, 0, 0.5)
        }

        img {
            position: absolute;
            width: calc(inherit - 20%);
            height: calc(inherit - 20%);
            align-self: center;
            z-index: 3;
            opacity: 0.1;
        } 
        
        section > div {
            align-self: center;
            width: auto;
            position: relative;
            height: auto;
            color: black;
            z-index: 4;
            
        }

        h1 {
            font-size: 5vw;
            text-align: center;
            font-family: "Comfortaa", sans-serif;
        }

        h4 {
            font-size: 2vw;
            text-align: center;
            font-family: "Comfortaa", sans-serif;
        }

        

        @media only screen and (max-width: 935px){
            h1 {
                font-size: 30px !important;
            }
    
            h4 {
                font-size: 19px !important;
            }   
            
        }
        
        `;
    }

    render(){
        return html`
        
        <section>

        <img src="../../public/images/logo.png" />

        <div>
        <h1>404</h1>
        <h4>Seite nicht gefunden</h4>
        </div>


        </section>
        
        
        `;
    }
}


customElements.define("not-found", NotFound);