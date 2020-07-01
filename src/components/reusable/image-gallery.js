import {LitElement, css, html} from "lit-element";
import "@material/mwc-icon";


class ImageGallery extends LitElement {


    static get styles(){
        
        return css`

        .PhotoGallery {
            width: 100%;
            height: auto;
        }
        
        .PhotoGallery-list {
            
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            box-sizing: border-box;

            
        }

        .PhotoGallery-list > div {
            height: 300px;
            display: inline-flex;
            cursor: pointer;
            width: calc(25% - 80px);
            
            margin: 50px;

        }


        .PhotoGallery-list > div div {

            width: 100%;
            height: 100%;
            position: relative;
            
            overflow: hidden;

        }

        .PhotoGallery-list img {

            position: absolute;
            overflow: hidden;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            object-fit: cover;
            transform: scale(1);
            transition: transform 0.2s ease-out;   

        }

        .PhotoGallery-list > div:hover img {

            transform: scale(1.1);
            

        }

        @media only screen and (max-width: 1200px){

            

            .PhotoGallery-list > div {
                width: calc(33.33% - 70px) !important;
                height: 200px;
                margin: 60px;
            }


        }



        @media only screen and (max-width: 768px){

            

            .PhotoGallery-list > div {
                width: calc(80% - 40px) !important;
                height: 300px;
                margin: 60px;
            }


        }














        .PhotoGallery-preview {

            z-index: 10;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;



        }

        .PhotoGallery-preview img {
            z-index: 12;
            max-height: calc(100% - 300px);
            max-width: calc(100% - 300px);


        }


        .PhotoGallery-preview div {

            z-index: 11;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgb(0, 0, 0, 0.8);


        }


        .PhotoGallery-preview mwc-icon {
            z-index: 20;
            cursor: pointer;
            user-select: none;
            opacity: 0.5;
            transition: opacity 0.2 ease-out;
            color: white;
            font-size: 80px;


        }

        .PhotoGallery-preview mwc-icon:hover {

            opacity: 1;



        }



        @media only screen and (max-width: 1200px){

            .PhotoGallery-preview img {
                max-width: calc(100% - 210px);
                max-height: calc(100%- 210px);
            }

            .PhotoGallery-preview mwc-icon {
               
                
            }


        }



        @media only screen and (max-width: 768px){

            .PhotoGallery-preview img {
                max-width: calc(100% - 140px);
                max-height: calc(100%- 120px);
            }

            .PhotoGallery-preview mwc-icon {
                
                
            }


        }
        
        
        
        `;
    }


    static get properties(){
        return {
            images: Array,
            preview: Object
        }
    }


    constructor(){
        super();
        this.preview = null;
        this.images = [];
    }


    


    changePreview(index){

        if(index >= this.images.length){
            index = 0;
        }

        if(index < 0){
            index = this.images.length -1;
        }


        this.preview = {
            ...this.images[index],
            index
        }
    }

    // ${!this.preview ? html`
    // ` : ''}

    render(){

        console.log(this.preview);

        return html`
        
        <div class="PhotoGallery">


        ${this.preview !== null ? html`
        
        <div class="PhotoGallery-preview" >

        ${console.log("rendered")}
        
        <mwc-icon @click=${() => this.changePreview(this.preview.index - 1)}>navigate_before</mwc-icon>
        <img src="${this.preview.src}" alt="${this.preview.alt}" />
        <mwc-icon @click="${() => this.changePreview(this.preview.index + 1)}">navigate_next</mwc-icon>
        <div @click="${() => this.preview = null}"> </div>
        </div>
        
        
        
        ` : ''}



        <div class="PhotoGallery-list">
         ${this.images.map((photo, index) => {
             return html`
             
             <div @click="${() => this.changePreview(index)}">

            <div>
             <img src="${photo.src}" alt="${photo.alt}"/>
            </div>

             </div>
             
             `;
         })}
        </div> 
        
        </div>
        
        `;
    }
    

}


customElements.define("image-gallery", ImageGallery);