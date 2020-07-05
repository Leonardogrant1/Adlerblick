import {LitElement, css, html} from "lit-element";
import { styleMap } from 'lit-html/directives/style-map';
import "@material/mwc-button";
import "@material/mwc-icon";
import "jquery";




//Logo für Webpack

import Logo from "../../public/images/logo.png";

import "../../public/images/background_contact.jpg";
import "../../public/images/baustelle_bild.jpg";
import "../../public/images/wachmann7.jpg";
import "../../public/images/IMG_6980.jpg";
import "../../public/images/veranstaltungsschutz_bild.jpg";
import "../../public/images/wachmänner-anfrage.jpg";
import "../../public/images/image12.png";






import {Router} from '@vaadin/router';

//Components
import "./home";
import "./firmenprofil";
import "./referenzen";
import "./dienstleistungen";
import "./Stellenangebote";
import "./Anfrage";
import "./Datenschutz";
import "./Impressum";
import "./Gallery";
import "./NotFound";

import "./dienstleistungen-einzeln/Ladendetektive";
import "./dienstleistungen-einzeln/Doorman";
import "./dienstleistungen-einzeln/Objektschutz";
import "./dienstleistungen-einzeln/Empfangsdienst";
import "./dienstleistungen-einzeln/Zutrittskontrolle";
import "./dienstleistungen-einzeln/Veranstaltungsschutz";
import "./dienstleistungen-einzeln/Baustellenschutz";






const whenScrolled = ` opacity: 0.3;`



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
            
            
        }


        main {
            transition: all .5s;
            
            width: 100%;
            height: 100%;

            display: block;
        }

       main > #header {
            width: 100%;
            left: 0;
            top: 0;
            right: 0;
            border-bottom: 2px solid rgb(242, 195, 29);
            padding: 5px;
            box-sizing: border-box;
            background-color: white;
            
            
            position: sticky;
            height: auto;


            z-index: 10;
            display: flex;
            justify-content: space-between;

        
         }

         

         main > #header > a > img {
             
             margin-left: 40px;
             margin-top: 5px;
             height: 85px;
         }

         main > #header > #navigationBar-wrapper {
             
             width: auto;
             
             margin-right: 100px;

         }

         #fillView, #menu {
             display: none;
         }

         #menu  {
                
            align-self: center;
            margin: 10px;
            width: 50px;
            float: right;
            cursor: pointer;
        }





        .sidebar {
            position: fixed;
            left: 0;
            list-style: none;
            text-decoration: none;
            width: 250px;
            height: 100%;
            background-color: rgb(255, 215, 0, 0.8);
            z-index: 20;
            font-family: "Roboto", sans-serif;
            
        }

        .sidebar > header {
            display: flex;
            font-family: "Roboto", sans-serif;
            font-size: 19px;
            text-align: center;
            line-height: 30px;
            padding: 20px;
            border-bottom: 1px solid rgb(170, 130, 0, 0.8);

            cursor: pointer;
            
        }

        .sidebar header > div {
            height: 25px;
            align-self: center;
            
            
        }

        .sidebar ul {
            list-style-type: none;
            margin: 0; 
            padding: 0;

        }

        .sidebar ul a {
            display: block;
            height: 100%;
            width: 100%;
            line-height: 65px;
            font-size: 18px;
            color: black;
            padding-left: 40px;
            box-sizing: border-box;
            
            border-bottom: 1px solid rgb(170, 130, 0, 0.8);
        }







         @media only screen and (max-width: 1307px) {
           
           
            #navigationBar > li > a > p {
                font-size: 1.2vw;

               
            }




          } 




         @media only screen and (max-width: 1113px) {


            

            #navigationBar-wrapper {
                display: none;
                
                
   
            }

            #menu {
                
                display: inline-block;
                align-self: center;
                margin: 10px;
                width: 50px;
                float: right;
            }

            #fillView {
                display: inline-block;
                width: 10px;
                height: 10px;
            }


            header a > img {
                height: 60px;
            }



            

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

        .dropdown-item:hover > p {
            
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
                background-color: rgba(255, 215, 0, 0.8);
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
                cursor: pointer;
                color: black;
                text-decoration: none;

            }





            

        `;
    }


    static get properties(){
        return {
            showSidebar: { type: Boolean }
        }
    }

    constructor(){
        super();
        this.showSidebar = false;
        
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
            {path: '/', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'home-component'},
            {path: '/firmenprofil', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'firmenprofil-component'},
            {path: '/dienstleistungen', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'dienstleistungen-component'},
            {path: '/ladendetektive', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'ladendetektive-component'},
            {path: '/doorman', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'doorman-component'},
            {path: '/objektschutz', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'objektschutz-component'},
            {path: '/empfangsdienst', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'empfangsdienst-component'},
            {path: "/zutrittskontrolle", action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'zutrittskontrolle-component'},
            {path: "/veranstaltungsschutz", action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'veranstaltungsschutz-component'},
            {path: "/baustellenueberwachung", action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'baustellenschutz-component'},
            {path: '/referenzen', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'referenzen-component'},
            {path: '/stellenangebote', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'stellenangebote-component'},
            {path: '/anfragen', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'anfragen-component'},
              {path: '/datenschutz', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'datenschutz-component'},
            {path: '/impressum', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'impressum-component'},
              {path: '/bildergalerie', action: (ctx, commands) => {
                window.scrollTo(0, 0);
              }, component: 'gallery-component'},
              {path: '(.*)', component: 'not-found'}
         ]);












    }



    // toggleExtendSidebar(){
        
    //         this.showSidebarExtended = !this.showSidebarExtended;
        
    // }


    sidebarSlide(){
        if(this.showSidebar){

            return {
                left: 0,
                boxShadow: "5px 10px 10px rgb(180, 140, 0, 0.8)",
                transition: 'left 0.4s ease'
            }



        }else{

            return {
                left: '-250px',
                boxShadow: "none",
                transition: 'left 0.4s ease'
            }


        }
    }




    render(){
        return html`






<div class="sidebar" style="${styleMap(this.sidebarSlide())}"> 

<header> 

<div>
<mwc-icon @click="${() => this.showSidebar = false}">close</mwc-icon>
</div>
<h4  @click="${() => this.showSidebar = false}" >Menu schließen</h4>


</header>

<ul>

<li @click="${() => this.showSidebar = false}"><a href="/firmenprofil">Firmenprofil</a></li>
<li @click="${() => this.showSidebar = false}"><a href="/dienstleistungen">Dienstleistungen</a></li>
<li @click="${() => this.showSidebar = false}"><a href="/referenzen">Referenzen</a></li>
<li @click="${() => this.showSidebar = false}"><a href="/bildergalerie">Bildergalerie</a></li>
<li @click="${() => this.showSidebar = false}"><a href="/stellenangebote">Stellenangebote</a></li>
<li @click="${() => this.showSidebar = false}"><a href="/anfragen">Anfragen</a></li>

</ul>



</div>







<main style="${styleMap(this.showSidebar ? {marginLeft: "250px"} : {marginLeft: 0})}">


            <header id="header">

            <div id="fillView">
            </div>

            <a href="/"><img src="${Logo}" height="85px" width="auto"></a>


            <div id="menu"> 
            
            <mwc-icon @click="${() => this.showSidebar = true}">menu</mwc-icon>
            
            </div>

            <div id="navigationBar-wrapper">
                <ul id="navigationBar">
                    
                    <li id="firmenprofil" class="nav-item"><a href="/firmenprofil"><p>Firmenprofil</p></a></li>
                
                
                    <li id="dienstleistungen" class="nav-item dropdown"><a href="/dienstleistungen"><p>Dienstleistungen</p></a>
                
                    <ul class="dropdown-content">

                        <a href="/ladendetektive"><li class="dropdown-item"><p>Ladendetektiv</p></li></a>
                        <a href="/doorman"><li class="dropdown-item"><p>Doorman</p></li></a>
                        <a href="/objektschutz"><li class="dropdown-item"><p>Objektschutz</p></li></a>
                        <a href="/empfangsdienst"><li class="dropdown-item"><p>Empfangsdienst</p></li></a>
                        <a href="/zutrittskontrolle"><li class="dropdown-item"><p>Zutrittskontrolle</p></li></a>
                        <a href="/veranstaltungsschutz"><li class="dropdown-item"><p>Veranstaltungsschutz</p></li></a>
                        <a href="/baustellenueberwachung"><li class="dropdown-item"><p>Baustellenschutz</p></li></a>

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
            
                <p>Mobil: 01520 / 3360001</p>
                <p>E-Mail: info@detektei-adlerblick.de</p> 
                
                </div>

                
                </div>



                <div class="impressum">
                
                <a href="/impressum">Impressum</a>
                <a href="/datenschutz">Datenschutz</a>

                </div>
            
            
            </footer>

</main>

        
        
        `;
    }
}

customElements.define('app-element', App);