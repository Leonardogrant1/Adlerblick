import {LitElement, css, html} from "lit-element";
import "jquery";
import "@material/mwc-button";
import "@material/mwc-textfield";
import "@material/mwc-textarea";



class Anfragen extends LitElement {

    static get styles(){
        return css`
        
       
        section {
            width: 100%;
            height: 1400px;
            

        }

        .background-wrapper {
            width: 100%;
            height: inherit;
            position: absolute;
        }

        #background {

            width: inherit;
            height: inherit;
            object-fit: cover;
            object-position: 100% 100%;
            opacity: 0.9;
            
        }

        .contact-us-wrapper {

            width: 100%;
            height: inherit;
            position: relative;
            background-color: rgba(242, 195, 29, 0.3);
            display: inline-flex;

            justify-content: center;

        }

        .contact-us {
            height: auto;
            width: 40%;
            align-self: center;
            min-width: 345px;

        }


        form {
            display: flex;
            flex-direction: column;
            
        }

        h1 {
            font-size: 5vw;
            font-family: "Comfortaa", sans-serif;
            text-align: center;
        }

        p {
            font-size: 30px;
            font-family: "Comfortaa", sans-serif;
            text-align: center;
        }

        form > div {
            display: inline-flex;
            margin: 30px 0px;
            
            
        }

        form > div > input {

          flex-grow: 1;
          margin: 20px 5px;
        } 

        input ,textarea {
            margin: 30px 0px;
            padding: 10px;
            
            font-family: 'Roboto', sans-serif;

           
        }

        textarea {
          
          min-height: 100px;
         
      }

      button {
            
        width: 200px;
        background-color: black;
        color: rgba(242, 195, 29, 0.8);
        border: 0;
        border-radius: 5%;
        padding: 10px 5px; 
        cursor: pointer;
        transition: transform .2s;
        font-size: 16px;
      }

      button:hover {
       
        --mdc-theme-on-primary: white;
        transform: scale(1.1);
        

      }


@media only screen and (max-width: 750px){

    h1 {
        font-size: 45px;
    }
   
    form > div {
        
        flex-wrap: wrap;
        
        
    }
    

    

    
    

}

          
      
        
        `;
    }


    

    render(){
        return html`
        
        <section>


<div class="background-wrapper">
        <img id="background" src="../../public/images/background_contact.jpg"/>
</div>

        <div class="contact-us-wrapper">
        
        <div class="contact-us">
            <h1>Kontaktieren Sie uns</h1>
            <p>Schreiben Sie uns an wenn Sie Fragen haben. Wir melden uns so schnell es geht bei Ihnen.</p>
        
        
            <div class="form">

            
<form id="form" action="contact_us.php" method="POST">


<div>
<input
  type="text"
  placeholder="Name"
  id="Name"
  name="Name"
  required
  >

<input 
  type="text"
  placeholder="Vorname"
  id="Vorname"
  name="Vorname"
  required
  >

</div>



<input
type="email"
placeholder="Email"
id="Email"
name="Email"
required>

<input
type="Betreff"
placeholder="Betreff"
id="Betreff"
name="Betreff"
required>

<textarea

placeholder="Anfrage"
id="Anfrage"
name="Anfrage"
required
></textarea>          







<button type="submit" name="submit">ABSENDEN</button>

</form>





</div>
        
        
        
        </div>
        
        
        </div>

        </section>


        
        `;
    }

}

customElements.define('anfragen-component', Anfragen);
