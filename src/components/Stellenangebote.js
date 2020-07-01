import {LitElement, css, html} from "lit-element";
import "jquery";
import "@material/mwc-button";
import "@material/mwc-textfield";
import "@material/mwc-textarea";



class StellenAngebote extends LitElement {

    static get styles(){
        return css`
        
        .top > h1 {

            font-family: 'Comfortaa', sans-serif;
            color: white;
            font-size: 40px;
            margin:  0;
            padding: 40px;
            background: black;
        }


        @media only screen and (max-width: 780px){
            .top > h1 { 
                font-size: 5vw;
            }
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
            object-position: 0px 40%;
            opacity: 0.9;
            position: absolute;
            
        }

        #below-logo-text {
            width: inherit;
            padding: 60px 40px;
            box-sizing: border-box;
            background-color: black;
            color: white;
            opacity: 0.8;
            position: absolute;
            display: inline-flex;
            align-self: flex-end;
            
        }

        @media only screen and (max-width: 1113px){
            #below-logo-text > div > h1 { 

                font-size: 4vw !important;
            }

            #below-logo-text > div > p { 

                font-size: 2.5vw !important;
            }

            #background {
                object-position: 50% 50%;
                
            }
        }


        #below-logo-text > div > h1 {
            font-size: 2.0rem;
            font-family: 'Comfortaa', sans-serif;
            line-height: 1.5;
            width: 65%;
            margin: 0 0 20px 0;
        }

        #below-logo-text > div > p, #below-logo-text > div > h2 {
            font-size: 18px;
            font-family: 'Comfortaa', sans-serif;
            line-height: 1.5;
            width: 65%;
            margin: 0;
        }


        .einleitung {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .einleitung > div {
            
            display: inline-block;
            width: auto;
            width: 100%;
            min-width: 300px;
            
              
        }

        .einleitung > div > p {
            font-size: 3vw;
            font-family: 'Comfortaa', sans-serif;
            line-height: 1.5;
            text-align: center;
        }

        @media only screen and (min-width: 780px){
            .einleitung > div > p {
                font-size: 25px;
            }
          }


          .einleitung > h1 {
            font-size: 30px;
            font-family: 'Comfortaa', sans-serif;
          
        }

        #lists {
            display: flex;
            width: 100%;
            
            box-sizing: border-box;
            flex-wrap: wrap;

            font-family: 'Comfortaa', sans-serif;
            font-size: 
            line-height: 1.5;
            
        }

        #lists > div {
            
            
            padding: 90px 50px;
            background-color: rgb(255,	215, 0, 0.8);
            flex-grow: 1;
            
            
            border: 1px solid black;

            
        }

        #lists > div > p {
            font-size: 23px;
            color: rgba(0, 0, 0, 0.5);
        }

        @media only screen and (min-width: 780px){
            #lists {
                font-size: 20px;
            }
          }

        
          li {
              margin: 10px 0px;
              
          }

          
          .form {
              width: 100%;
              display: flex;
              justify-content: center;
              margin: 30px 0px;
              
          }

          .form > form{
                width: 70%;
                display: inline-flex;
                margin: auto;
                justify-self: center;
                flex-direction: column;
                
          }

          input ,textarea {
              margin: 30px 0px;
              
              padding: 10px;
              
              font-family: 'Roboto', sans-serif;

             
          }

          textarea {
            
            min-height: 100px;
           
        }
          
          
          

          form > div {
              display: inline-flex;
              margin: 30px 0px;
              flex-wrap: wrap;
              
              
          }

          form > div > input {

            flex-grow: 1;
            margin: 20px 5px;
          } 

          button {
            
            width: 200px;
            background-color: black;
            color: rgba(242, 195, 29, 0.8);
            border: 0;
            border-radius: 5%;
            padding: 10px 5px; 
            cursor: pointer;
            transition: transform .2s;
            font-size: 16px;
          }

          button:hover {
           
            --mdc-theme-on-primary: white;
            transform: scale(1.1);
            

          }

          
        
        `;
    }


    firstUpdated(){

        const root = this.shadowRoot;

        this.shadowRoot.getElementById("form").addEventListener("submit", function(e){

            //e.preventDefault();
            console.log("hallo");

            const name = root.getElementById("Name");
            const vorname = root.getElementById("Vorname");
            const straße = root.getElementById("Straße");
            const ort = root.getElementById("Ort");
            const email = root.getElementById("Email");
            const qualifikationen = root.getElementById("Qualifikationen");
            const tätigkeiten = root.getElementById("Tätigkeiten");

            

            if(!name.value || !vorname.value || !straße.value || !ort.value || !email.value ||
                !qualifikationen.value || !tätigkeiten.value){

                    //show error messages

                    console.log("failed");


                }else{

                    console.log(email.value);

                  /*  Email.send({
                        Host : "smtp.yourisp.com",
                        Username : "Oblivionmasterify",
                        Password : "kakamitsose",
                        To : 'LeonardoGranetto@gmail.com',
                        From : email.value,
                        Subject : "This is the subject",
                        Body : "And this is the body"
                    }).then(
                      message => alert(message)
                    ); */
                    
                }


        })

    }

    render(){
        return html`
        
        <section class="top"> 

        <h1>Stellenangebote</h1>

         <div class="logo-wrapper">
            <img id="background" src="../../public/images/wachmänner-anfrage.jpg"/>
   
                     <div id="below-logo-text">


                                <div>
                              <h1>Schließen Sie sich unserem Team an!</h1>
                              <p> 
            Sind Sie im Alter zwischen 20 bis 45 alt, haben Sie ein einwandfreies Führungszeugnis, IHK Sachkundeprüfung, gute Deutschkenntnisse, Sie sind körperlich fit und können flexibel arbeiten ?
            </p> <br />
            <h2>Sie sind bei uns herzlich willkommen!</h2>
                                </div>
                              

                    </div>
    
        </div>
        


        <section class="einleitung"> 
    


        <div id="lists">

        <div>
        <p>Wir suchen Mitarbeiter/innen für den Bereich:</p>

        <ul>
        
        <li>Bewachungsdienst</li>
        <li>Kaufhausdetektive</li>

        </ul>
        
        </div>

        <div>

        <p>Wir bieten:</p>

            <ul>

            <li>Abwechslungsreiche Einsatzmöglichkeiten</li>
            <li>Freundliches Arbeitsklima</li>
            <li>Attraktive Bezahlung</li>

            </ul>

        </div>


        </div>

        <h1>Berwerben Sie sich jetzt</h1>
        

        
        
        </section>


        

        
        
        </section>




        <div class="form">

            
            <form id="form" action="send_email.php" method="POST">
            

            <div>
            <input
              type="text"
              placeholder="Name"
              id="Name"
              name="Name"
              
              >

            <input 
              type="text"
              placeholder="Vorname"
              id="Vorname"
              name="Vorname"
              >

            </div>

            <div>
            <input
            type="text"
            placeholder="Straße"
            id="Straße"
            name="Straße"
            >

            <input
            type="text"
            placeholder="PLZ, Ort"
            id="Ort"
            name="Ort"
            >
            </div>

            <input
            type="email"
            placeholder="Email"
            id="Email"
            name="Email">

            
            
            <textarea

            placeholder="Qualifikationen, Abschlüsse"
            id="Qualifikationen"
            name="Qualifikationen"
            
            ></textarea>          
            <textarea
            placeholder="Bisherige Tätigkeiten"
            id="Tätigkeiten"
            name="Tätigkeiten"
            
            ></textarea>


            


            
            <button type="submit" name="submit">ABSENDEN</button>
            
            </form>
        
        
        
        
        
        </div>




        
        `;
    }

}

customElements.define('stellenangebote-component', StellenAngebote);



          /*  <div>
            <mwc-textfield outlined
              label="Name"
              id="Name"
              validationMessage="Bitte Name eingeben"
              ></mwc-textfield>

            <mwc-textfield 
              outlined
              label="Vorname"
              id="Vorname"
              validationMessage="Bitte Vorname eingeben"
              ></mwc-textfield>

            </div>

            <div>
            <mwc-textfield
            outlined
            label="Straße"
            id="Straße"
            validationMessage="Bitte Straße eingeben"
            ></mwc-textfield>

            <mwc-textfield
            outlined
            label="PLZ, Ort"
            id="Ort"
            validationMessage="Bitte Ort eingeben"
            ></mwc-textfield>
            </div>

            <mwc-textfield
            outlined
            label="Email"
            validationMessage="Bitte Email eingeben"
            id="Email"></mwc-textfield>

            
            
            <mwc-textarea
            outlined
            label="Qualifikationen, Abschlüsse"
            id="Qualifikationen"
            validationMessage="Bitte Qualifikationen und Abschlüsse eingeben"></mwc-textarea>
            
            <mwc-textarea
            outlined
            label="Bisherige Tätigkeiten"
            id="Tätigkeiten"
            validationMessage="Bitte bisherige Tätigkeiten eingeben"></mwc-textarea>


            <mwc-button raised label="Senden"></mwc-button>  */