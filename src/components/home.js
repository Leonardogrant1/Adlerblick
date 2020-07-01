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

             
         }

         .content-wrapper-background #home-photo-background > img {
            width: 100%;
            height: 100%;
            object-fit: cover;

            
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
            display: flex;
            width: 100%;
            height: 600px;
            overflow: hidden;
            box-sizing: border-box;
            margin-bottom: 30px;
            
          }

          #services > img {
             
              height: inherit;
              object-fit: cover;
              position: absolute;
              object-position: 40% 50%;
              
              left: 0;
              width: 100%;
              
              
          } 


          #service-list {
            
            height: inherit;
            display: inline-flex;
            background-color: rgb(255, 215, 0);            
            position: absolute;
            opacity: 0.9;
            
            right: 0;
            width: 100%;
            
            clip-path: polygon(60% 0, 100% 0, 100% 100%, 40% 100%);
          }

          #service-list > div {
              display: flex;
              flex-direction: column;
              color: black;
              justify-content: center;
              position: absolute;
              right: 0;
              z-index: 6;
              margin-right: 15%;
              align-self: center;
              
          }

          #service-list > div > ul {
            list-style-type: none;
          }


          #service-list li {
              margin: 20px 0px;
              font-family: 'Comfortaa', sans-serif;
              font-size: 20px;
          }

          #services > h1 {
              font-family: 'Comfortaa', sans-serif;
              color: black;
              font-size: 40px;
              margin-left: 50px;
              
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
              object-fit: cover;
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
        
        

            @media only screen and (max-width: 1113px) { 


                

                #home-photo-background {

                    position: absolute;
                    z-index: 3;
                    width: 100% !important;
                      
                     
                    
                    

                }

                #section-background {

                    
                    position: absolute;
                    z-index: 4 !important;
                    
                    width: 100% !important; 
                    
                    
                }

                .rim {
                    display: none;
                }

                #content-wrapper > .welcome {
                    display: absolute;
                    z-index: 6;
                }

            }

            @keyframes fadein {
                from { opacity: 0;
                        
                     }
                to   { 
                    opacity: 1; 
                    
                }
            }


            #dienste {
                font-family: 'Comfortaa', sans-serif;
                text-align: center;
                padding-top: 100px;
                opacity: 1;
                background-color: black;
                color: white;
                animation: fadein 2s;
            }

            #dienste2 {
                font-family: 'Comfortaa', sans-serif;
                text-align: center;
                padding-bottom: 100px;
                font-size: 20px;
                animation: fadein 2s;
                background-color: black;
                color: white;
                
            }



            @media only screen and (max-width: 1040px){


                #service-list {
            
                    width: 130%;
                    
                  }

                  

                  


            }


            @media only screen and (max-width: 785px){


                #service-list {
            
                    width: 100% !important;
                    clip-path: unset !important;
                    
                  }


                  #service-list > div {
                    left: 20px;
                    right: unset !important;
                  }

                  


            }

            



            @media only screen and (max-width: 610px){


                #dienste {
                    font-size: 23px
                }
    
                #dienste2 {
                    font-size: 17px
                    
                }



            }


        
        
        
        `;
    }






    render(){
        return html`
        
        <section id="content-wrapper">



                <div class="content-wrapper-background">

                <div id="section-background"></div>
                
                <div id="home-photo-background">
                <img src="../../../public/images/IMG_6997.jpg" />
                </div>

                </div>


                <div class="rim"></div>

                <div class="welcome">
                    <div>
                    <h1>Detektei Adlerblick</h1>
                    <p>Wir sorgen für Ihre Sicherheit</p>
                    <a href="/anfragen" style="text-decoration: none;"><mwc-button raised label="Kontaktieren Sie uns"></mwc-button></a>
                    
                    </div>
                </div>


            </section>


<div style="width: 100%; height: auto; background-color: black; opacity: 0.9;">
            <h1 id="dienste">Vom Ladendetektive bis zur Baustellenüberwachung</h1>
            <p id="dienste2">Bei uns finden Sie Ihre individuellen Bedürfnisse</p>
</div>
            
            <section id="services">


                <img src="../../../public/images/IMG_7000.jpg" />

                <div id="service-list">

<div>
                        <ul>
                        
                        <li>Ladendetektive <mwc-icon style="color: green;">check</mwc-icon></li>
                        <li>Doorman <mwc-icon style="color: green;">check</mwc-icon></li>
                        <li>Objektschutz <mwc-icon style="color: green;">check</mwc-icon></li>
                        <li>Empfangsdienst <mwc-icon style="color: green;">check</mwc-icon></li>
                        <li>Zutrittskontrolle <mwc-icon style="color: green;">check</mwc-icon></li>
                        <li>Veranstaltungsschutz <mwc-icon style="color: green;">check</mwc-icon></li>
                        <li>Baustellenüberwachung <mwc-icon style="color: green;">check</mwc-icon></li>

                        
                        </ul>

                        <a href="/dienstleistungen" style="text-decoration: none; text-align: center;"><mwc-button raised label="Unsere Dienste"></mwc-button></a>

</div>
                
                </div>


            </section>
        
        
        
        
        
        `;
    }
}


customElements.define('home-component', Home);










{/* <section id="services">

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


<img src="../../public/images/IMG_7011.jpg">

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
    
<img src="../../public/images/empfangsdienst_background.jpg">

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
    
<img src="../../public/images/veranstaltungsschutz_background.jpg">

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

</section> */}