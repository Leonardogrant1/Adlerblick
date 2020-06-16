import {LitElement, css, html} from "lit-element";
import "@material/mwc-button";




class Firmenprofil extends LitElement {

    

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
                height: 600px;
                display: flex;
                justify-content: center;
                position: static;
                border-sizing: border-box;
                

            }

            @keyframes fadeIn {
                0% {opacity:0;}
                100% {opacity:1;}
                }

                .logo-wrapper > #background {
                    width: 100%;
                    height: inherit;
                    position: absolute;
                    z-index: 1;
                    opacity: 0.6;
                    object-fit: cover;
                    
                }


            .logo-wrapper > #logo {
                width: 50%;
                height: auto;
                padding: 50px;
                animation: fadeIn ease 3s;
                position: absolute;
                align-self: center;
                z-index: 2;
                
                
                
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

            mwc-button {
                --mdc-theme-primary: black;
                --mdc-theme-on-primary: rgba(242, 195, 29, 0.8);
                transition: transform .2s;
                

                align-self: center; 
                
                margin-bottom: 60px;
                
              }
    
              mwc-button:hover {
               
                --mdc-theme-on-primary: white;
                transform: scale(1.1);
    
              }
        
        
        
        `;
    }
    
    
    
    render(){

        return html`
        
        <section>

        <h1>Firmenprofil</h1>

        <div class="logo-wrapper">
            <img id="background" src="../../public/images/firmenprofil-logo-hintergrund.jpg"/>
            <img id="logo" src="../../public/images/logo.png"/>
        </div>

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





        </section>
        
        `


    }

}

customElements.define('firmenprofil-component', Firmenprofil);