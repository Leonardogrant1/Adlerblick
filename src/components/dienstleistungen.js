import {LitElement, css, html} from "lit-element";
import "@material/mwc-button";
import "@material/mwc-icon";


class Dienstleistungen extends LitElement {


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


        #services {

            width: 100%;

        }

        #services > h2 {
            font-size: 2.0rem;
            font-family: 'Comfortaa', sans-serif;
            margin:  0;
            padding: 40px;

        }

        #service-list {
            width: 80%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 40px;
            

        }

        .service-item {
            display: inline-flex;
            flex-direction: column;
            border: 2px solid black; 
            margin: 30px;
            width: 456px;
            height: 252px;
            max-width: 456px;


        }

        .item-info {
            display: flex;
            width: inherit;
            height: inherit;
        }

        
        .item-info img {

            width: inherit;
            height: inherit;

            object-fit: cover;
            object-position: 0px 0px;
            opacity: 0.9;
            z-index: 3;
            position: absolute;

        }

        .item-info > div {

            z-index: 4;
            width: 100%;
            height: 40%;
            display: flex;
            justify-content: space-between;
            align-self: flex-end;
            
            background-image: linear-gradient(rgba(0, 0, 0, 0.3), black);

            
        }

        .item-info > div h1 {
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            color: white;
            margin-left: 10px;
        }

        .item-info > div a {
            width: 40px;
            height: 40px;
            align-self: flex-end;
            text-decoration: none;
            margin: 10px;
            cursor: pointer;
        }

        .show-more {
            width: inherit;
            height: inherit;
            border-radius: 50px;
            background-color: white;

            display: flex;
            justify-content: center;
            justify-self: flex-end;
            
            
        }

        .icon {
            align-self: center;
        }

        
        
        
        `;
    }


    render(){
        return html`
        
        <section>

        <h1>Dienstleistungen</h1>

        <div class="logo-wrapper">
            <img id="background" src="../../public/images/wachmänner.jpg"/>
           
            <div id="below-logo-text">
        
        <h1>Die Detektei Adlerblick bietet Ihnen eine umfangreiche Bewachung in den nachfolgenden Bereichen.<br />
         Ihre Sicherheit liegt in unserem Interesse.</h1>
        
        </div>
            
        </div>

        


        
        
        <section id="services">

            <h2>Unsere Dienste</h2>
        

            <div id="service-list">


            <div class="service-item">



            <div class="item-info"> 

            <img src="../../public/images/detective.jpg">

                <div>
                 <h1>Ladendetektive</h1>

                 <a href="/ladendetektive"><div class="show-more"><mwc-icon class="icon">keyboard_arrow_right</mwc-icon></div></a>
                 </div>

            </div>

            </div>




            <div class="service-item">




            <div class="item-info"> 

            <img src="../../public/images/doorman.jpg">

                <div>
                     <h1>Doorman</h1>

                     <a href="/doorman"><div class="show-more"><mwc-icon class="icon">keyboard_arrow_right</mwc-icon></div></a>
                 </div>

            </div>

            </div>






<div class="service-item">


    <div class="item-info"> 

    <img src="../../public/images/objektschutz.jpg">

<div>
 <h1>Objektschutz</h1>

 <a href="/objektschutz"><div class="show-more"><mwc-icon class="icon">keyboard_arrow_right</mwc-icon></div></a>

        </div>
    </div>
</div>


<div class="service-item">
    

    <div class="item-info"> 

    <img src="../../public/images/empfangsdienst.jpg">

                <div>
                 <h1>Empfangsdienst</h1>

                 <a href="/empfangsdienst"><div class="show-more"><mwc-icon class="icon">keyboard_arrow_right</mwc-icon></div></a>
                </div>
    </div>
</div>


<div class="service-item">
    

<div class="item-info"> 

<img src="../../public/images/zutrittskontrolle.jpg">

<div>
 <h1>Zutrittskontrolle</h1>

 <a href="/zutrittskontrolle"><div class="show-more"><mwc-icon class="icon">keyboard_arrow_right</mwc-icon></div></a>

    </div>
    </div>

</div>


<div class="service-item">
    

    <div class="item-info"> 

    <img src="../../public/images/veranstaltungsschutz.jpg">

                <div>
                 <h1>Veranstaltungsschutz</h1>

                 <a href="/veranstaltungsschutz"><div class="show-more"><mwc-icon class="icon">keyboard_arrow_right</mwc-icon></div></a>
                 </div>
    </div>
</div>

<div class="service-item">

    <div class="item-info"> 

    <img src="../../public/images/baustellenschutz.jpg">

<div>
 <h1>Baustellenschutz</h1>

 <a href="/baustellenschutz"><div class="show-more"><mwc-icon class="icon">keyboard_arrow_right</mwc-icon></div></a>
 </div>
    </div>
</div>





        
        
        </div>

        
        </section>

        
        
        
        `;
    }
}

customElements.define('dienstleistungen-component', Dienstleistungen);