import React, {useEffect, useState} from "react";

const Home = () => {
        <style>
        @import url("https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,600&display=swap");
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@580&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: grid;
  height: 100vh;
  width: 100vw;
  justify-items: center;
  align-items: center;
  font-family: "Cormorant Garamond", serif;
  background: #4e337075;
}

/* .rsvp-container {
  margin: 0 auto;
  height: 98%;
  width: 98%;
  background: #D6D3D4;
  position: relative;
  z-index: 1;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}
.rsvp-container:after {
  content: "";
  position: absolute;
  width: 400px;
  height: 600px;
  left: 50px;
  top: 50px;
  background: #fff;
  z-index: 1;
} */
.rsvp-container {
  content: "";
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: url(../bg.png) no-repeat;
    background-position-x: center;
    background-size: contain;
  z-index: 3;
}

.rsvp-inner-container {
    min-height: 800px;
    position: relative;
    margin-left: 71px;
    z-index: 4;
    width: 74vw;
    top: 130px;
    background-color: #fcfcfc;
    /* margin: auto; */
    border: 2px solid #4e266f;
    border-radius: 5px;
    padding: 16px;
}

h1 {
  font-size: 28px;
  font-weight: semi-bold;
  margin: 30px 0 5px 0;
}

h2 {
    font-size: 3rem;
    margin: 0 0 20px 0;
    font-weight: bold;
    color: #1b0429;
}

fieldset {
  border: 0;
  margin-bottom: 20px;
}
.directions {
    font-family: 'Dancing Script', cursive;
    font-size: 45px;
    text-align: center;
    color: #664987;
    padding-bottom: 30px;
}
.locator {
    padding-bottom: 30px;
    border-bottom: 2px dashed grey;
}
.link {
    font-size: 2rem;
    font-style: italic;
    position: relative;
    bottom: 40px;
    padding-right: 10px;
    color: #7857a5;
    font-weight: bold;
    min-width: 218px;
    display: inline-block;
    width: 62%;
}

/* @media only screen and (min-width: 600px) {
    .rsvp-inner-container {
    position: relative;
    z-index: 4;
    width: 80vw;
    top: 130px;
    background-color: #fcfcfc;
    margin: auto;
    border: 2px solid #4e266f;
    border-radius: 5px;
    padding: 16px;
  }
} */


    </style>
    <body>
        <div class="rsvp-container">
            <div class="rsvp-inner-container">
              <h1 class="directions">
                -- Directions --
              </h1>
              <div class="locator">
                <h2>
                    Nuptails
                 </h2>
                 <a href="https://goo.gl/maps/YTtpCRBQhNsoVSvv7" class="link">Holy Family Church, Marcela</a>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1952956.9362898069!2d72.82157474346103!3d17.0545932077311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfbdcbae377041%3A0x9dd4fbec30b9d6d1!2sHoly%20Family%20Church%20Marcela!5e0!3m2!1sen!2sin!4v1668093745794!5m2!1sen!2sin" width="200" height="100" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div class="locator">
                <h2>
                    Reception
                 </h2>
                 <a href="https://goo.gl/maps/3zzhWzc2MmKijWAm6" class="link">The Caves, Azossim</a>
                 <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.3661706936614!2d73.91814401517605!3d15.464723859460419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb94a230ef951%3A0xe212c4a6cd2208d0!2sThe%20Caves!5e0!3m2!1sen!2sin!4v1668094572209!5m2!1sen!2sin" width="200" height="100" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
              
            </div>
          </div>
    </body>
}

export default Home
