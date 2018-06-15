import React from "react";
import { Parallax } from 'react-parallax';
import Navbar from "../components/Navbar_1";

const styles = {
  fontFamily: 'Roboto, sans-serif',
  textAlign: 'center',
};
const insideStyles = {color: 'white', padding: 20, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)'};
// const image1="http://squawalpine.com/sites/default/files/styles/large/public/multiple_medias/media_family-reunion-HC.jpg?itok=Q5NLI7rv";
const image2="https://healthyforgood.heart.org/-/media/aha/h4gm/article-images/familymealsmonth.jpg?as=1&iar=1&mw=640&hash=03F271251556E950804A3BBEFD5544561EC516FF";
const foods="https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_8211_87238.jpg";

const About = () => (
  <div style={styles}>
    
    <Navbar />

    <Parallax
      blur={{min:0, max:5}}
      bgImage={foods}
      bgHeight={'100%'}
      bgwidth={'auto'}
      strength={150}
    >
      <div style={{height: 300}}>
        <div style={insideStyles}>
          <p class="welcome welcome1">Ancestry*dot*Nom</p>
          <p class="welcome welcome2">Where families meet to share recipes</p>
        </div>
      </div>
      <div style={{ height: '500px' }} />
    </Parallax>

    <section className="copy-body section section-dark">
      <h1>Welcome To AncestryDotNom!</h1>
      <p>
        AncestyDotNom is a place where families can share and preserve recipes.  Remember Grandma's Thanksgiving relish?  Let's preserve that recipe here.  Your cousin remembers there being more orange zest in it?  She can do that because 'a little too much' has always been her defining trait, right?  Your Uncle Bob has been bragging about the best damn grilled chicken ever?  Let's share.  Who remembers Aunt Betty's Jello salad with shaved carrots, cottage cheese and sliced green olives?  Should we make that recipe available for future generations?  Maaaybe....  You decide because this is your family cookbook!
      </p>
    </section>

    <Parallax 
      bgImage={image2}
      strength={75}
      bgHeight={'100%'}
      bgwidth={'auto'}
      >
      <div style={{ height: '700px'}} />
      <ul style={{ padding: 20, position: 'absolute', top: '70%', left: '50%', transform: 'translate(-50%,-50%)' }}>
        <li>
          <a href="/login" className="border btn">Login</a>
        </li>
        <li>
          <a href="/signup" className="border btn">Register</a>
        </li>
        <li>
          <a href="https://www.urbandictionary.com/define.php?term=Noms" className="border btn">What the heck does NOM mean?</a>
        </li>
      </ul>
    </Parallax>

  </div>
);

export default About;
