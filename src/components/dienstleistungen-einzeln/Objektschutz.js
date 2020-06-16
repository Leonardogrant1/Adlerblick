import {LitElement, css, html} from "lit-element";
import "@material/mwc-button";
import "@material/mwc-icon";

class Objektschutz extends LitElement {


    static get styles(){
        return css`
        
        section > h1 {

            font-family: 'Comfortaa', sans-serif;
            color: white;
            font-size: 40px;
            margin:  0;
            padding: 40px;
            background: black;
        }

        .logo-wrapper {
            width: 100%;
            height: 700px;
            display: flex;
            
            
            position: static;
            overflow: hidden;
            
            

        }


        #background {
            width: 100%;
            height: inherit;
            object-fit: cover;
            object-position: 50% 90%;
            opacity: 0.9;
            position: absolute;
            
        }


        #below-logo-text {
            width: 100%;
            padding: 60px 40px;
            background-color: black;
            color: white;
            opacity: 0.8;
            position: absolute;
            display: inline-flex;
            align-self: flex-end;
            
        }

        #below-logo-text > h1 {
            font-size: 2.0rem;
            font-family: 'Comfortaa', sans-serif;
            line-height: 1.5;
            width: 65%;
            margin: 0;
        }




        .description {
            display: flex;
            height: auto;
            box-sizing: border-box;

        }


        #end {
            display: inline-flex;
            flex-direction: column;
        }

        

        .description > div {
            display: inline-flex;
            width: 50%;
            height: auto;
            box-sizing: border-box;
            justify-content: center;
            
        }


        .description > div p {
            
            width: 70%;
            height: auto;

            max-height: 90%;
            margin: 180px 40px 50px 40px;
            align-self: center;
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            line-height: 2;

        }


        
        
        `;
    }

    render(){
        return html`
        
        <section>
        

        <h1>Objektschutz</h1>

        <div class="logo-wrapper">
            <img id="background" src="../../public/images/objektschutz.jpg"/>
           
            <div id="below-logo-text">
        
        <h1>Wir schützen, was Ihnen wichtig ist.</h1>
        
        </div>
            
        </div>


        <div>






        <div class="description">

        <div>
        
        <p>Die Detektei Adlerblick entstand im Jahr 2007 unter Leitung des 
        Geschäftsführers Cezar Augusto Granetto, der seit 1994 erfolgreich 
        als Kaufhausdetektiv eines der größten Kaufhäuser Deutschlands betreut.
        Zusammen mit anderen erfahrenen Detektiven und Doormen, vertreten wir nun die 
        Interessen unserer Kunden.
        </p>
        
        </div>


        <div style="background-color: yellow;">

        
        
        </div>


        </div>




        <div class="description">


        <div style="background-color: yellow;">

        
        
        </div>



        <div>
        
        <p>Darüber hinaus verfügen unsere Mitarbeiter, nach langjähriger Erfahrung, über verschiedene Ermittlungsmethoden und Observationstechniken. 
            Diese Eigenschaften sprechen für den Erfolg unserer Firma.
        </p>
        
        </div>



        </div>


        <div class="description">


        <div id="end">
        
        <p>
            Unsere Sicherheitskonzepte werden individuell mit Berücksichtigung Ihres persönlichen Umfeldes konzipiert. <br /> <br />
            Sie teilen uns Ihre Wünsche und Bedürfnisse mit, wir besprechen die Schwerpunkte gemeinsam, und wir bieten Ihnen mehrere Lösungen an. <br /> <br />
            Bei Bedarf setzen wir auch Überwachungssysteme ein, die mit menschlichen Kenntnissen kombiniert für Sie zum Erfolg führen.<br /> <br />
            Wir freuen uns darauf, mit Ihnen ins Gespräch zu kommen!
        </p>

        <mwc-button raised label="Kontaktieren Sie uns"></mwc-button>

        
        
        </div>


        <div style="background-color: yellow;">

        
        
        </div>



        </div>









        </div>
        
        
        </section>
        
        
        `;
    }
}

customElements.define('objektschutz-component', Objektschutz);