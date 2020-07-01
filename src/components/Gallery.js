import {LitElement, css, html} from "lit-element";

import "./reusable/image-gallery";



const images = [
    {src: "../../public/gallery-images/image1.jpg", alt: "Bild 1"},
    {src: "../../public/gallery-images/image2.jpg", alt: "Bild 2"},
    {src: "../../public/gallery-images/image3.jpg", alt: "Bild 3"},
    {src: "../../public/gallery-images/image4.jpg", alt: "Bild 4"},
    {src: "../../public/gallery-images/image5.jpg", alt: "Bild 5"},
    {src: "../../public/gallery-images/image6.jpg", alt: "Bild 6"},
    {src: "../../public/gallery-images/image7.jpg", alt: "Bild 7"},
    {src: "../../public/gallery-images/image8.jpg", alt: "Bild 8"},
    {src: "../../public/gallery-images/image9.jpg", alt: "Bild 9"},
    {src: "../../public/gallery-images/image10.jpg", alt: "Bild 10"},
    {src: "../../public/gallery-images/image11.jpg", alt: "Bild 11"},
    {src: "../../public/gallery-images/image12.jpg", alt: "Bild 12"},
    {src: "../../public/gallery-images/image13.jpg", alt: "Bild 13"},
    {src: "../../public/gallery-images/image14.jpg", alt: "Bild 14"},
    {src: "../../public/gallery-images/image15.jpg", alt: "Bild 15"},
    {src: "../../public/gallery-images/image16.jpg", alt: "Bild 16"}
];

class Gallery extends LitElement {

    static get styles(){
        return css`
        
        section {
            width: 100%;
            height: auto;
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

        .logo-wrapper {
            width: 100%;
            height: 600px;
            display: flex;
            justify-content: center;
            position: static;
            border-sizing: border-box;
            

        }

        

            .logo-wrapper > #background {
                width: 100%;
                height: inherit;
                position: absolute;
                z-index: 1;
                opacity: 0.6;
                object-fit: cover;
                
            }
           

        @media only screen and (max-width: 780px){
            section > h1 { 
                font-size: 5vw;
            }
          }


          #below-logo-text {
            width: inherit;
            padding: 60px 40px;
            box-sizing: border-box;
            background-color: black;
            color: white;
            z-index: 2;
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

        @media only screen and (max-width: 1113px){
            #below-logo-text > h1 { 

                font-size: 3vw;
            }

            #background {
                object-position: 50% 50%;
                
            }
        }
        
        `;
    }

    render(){


        

        return html`
        
        <section>

        <h1>Bildergalerie</h1>

        <div class="logo-wrapper">
            <img id="background" src="../../public/images/IMG_7000.jpg"/>
            

            <div id="below-logo-text">
        
        <h1>Werfen Sie einen Blick auf unsere Galerie.</h1>
        
        </div>

        </div>

        <image-gallery .images=${images}></image-gallery>

        </section>

        `
    }
}

customElements.define("gallery-component", Gallery);