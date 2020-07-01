import {LitElement, css, html} from "lit-element";
import "@material/mwc-icon";

class ImageSlider extends LitElement {


    static get styles(){
        
        return css`
        
        
        .carousel-container {
            width: 100%;
            margin: auto;
            border: 1px solid black;
            overflow: hidden;
            box-sizing: border-box;
            display: flex;
            
        }

        .nav-btns {
            position: absolute;
            z-index: 5;
            width: 99%;
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            align-self: center;
        }

        .nav-btns > mwc-icon {
            color: grey;
            opacity: .6;
            font-size: 80px;
            cursor: pointer;
        }
        .nav-btns > mwc-icon:hover {
            
            opacity: 1;
        }
        
        .carousel-slide {
            display: flex;
            width: 100%;
            height: 600px;
        }

        .img-container {
            display: inline-flex;
            
            width: inherit;
            height: auto;
            object-fit: cover;
        }

        .img-container > img {

            width: inherit;
            height: inherit;
            object-fit: cover;
            object-position: 50% 50%;

        }



        

        
        `;
    }


    static get properties(){
        return {
            size: Number,
            counter: Number
        }
    }


    constructor(){
        super();
        this.size = null;
        this.counter = null;
    }



    firstUpdated(){



        //on window size changed listener hinzufügen!

        













        const carouselSlide = this.shadowRoot.querySelector('.carousel-slide');
        const imgContainers = this.shadowRoot.querySelectorAll('.img-container');
        

        window.addEventListener("resize", event => {
            console.log("sdgsdfgs");
            const width = document.body.clientWidth;

            carouselSlide.setAttribute("style", `width:${width}px`);

            imgContainers.forEach( e => {
                //e.setAttribute("style", `width:${width}px`);
                
                e.style.width = `${width}px`;
                
            });


            
            this.size = width;
            

        })
        
        
        
        
        const carouselImages = this.shadowRoot.querySelectorAll('.carousel-slide img');

        const prevBtn = this.shadowRoot.getElementById('prevButton');
        const nextBtn = this.shadowRoot.getElementById('nextButton');

        imgContainers.forEach( e => {
            e.setAttribute("style", `width:${this.shadowRoot.querySelector(".carousel-container").clientWidth}px`);
        })


        this.counter = 1;
        this.size = this.shadowRoot.querySelector(".carousel-container").clientWidth;

    

         carouselSlide.style.transform = 'translateX(' + (-this.size * this.counter) + 'px)';

        nextBtn.addEventListener('click', () => {

            console.log(this.size)

            if(this.counter >= carouselImages.length -1){
                return;
            }

            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            this.counter++;
            
            carouselSlide.style.transform = 'translateX(' + (-this.size * this.counter) + 'px)';

            //dispatch event

            this.dispatchEvent(new CustomEvent('current-changed', {
                detail: this.counter,
                bubbles: true,
                composed: true
            }));

        });

        prevBtn.addEventListener('click', () => {

            if(this.counter <= 0){
                return;
            }

            carouselSlide.style.transition = "transform 0.4s ease-in-out";
            this.counter--;
            console.log(this.shadowRoot.host.clientWidth);
            carouselSlide.style.transform = 'translateX(' + (-this.size * this.counter) + 'px)';


            //dispatch event

            this.dispatchEvent(new CustomEvent('current-changed', {
                detail: this.counter,
                bubbles: true,
                composed: true
            }));


        });

        carouselSlide.addEventListener('transitionend', () => {
            console.log("fired");

            if(carouselImages[this.counter].id === 'lastClone'){
                carouselSlide.style.transition = "none";
                this.counter = carouselImages.length - 2;
                carouselSlide.style.transform = 'translateX(' + (-this.size * this.counter) + 'px)';

            } 

            if(carouselImages[this.counter].id === 'firstClone'){
                carouselSlide.style.transition = "none";
                this.counter = carouselImages.length - this.counter;
                carouselSlide.style.transform = 'translateX(' + (-this.size * this.counter) + 'px)';

            } 
        })
    }


    render(){

        return html`
        
        
        <div class="carousel-container">


                <div class="nav-btns">
                
                <mwc-icon id="prevButton">navigate_before</mwc-icon>
                <mwc-icon id="nextButton">navigate_next</mwc-icon>

                </div>

        
        
            <div class="carousel-slide">

            <div class="img-container"><img src="../../../public/images/dinner-for-you.png" id="lastClone" alt=""/></div>
            <div class="img-container"><img src="../../../public/images/galeria-karstadt-kaufhof-logo.png" alt=""/></div>
            <div class="img-container"><img src="../../../public/images/karstadt-lebensmittel-logo.png" alt=""/></div>
            <div class="img-container"><img src="../../../public/images/le-buffet-logo.png" alt=""/></div>
            <div class="img-container"><img src="../../../public/images/dinner-for-you.png" alt=""/></div>
            <div class="img-container"><img src="../../../public/images/galeria-karstadt-kaufhof-logo.png" id="firstClone" alt=""/></div>

            </div>
        
        
        
        </div>


       
        
        
        `
        
        
        
        ;
    }
}

customElements.define('image-slider', ImageSlider)