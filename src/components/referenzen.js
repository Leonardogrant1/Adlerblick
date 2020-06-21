import {LitElement, css, html} from "lit-element";
import "@material/mwc-button";
import "./reusable/image-slider";









const karstadt = html`



<p>Für diese Marke sind wir schon seit langem tätig und können uns dort durch langjährige Arbeit, gerade durch den Geschäftsführer auf Erfahrung berufen. <br /> 
Auch größere Events von Stars bei Vorführungen, Autogrammstunden und Präsentationen sichern wir natürlich ab.</p>





`;


const perfetto = html`



<p>Gerade im Bereich Lebensmittel, mit vielen kleinen Produkten und Möglichkeiten des Diebstahles sind wir sensibilisiert und achten penibel auf verdächtige Personen.</p>





`;


const leBuffet = html`



<p>Im Restaurantbereich sind wir auch schon seit Jahren tätig und können dort auf Erfahrung setzen. <br />
Im Restaurant- und Gastronomiebereich kommt es leider auch vor, dass man ungebetene Gäste oder auch Zechpreller zu Besuch bekommt. <br />
Hier haben wir ein wachsames Auge auf verdächtige Personen um den Schaden oder auch eine Störung zu verhindern.</p>





`;


const dinnerForYou = html`



<p>Für größere Veranstaltungen im privaten oder öffentlichen Bereich sowie bei Firmen und Messen stellen wir zum Beispiel durch Zugangskontolle und Präsenz in Abstimmung mit dem jeweiligen Veranstalter die gewünschte Sicherheit her.</p>





`;







class Referenzen extends LitElement {


    static get styles(){
        
        return css`

        
        section {
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

        section > div {
            width: 100%;
            height: 700px;
            padding: 40px 80px;
            box-sizing: border-box;
            display: flex;
            

            
            
        }

        section > div > img {
            position: absolute;
            width: 40%;
            height: auto;
            z-index: 4;
            opacity: 0.8;
            display: inline-flex;
            margin: 20px;
            right:0;
            align-self: center;
            

        }

        section > div > p {
            font-size: 2.0em;
            position: relative;
            z-index: 5;
            padding-left: 50px;
            width: 50%;
            margin: 0;
            align-self: center;
            line-height: 1.5;
            font-family: 'Comfortaa', sans-serif;
            border-left: 8px solid rgb(255,	215, 0, 0.8);
        }


        
        `;
        
    }

    static get properties(){
        return {
            current: { type: String }
        }
    }



    constructor(){
        super();
        this.current = "Karstadt";

        this.changeCurrent = this.changeCurrent.bind(this);
    }


    changeCurrent(counter){

        switch(counter){
            case 0:
            this.current = "Dinner For You";
            console.log(this.current);
            break;
            case 1: 
            this.current = "Karstadt";
            console.log(this.current);
            break;
            case 2:
            this.current = "Karstadt Lebensmittel";
            console.log(this.current);
            break;
            case 3: 
            this.current = "Le Buffet";
            console.log(this.current);
            break;
            case 4: 
            this.current = "Dinner For You";
            console.log(this.current);
            break;
            case 5: 
            this.current = "Karstadt";
            console.log(this.current);
            break;
        }

    }


    firstUpdated(){
        this.shadowRoot.addEventListener('current-changed', event => {
            console.log(event.detail)
            this.changeCurrent(event.detail);
        })
    }


    loadCurrentText(){
        switch(this.current){
            case "Karstadt": 
            return karstadt;
            
            case "Karstadt Lebensmittel":
            return perfetto;

            case "Le Buffet":
            return leBuffet;

            case "Dinner For You":
            return dinnerForYou;
        }
    }



    render(){
        return html`
        
        <section>

        <h1>Referenzen</h1>

            <image-slider  change-current="$"></image-slider>


            <h1>${this.current}</h1>

            <div> 

                <img src="../../public/images/logo.png" />
            
                ${this.loadCurrentText()}
            
            
            
            </div>


        
        </section>

        
        
        
        `;
    }
}

customElements.define('referenzen-component', Referenzen);