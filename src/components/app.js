import {LitElement, css, html} from "lit-element";
import "@material/mwc-button";
import "@material/mwc-icon"

import {Router} from '@vaadin/router';

//Components
import "./home";
import "./firmenprofil";
import "./referenzen";
import "./dienstleistungen";

import "./dienstleistungen-einzeln/Ladendetektive";
import "./dienstleistungen-einzeln/Doorman";
import "./dienstleistungen-einzeln/Objektschutz";
import "./dienstleistungen-einzeln/Empfangsdienst";
import "./dienstleistungen-einzeln/Zutrittskontrolle";
import "./dienstleistungen-einzeln/Veranstaltungsschutz";
import "./dienstleistungen-einzeln/Baustellenschutz";




class App extends LitElement {

    static get styles(){
        return css`

        
        
        :host {
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            box-sizing: border-box;

            width: 100%;
            height: 50%;
            
        }


        header {
            width: 100%;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            height: auto;
            border-bottom: 2px solid rgb(242, 195, 29);
            padding: 5px;
            box-sizing: border-box;
            background-color: white;

            position: sticky;

            z-index: 10;
            display: flex;
            justify-content: space-between;

        
         }

         header a > img {
             margin-left: 40px;
             margin-top: 5px;
         }

         #navigationBar-wrapper {
             display: inline;
             width: auto;
             margin-right: 100px;

         }

         #navigationBar > li, #navigationBar > li p{
             display: inline-block;
             margin: 10px;
             cursor: pointer;
             color: black;

             font-size: 19px;
             font-family: 'Roboto', sans-serif;

         }


         #navigationBar > li > a > p:hover {
             color: rgb(242, 195, 29);
         }



         .dropdown {
            position: relative;
        }
        
        .dropdown-content {

            margin: 0; 
            padding: 0;
            position: absolute;
            top: 100%;
            left: 0;
            text-align: left;
            list-style-type: none;
            background-color: white;
            display: none;

            box-shadow: 5px 10px 10px grey;
            
        }

        .dropdown-content li {
            
            border-bottom: 1px solid rgba(0,0,0, 0.3);
            
            
        }

        .dropdown-item:hover {
            
            background-color: rgb(242, 195, 29);
            
            
            
        }

        .dropdown-item:hover > a > p {
            
            color: white !important;
            
            
        }

        .dropdown:hover .dropdown-content {
            display: block;
        }





         a {
            text-decoration: none !important;
         }



            footer {
                width: 100%;
                height: auto;
                background-color: rgb(255,	215, 0, 0.8);
                padding: 30px;
                box-sizing: border-box;
                border-top: 1px solid black;
            }

            .footer-content {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                
            }

            .footer-content > div {
                display: inline-flex;
            }

            .logoAndName {
                align-items: start;
                padding: 20px;
            }

            .logoAndName > img {
                width: 120px;
                height: auto;
                
            }

            .logoAndName > h2 {
                font-family: 'Roboto', sans-serif;
                margin-left: 20px;
            }

            .contact-data {
                flex-direction: column;
                justify-content: flex-start;
                padding: 20px;
                
            }

            .contact-data p {
                margin: 4px;
                font-family: 'Roboto', sans-serif;
            }

            .impressum {
                display: flex; 
                width: 30%; 
                margin: 0 auto;
                justify-content: space-around;
                border-top: 1px solid black;
            }

            .impressum a {

                margin: 8px;
                font-size: 20px;
                font-family: 'Roboto', sans-serif;

            }

            

        `;
    }


    static get properties(){
        return {

        }
    }




    firstUpdated(){

        console.log("jaddasd")

        const outlet = this.shadowRoot.getElementById("outlet");
        const router = new Router(outlet);
        




       /*  router.setRoutes([
             {path: '/', component: 'home-component'},
             {path: '/firmenprofil', component: 'firmenprofil-component'},
             {path: '/dienstleistungen', children: [{path: '/', component: 'dienstleistungen-component'},
             {path: '/ladendetektive', component: 'ladendetektive-component'},
             {path: '/doorman', component: 'doorman-component'},
             {path: '/objektschutz', component: 'objektschutz-component'},
             {path: '/empfangsdienst', component: 'empfangsdienst-component'}]},
            
            {path: '/referenzen', component: 'referenzen-component'}           
          ]); */

          router.setRoutes([
            {path: '/', component: 'home-component'},
            {path: '/firmenprofil', component: 'firmenprofil-component'},
            {path: '/dienstleistungen', component: 'dienstleistungen-component'},
            {path: '/ladendetektive', component: 'ladendetektive-component'},
            {path: '/doorman', component: 'doorman-component'},
            {path: '/objektschutz', component: 'objektschutz-component'},
            {path: '/empfangsdienst', component: 'empfangsdienst-component'},
            {path: "/zutrittskontrolle", component: 'zutrittskontrolle-component'},
            {path: "/veranstaltungsschutz", component: 'veranstaltungsschutz-component'},
            {path: "/baustellenschutz", component: 'baustellenschutz-component'},
            {path: '/referenzen', component: 'referenzen-component'}           
         ]);


    }






    render(){
        return html`

            <header>

            <a href="/"><img src="../../public/images/logo.png" height="85px" width="auto"></a>

            <div id="navigationBar-wrapper">
                <ul id="navigationBar">
                    
                    <li id="firmenprofil" class="nav-item"><a href="/firmenprofil"><p>Firmenprofil</p></a></li>
                
                
                    <li id="dienstleistungen" class="nav-item dropdown"><a href="/dienstleistungen"><p>Dienstleistungen</p></a>
                
                    <ul class="dropdown-content">

                        <li class="dropdown-item"><a href="/ladendetektive"><p>Ladendetektiv</p></a></li>
                        <li class="dropdown-item"><a href="/doorman"><p>Doorman</p></a></li>
                        <li class="dropdown-item"><a href="/objektschutz"><p>Objektschutz</p></a></li>
                        <li class="dropdown-item"><a href="/empfangsdienst"><p>Empfangsdienst</p></a></li>
                        <li class="dropdown-item"><a href="/zutrittskontrolle"><p>Zutrittskontrolle</p></a></li>
                        <li class="dropdown-item"><a href="/veranstaltungsschutz"><p>Veranstaltungsschutz</p></a></li>
                        <li class="dropdown-item"><a href="/baustellenschutz"><p>Baustellenschutz</p></a></li>

                    </ul>

                    </li>
                
                
                    <li id="referenzen" class="nav-item"><a href="/referenzen"><p>Referenzen</p></a></li>
                    <li id="bildergalerie" class="nav-item"><a href="/bildergalerie"><p>Bildergalerie</p></a></li>
                    <li id="stellenangebote" class="nav-item"><a href="/stellenangebote"><p>Stellenangebote</p></a></li>
                    <li id="anfragen" class="nav-item"><a href="/anfragen"><p>Anfragen</p></a></li>
                </ul>
            </div>

            </header>


            <main id="outlet">

            


            </main>



            <footer>
            
                <div class="footer-content"> 
                
                <div class="logoAndName">
                
                <img src="../../public/images/logo.png"/>
                <h2>Detektei Adlerblick</h2>

                </div>


                <div class="contact-data">

                <p style="font-style: bold;">DETEKTEI ADLERBLICK</p>
                <p>Biebricher Str. 7f, 55252 Mainz-Kastel</p>
                <p>Tel. 0611 / 1721991</p>
                <p>Fax 0611 / 1721990</p>
                <p>Mobil 01520 / 3360001</p>
                <p>E-Mail : info@detektei-adlerblick.de</p> 
                
                </div>

                
                </div>



                <div class="impressum">
                
                <a>Impressum</a>
                <a>Datenschutz</a>

                </div>
            
            
            </footer>

        
        
        `;
    }
}

customElements.define('app-element', App);