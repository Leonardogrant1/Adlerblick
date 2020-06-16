import {LitElement, css, html} from "lit-element";
import "@material/mwc-button";

class Home extends LitElement {



    static get styles(){

        return css`
        
        
        #content-wrapper {
             
            width: 100%;
            min-height: 618px;
            height: 618px;
            overflow: auto;
            display: flex;
            position: relative;


            box-sizing: border-box;
            
            

             
         }


         

         .content-wrapper-background {
             width: inherit;
             height: inherit;
             display: flex;
             position: absolute;
         }

         .content-wrapper-background #home-photo-background {
             width: 50%;
             height: 100%;
             background-image: url('../../../public/images/home-background.jpg');

             background-size:  auto 100%;
         }

         .content-wrapper-background #section-background {
             width: 50%;
             height: 100%;
             background-color: rgb(255,	215, 0, 0.8);
             z-index: -1;
         }


         #content-wrapper > .rim {
             
            left: 60px;
            justify-self: center;
            margin: auto;
            align-self: center; 
            width: 90%;
            height: 80%;
            
            
             
             border: 10px solid white;
             position: absolute;
             box-sizing: border-box; 
             z-index: 1;
         }

         #content-wrapper > .welcome {
            width: 78%;
            
            justify-self: center;
            margin: auto;
            z-index: 2;
            align-self: center;
            align-items: center;
         }
         
         .welcome > div {
             height: auto;
             margin: auto 0;
         }

         .welcome div > h1 {
            font-family: 'Comfortaa', sans-serif;
            color: black;
            font-size: 40px;
         }

         .welcome div > p {
            font-family: 'Roboto', sans-serif;
            color: black;
            font-size: 20px;
         }

         .welcome div > button {
             border-radius: 4%;
             height: 50px;
             background-color: rgba(242, 195, 29, 0.8);
             border: 2px solid white;
             font-family: 'Roboto', sans-serif;
             color: white;
             padding: 10px;
             font-size: 17px;

             cursor: pointer;

         }

         .welcome div > button:hover {
            background-color: white;
             border: 2px solid rgba(242, 195, 29, 0.8);
             font-family: 'Roboto', sans-serif;
             color: rgba(242, 195, 29, 0.8);
         }

         mwc-button {
            --mdc-theme-primary: black;
            --mdc-theme-on-primary: rgba(242, 195, 29, 0.8);
            transition: transform .2s;
          }

          mwc-button:hover {
           
            --mdc-theme-on-primary: white;
            transform: scale(1.1);

          }


          #services {
            
          }

          #services > h1 {
              font-family: 'Comfortaa', sans-serif;
              color: black;
              font-size: 40px;
              margin-left: 50px;
              
          }

          #service-list{
            width: 80%;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-bottom: 40px;
          }


          .service-item {
            width: 320px;
            height: 380px;
            margin: 30px;
            background-color: white;
            box-shadow: 5px 10px 10px grey;
            display: inline-flex;
            flex-direction: column;
            border-radius: 6%;
          }

          .service-item > img {
              width: auto;
              height: 50%;
              border-radius: 6% 6% 0 0;
            
            }

            .item-info {
                padding: 30px;
                display: inline-flex;
                flex-direction: column;
                justify-content: space-between;
            }
        
            .item-info h1, .item-info p {
                font-family: 'Roboto', sans-serif;
                
                color: black;
                
            }
        
        
        
        
        
        `;
    }






    render(){
        return html`
        
        <section id="content-wrapper">



                <div class="content-wrapper-background">

                <div id="section-background"></div>
                
                <div id="home-photo-background"></div>

                </div>


                <div class="rim"></div>

                <div class="welcome">
                    <div>
                    <h1>Detektei Adlerblick</h2>
                    <p>Wir sorgen für Ihre Sicherheit</p>
                    <mwc-button raised label="Kontaktieren Sie uns"></mwc-button>
                    
                    </div>
                </div>


            </section>

            <section id="services">

            <h1>Unsere Dienste</h1>

            <div id="service-list">


            <div class="service-item">

            <img src="../../public/images/detective.jpg">

            <div class="item-info"> 

            <h1>Ladendetektive</h1>

            <p class="read-more">Mehr erfahren</p>

            </div>

            </div>
            
            
            
            
            <div class="service-item">


            <img src="../../public/images/doorman.jpg">

                <div class="item-info"> 

                <h1>Doorman</h1>

                <p class="read-more">Mehr erfahren</p>

                </div>

            </div>






            <div class="service-item">
            <img src="../../public/images/objektschutz.jpg">

                <div class="item-info"> 

                    <h1>Objektschutz</h1>

                    <p class="read-more">Mehr erfahren</p>

                    </div>
            </div>


            <div class="service-item">
                
            <img src="../../public/images/empfangsdienst.jpg">

                <div class="item-info"> 

                <h1>Empfangsdienst</h1>

                <p class="read-more">Mehr erfahren</p>

                </div>
            </div>


            <div class="service-item">
                
            <img src="../../public/images/zutrittskontrolle.jpg">

            <div class="item-info"> 

                <h1>Zutrittskontrolle</h1>

                <p class="read-more">Mehr erfahren</p>

                </div>

            </div>


            <div class="service-item">
                
            <img src="../../public/images/veranstaltungsschutz.jpg">

                <div class="item-info"> 

                <h1>Veranstaltungsschutz</h1>

                <p class="read-more">Mehr erfahren</p>

                </div>
            </div>

            <div class="service-item">
                <img src="../../public/images/baustellenschutz.jpg">

                <div class="item-info"> 

                <h1>Baustellenüberwachung</h1>

                <p class="read-more">Mehr erfahren</p>

                </div>
            </div>




            </div>

            </section>
        
        
        
        
        
        `;
    }
}


customElements.define('home-component', Home);