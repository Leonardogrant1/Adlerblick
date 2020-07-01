import {LitElement, css, html} from "lit-element";
import "@material/mwc-button";
import "@material/mwc-icon";

class Zutrittskontrolle extends LitElement {


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
            object-position: 0px 0px;
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

        #below-logo-text > h1 {
            font-size: 2.0rem;
            font-family: 'Comfortaa', sans-serif;
            line-height: 1.5;
            width: 65%;
            margin: 0;
        }


        main {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            height: auto;
            width: 100%;
            
        }



        .description {
            display: flex;
            height: auto;
            box-sizing: border-box;
            width: 100%;
            flex-direction: row;
            flex-wrap: wrap;

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



        #buttonWrapper {
            align-self: center;
        }

        .images {

            width: 100%;
            height: auto;
            object-fit: cover;
            object-position: 80% 50%;
            
           


          }

        mwc-button {
            --mdc-theme-primary: black;
            --mdc-theme-on-primary: rgba(242, 195, 29, 0.8);
            transition: transform .2s;
            

             
            
            margin-bottom: 60px;
            
          }

          mwc-button:hover {
           
            --mdc-theme-on-primary: white;
            transform: scale(1.1);

          }



        @media only screen and (max-width: 1113px){
            #below-logo-text > h1 { 

                font-size: 3vw;
            }

            #background {
                object-position: 50% 50%;
                
            }
        }




        @media only screen and (max-width: 1113px) { 

            .description > div {

                width: 100%;

            }

            .floatChange {
                
                flex-direction: column-reverse;
                
                
            }




        }


        
        
        `;
    }

    render(){
        return html`
        
        <section>
        

        <h1>Zutrittskontrolle</h1>

        <div class="logo-wrapper">
            <img id="background" src="../../public/images/zutrittskontrolle.jpg"/>
           
            <div id="below-logo-text">
        
        <h1>Wir sorgen für Ordnung.</h1>
        
        </div>
            
        </div>


        <main>






<div class="description">

<div style="display: inline-flex; flex-direction: column;">

<p>Die Bewachung und Zutrittskontrolle bei Geschäftseröffnungen oder Veranstaltungen werden oft nicht bedacht. Besucher und kleinere Ausfälle von schwierigen Personen sollen vermieden werden. 
<br />    
<br />
Die Beratung vom Fachmann zum Thema Sicherheit bei Geschäftseröffnungen oder Veranstaltungen ist von großem Vorteil. Ein oder mehrere diskret auftretende Sicherheitspersonen werden die Atmosphäre nicht verändern und können aber außerordentlich zur Ihrer Beruhigung beitragen.

</p>


<div id="buttonWrapper">
<a href="/anfragen" style="text-decoration: none;"><mwc-button raised label="Kontaktieren Sie uns"></mwc-button></a></div>

</div>

<div>

<img class="images" src="../../public/images/IMG_6980.jpg" style="object-position: 40% 0%;" />

</div> 














</div>



        </main>
        
        
        </section>
        
        
        `;
    }
}

customElements.define('zutrittskontrolle-component', Zutrittskontrolle);