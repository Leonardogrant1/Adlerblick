import {LitElement, css, html} from "lit-element";

class Datenschutz extends LitElement {


    static get styles(){
        return css`
        
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color:  rgba(255, 215, 0, 0.8);
        }

        h1 {
            font-family: "Comfortaa", sans-serif;
            text-align: center;
            font-size: 2.5vw;
        }

        p {
            text-align: center;
            font-family: "Roboto", sans-serif;
        }

        main {
            width: 50%;
            min-width: 400px;

        }

        main h2 {
            font-family: "Comfortaa", sans-serif;
        }

        main p {
            text-align: start;
            line-height: 1.5;
        }

        @media only screen and (max-width: 1115px){
            h1 {
                font-size: 30px;
            }


        }
        
        
        `;
    }

    render(){
        
        
        return html`
        


        <section>

<h1>Datenschutz</h1>





<main>
<h2>Erhebung und Verarbeitung persönlicher Daten</h2>

<p>

Auf einzelnen Seiten des Internetauftritts wird der Nutzer direkt um die Eingabe personenbezogener Daten gebeten. Wenn die Möglichkeit zur Eingabe persönlicher oder geschäftlicher Daten wie E-Mail-Adressen, Namen, Anschriften usw. besteht, so erfolgt die Preisgabe dieser Daten seitens des Nutzers auf ausdrücklich freiwilliger Basis. Ohne Angabe dieser Daten sind die dort angebotenen Dienste nicht realisierbar. Die angegebenen Daten werden von der Detektei Adlerblick vertraulich behandelt und nicht an Dritte weitergegeben.

</p>


<h2>Nutzung und Weitergabe persönlicher Daten</h2>

<p>


Die personenbezogenen Informationen werden nur innerhalb der Detektei Adlerblick verwendet und nicht an Dritte weitergegeben. Die Detektei Adlerblick weiß das entgegengebrachte Vertrauen zu schätzen und wendet äußerste Sorgfalt an, um personenbezogenen Angaben zu schützen.

</p>

<h2>Automatisch erhobene Daten</h2>

<p>

Bei jedem Zugriff eines Nutzers auf einzelne Seiten des Internetauftritts und bei jedem Abruf einer Datei werden Daten über diesen Vorgang in einer Protokolldatei gespeichert. Diese Daten sind nicht personenbezogen (verwendeter Internet-Browser, Anzahl der Seitenzugriffe, Verweildauer auf einzelnen Seiten des Internetauftritts) und werden von der Detektei Adlerblick ausschließlich dazu verwendet, das Online-Angebot in inhaltlicher und funktionaler Hinsicht attraktiver zu machen. Die automatisch erhobenen Informationen werden nur innerhalb der Detektei Adlerblick verwendet und nicht an Dritte weitergegeben.


</p>


<h2>Sicherheit</h2>

<p>

Wir treffen Vorkehrungen, um personenbezogene Daten vor Verlust, Zerstörung, Verfälschung, Manipulation und unberechtigten Zugriff zu schützen. Wir weisen darauf hin, dass Die Übertragung der Daten im Internet ungesichert erfolgt und damit die Gefahr bestehen kann, dass Dritte diese Daten abfangen und verwenden können. Daten können daher stets auch telefonisch und postalisch mitgeteilt werden.

Bei Fragen oder Anmerkungen zum Datenschutz bei <a href="/">www.detektei-adlerblick.de</a> wenden Sie sich bitte an uns!

</p>


</main>

<p>
<b>Detektei Adlerblick <br/>
Inhaber C.A. Granetto </b>  <br/>
Biebricher Str. 7f <br/>
55252 Mainz-Kastel <br/>

Mobil: 01520 / 3360001 <br/> 
E-Mail: info@detektei-adlerblick.de <br/>
</p>




</section>

        
        `;
    }


}

customElements.define("datenschutz-component", Datenschutz);