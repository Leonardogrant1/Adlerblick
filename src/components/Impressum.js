import {LitElement, css, html} from "lit-element";

class Impressum extends LitElement {


    static get styles(){
        return css`
        

        section {
            display: flex;
            flex-direction: column;
            align-items: center;
            background: rgb(2,0,36);            
            background-color: rgba(255, 215, 0, 0.8);
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

        <h1>Impressum</h1>

        <p>
        <b>Detektei Adlerblick <br/>
Inhaber C.A. Granetto </b>  <br/>
        Biebricher Str. 7f <br/>
55252 Mainz-Kastel <br/>

Mobil: 01520 / 3360001 <br/> 
E-Mail: info@detektei-adlerblick.de <br/>
        </p>



        <main>
        <h2>1. Haftungsausschluss</h2>

<p>

Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder Qualität der bereitgestellten Informationen. 
Haftungsansprüche gegen den Autor, welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt. 
Alle Angebote sind freibleibend und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen. 


</p>


<h2>2. Verweise und Links</h2>

<p>


Bei direkten oder indirekten Verweisen auf fremde Webseiten ("Hyperlinks"), die außerhalb des Verantwortungsbereiches des Autors liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in dem der Autor von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern. 
Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten erkennbar waren. 
Auf die aktuelle und zukünftige Gestaltung, die Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit ausdrücklich von allen Inhalten aller verlinkten /verknüpften Seiten, die nach der Linksetzung verändert wurden. Diese Feststellung gilt für alle innerhalb des eigenen Internetangebotes gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor eingerichteten Gästebüchern, Diskussionsforen, Linkverzeichnissen, Mailinglisten und in allen anderen Formen von Datenbanken, auf deren Inhalt externe Schreibzugriffe möglich sind. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargebotener Informationen entstehen, haftet allein der Anbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist. 


</p>

<h2>3. Urheber- und Kennzeichenrecht</h2>

<p>

Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu beachten, von ihm selbst erstellte Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu nutzen oder auf lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte zurückzugreifen. 
Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen eingetragenen Eigentümer. 
Allein aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass Markenzeichen nicht durch Rechte Dritter geschützt sind! 
Das Copyright für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet. 



</p>


        </main>

        <p>
        <b>Webmaster <br/>
Leonardo Granetto </b>  <br/>
        Tel. 015203360004 <br/>
E-Mail : LeonardoGranetto@gmail.com <br/>
        </p>




        </section>

        
        `;
    }


}

customElements.define("impressum-component", Impressum);