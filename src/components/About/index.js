import React, {useEffect} from 'react';




function About() {

    
function componentDidMount () {
    const script = document.createElement("script");
    script.src = "../../assets/JS/index.js";
    script.async = true;
    document.body.appendChild(script);
}

    return (

    <div className="aboutmecontentflex">
        <div className="mypic"></div>

        <div className="aboutmetextflex">
          A little bit about me. I was born in Redwood City California. Over the course of my life.
           I have had the opportunity to work around the country. I am a passionate individual that loves life. 
           I have a strong work ethic, and emphasize an out of the box style approach to problem solving. I enjoy being creative.
            I bring a vast and diverse set of experience and expertise. For the past 5 years, I have been in supervisor and management positions. 
            I am a great team player, and love to collaborate with others I also enjoy tackling projects solo. As the above statement says,
             I am looking for a reputable company that shares my desire to strive for excellence.  
        </div>

        <ul className="hobbielisttext"><strong>Somethings that I enjoy</strong>
                <li> I have a passionate for music</li>

                I play The Ukulele, and The Guitar.
                <strong> Click on one the thumb nails below.</strong>

                <div class="hobbieiconflex">

                  <div id="playukulele" className="ukulele"></div>
                  <div id="playguitar" className="Guitar"></div>
                  
              
              </div>

              <li>I love spending time with Family and Friends</li>

              <li>Museums and landmarks are always trips I enjoy</li>

              <li>I am a huge fan of Sushi</li>
              
              <li>I also enjoy exploring, and learning new technologies</li>

            </ul>

            <script src ="../../assets/JS/index.js"> </script>
    </div>
     

    )

}


export default About