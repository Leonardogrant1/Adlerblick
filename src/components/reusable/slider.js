import {LitElement, css, html} from "lit-element";
import "@material/mwc-icon";

class Slider extends LitElement {


   /* static get styles(){
        return css`
        
        
    
        #slider {
            margin: 0 auto;
            width: 100%;
            max-width: 100%;
            text-align: center;
        }

        #slider input[type=radio] {
            display: none;
        }

        #slider label {
            cursor: pointer;
            text-decoration: none;
        }

        #slides {
            padding: 10px;
            border: 3px solid #ccc;
            background: #fff;
            position: relative;
            z-index: 1;
        }

        #overflow {

            width: 100%;
            overflow: hidden;

        }

        #slide1:checked ~ #slides .inner {

            margin-left: 0;
        }

        #slide2:checked ~ #slides .inner {

            margin-left: -100%;
        }

        #slide3:checked ~ #slides .inner {

            margin-left: -200%;
        }

        #slide4:checked ~ #slides .inner {

            margin-left: -300%;
        }

        #slides .inner {
            transition: margin-left 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
            width: 400%;
            line-height: 0;
            height: 600px;
        }

        #slides .slide {
            width: 25%;
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            color: #fff;
        }

        #slides .slide_1 {
            background: green;
        }

        #slides .slide_2 {
            background: #003459;
        }

        #slides .slide_3 {
            background: #007EA7;
        }

        #slides .slide_4 {
            background: #00A8E8;
        }

        

        #controls {
            margin: -330px 0 0 0;
            width: 100%;
            height: 50px;
            z-index: 3;
            position: relative;
            
        }

        #controls label {
            transition: opacity 0.2 ease-out;
            display: none;
            width: 50px;
            height: 50px;
            opacity: .4;
        }

        #controls label:hover {
            opacity: 1;
        }

        #slide1:checked ~ #controls label:nth-child(2),
        #slide2:checked ~ #controls label:nth-child(3),
        #slide3:checked ~ #controls label:nth-child(4),
        #slide4:checked ~ #controls label:nth-child(1) {

            background: url("https://image.flaticon.com/icons/svg/130/130884.svg") no-repeat;
            float: right;
            margin: 0 0 0 0;
            display: block;


        }


        #slide1:checked ~ #controls label:nth-last-child(2),
        #slide2:checked ~ #controls label:nth-last-child(3),
        #slide3:checked ~ #controls label:nth-last-child(4),
        #slide4:checked ~ #controls label:nth-last-child(1) {

            background: url("https://image.flaticon.com/icons/svg/130/130882.svg") no-repeat;
            float: left;
            margin: 0 0 0 0;
            display: block;


        }

        #bullets {
            margin: 100px 0 0;
            text-align: center;
        }

        #bullets label {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background: #ccc;
            margin: 0 10px;
        }

        
        #slide1:checked ~ #bullets label:nth-child(2),
        #slide2:checked ~ #bullets label:nth-child(3),
        #slide3:checked ~ #bullets label:nth-child(4),
        #slide4:checked ~ #bullets label:nth-child(1) {
           
            background: #444;
            
        }

        @media screen and (max-width: 900px) {
            #slide1:checked ~ #controls label:nth-child(2),
            #slide2:checked ~ #controls label:nth-child(3),
            #slide3:checked ~ #controls label:nth-child(4),
            #slide4:checked ~ #controls label:nth-child(1) {

            margin: 0;


            }

            
            #slide1:checked ~ #controls label:nth-last-child(2),
            #slide2:checked ~ #controls label:nth-last-child(3),
            #slide3:checked ~ #controls label:nth-last-child(4),
            #slide4:checked ~ #controls label:nth-last-child(1) {
    
                margin: 0;
    
    
            }



        }
        

        
        
        
        `;
    }   */




    static get styles(){
        return css`
        
        
    
        #slider {
            margin: 0 auto;
            width: 100%;
            height: 600px;
            max-width: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
            box-sizing: border-box;

        }

        #slider input[type=radio] {
            display: none;
        }

        #slider label {
            cursor: pointer;
            text-decoration: none;
        }

        #slides {
            
            border: 3px solid #ccc;
            background: #fff;
            width: inherit;
            height: inherit;
            position: absolute;
            z-index: 1;
            box-sizing: border-box;

        }

        #overflow {

            width: inherit;
            height: inherit;
            overflow: hidden;

        }

        #slide1:checked ~ #slides .inner {

            margin-left: 0;
        }

        #slide2:checked ~ #slides .inner {

            margin-left: -100%;
        }

        #slide3:checked ~ #slides .inner {

            margin-left: -200%;
        }

        #slide4:checked ~ #slides .inner {

            margin-left: -300%;
        }

        #slides .inner {
            transition: margin-left 800ms cubic-bezier(0.770, 0.000, 0.175, 1.000);
            width: 400%;
            line-height: 0;
            height: inherit;
        }

        #slides .slide {
            width: 25%;
            float: left;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            color: #fff;
        }

        #slides .slide_1 {
            background: green;
        }

        #slides .slide_2 {
            background: #003459;
        }

        #slides .slide_3 {
            background: #007EA7;
        }

        #slides .slide_4 {
            background: #00A8E8;
        }

        

        #controls {
            
            
            width: 100%;
            height: 50px;
            z-index: 3;
            position: absolute;
            align-self: center;
            
        }

        #controls label {
            transition: opacity 0.2 ease-out;
            display: none;
            width: 50px;
            height: 50px;
            opacity: .4;
        }

        #controls label:hover {
            opacity: 1;
        }

        #slide1:checked ~ #controls label:nth-child(2),
        #slide2:checked ~ #controls label:nth-child(3),
        #slide3:checked ~ #controls label:nth-child(4),
        #slide4:checked ~ #controls label:nth-child(1) {

            background: url("https://image.flaticon.com/icons/svg/130/130884.svg") no-repeat;
            float: right;
            margin: 0 0 0 0;
            display: block;


        }


        #slide1:checked ~ #controls label:nth-last-child(4),
        #slide2:checked ~ #controls label:nth-last-child(1),
        #slide3:checked ~ #controls label:nth-last-child(3),
        #slide4:checked ~ #controls label:nth-last-child(2) {

            background: url("https://image.flaticon.com/icons/svg/130/130882.svg") no-repeat;
            float: left;
            margin: 0 0 0 0;
            display: block;


        }







        

        #bullets {
            margin: 0;
            text-align: center;
            position: absolute;
            align-self: flex-end;
            z-index: 4;
            
        }

        #bullets label {
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background: #ccc;
            margin: 0 10px;
        }

        
        #slide1:checked ~ #bullets label:nth-child(2),
        #slide2:checked ~ #bullets label:nth-child(3),
        #slide3:checked ~ #bullets label:nth-child(4),
        #slide4:checked ~ #bullets label:nth-child(1) {
           
            background: #444;
            
        }

        @media screen and (max-width: 900px) {
            #slide1:checked ~ #controls label:nth-child(2),
            #slide2:checked ~ #controls label:nth-child(3),
            #slide3:checked ~ #controls label:nth-child(4),
            #slide4:checked ~ #controls label:nth-child(1) {

            margin: 0;


            }

            
            #slide1:checked ~ #controls label:nth-last-child(2),
            #slide2:checked ~ #controls label:nth-last-child(3),
            #slide3:checked ~ #controls label:nth-last-child(4),
            #slide4:checked ~ #controls label:nth-last-child(1) {
    
                margin: 0;
    
    
            }



        }
        

        
        
        
        `;
    }



    render(){
        return html`
        
        <div id="slider">
        
        <input type="radio" name="slider" id="slide1" checked>
        <input type="radio" name="slider" id="slide2" checked>
        <input type="radio" name="slider" id="slide3" checked>
        <input type="radio" name="slider" id="slide4" checked>

            <div id="slides">
            
                <div id="overflow">

                    <div class="inner">
                        
                        <div class="slide slide_1">

                            <div class="slide-content">
                            
                                <h2>Slide 1</h2>
                                <p>Content for Slide 1</p>
                            
                            </div>    
                        
                        
                        </div>

                        <div class="slide slide_2">

                            <div class="slide-content">
                            
                                <h2>Slide 2</h2>
                                <p>Content for Slide 2</p>
                            
                            </div>    
                        
                        
                        </div>

                        <div class="slide slide_3">

                            <div class="slide-content">
                            
                                <h2>Slide 3</h2>
                                <p>Content for Slide 3</p>
                            
                            </div>    
                        
                        
                        </div>


                        <div class="slide slide_4">

                            <div class="slide-content">
                            
                                <h2>Slide 4</h2>
                                <p>Content for Slide 4</p>
                            
                            </div>    
                        
                        
                        </div>
                    
                    </div>
                
                
                </div>
            
            
            </div>

            <div id="controls">

                <label for="slide1"></label>
                <label for="slide2"></label>
                <label for="slide3"></label>
                <label for="slide4"></label>
            
            
            </div>

            <div id="bullets">

                <label for="slide1"></label>
                <label for="slide2"></label>
                <label for="slide3"></label>
                <label for="slide4"></label>
            
            
            </div>





        </div>
        
        
        
        `;
    }
}

customElements.define('slider-component', Slider);