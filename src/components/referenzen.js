import {LitElement, css, html} from "lit-element";
import "@material/mwc-button";
import "./reusable/slider";


class Referenzen extends LitElement {


    static get styles(){
        
        return css`

        
        section {
            box-sizing: border-box;
        }

        section > h1 {

            font-family: 'Comfortaa', sans-serif;
            color: white;
            font-size: 40px;
            margin:  0;
            padding: 40px;
            background: black;
        }

        section > div {
            width: 100%;
            height: 700px;
            
        }


        
        `;
        
    }

    render(){
        return html`
        
        <section>

        <h1>Referenzen</h1>

            <slider-component></slider-component>



            <div> 
            
                <p></p>
            
            
            
            </div>


        
        </section>

        
        
        
        `;
    }
}

customElements.define('referenzen-component', Referenzen);