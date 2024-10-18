// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";

function IntroTabs() {

  function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName)!.style.display = "block";
    evt.currentTarget.className += " active";
  }

  return (
    <main>
      <h1> Zihan Chen </h1>
      <div className="tab">
        <button className="tablinks" onClick={() => openCity(event, 'Experience')}>Experience</button>
        <button className="tablinks" onClick={() => openCity(event, 'Education')}>Education</button>
        <button className="tablinks" onClick={() => openCity(event, 'Others')}>Others</button>
      </div>

      <div id="Experience" className="tabcontent">
        <h1>Amazon</h1>
        <h3>Software Engineer, Amazon</h3>
        <p>- Responsible for maintaining data propagation and transformation service, performing oncall duties</p>
        <p>- Worked on history offload and unified propagation, which releases around 50% of the memory space in database</p>
        <p>- Developed self-service for Data Extraction requests, reduce manual requests by 80%</p>

        <h1>Coinbase</h1>
        <h3>Software Engineer, Coinbase</h3>
        <p>- Responsible for maintaining data propagation and transformation service, performing oncall duties</p>
        <p>- Worked on history offload and unified propagation, which releases around 50% of the memory space in database</p>
        <p>- Developed self-service for Data Extraction requests, reduce manual requests by 80%</p>

      </div>

      <div id="Education" className="tabcontent">
        <h1>University of Waterloo</h1>
        <p>To be continue</p>
      </div>

      <div id="Others" className="tabcontent">
        <h3>To do</h3>
        <p>Add some other projects</p>
      </div>
    </main>
  )
}

export default IntroTabs;
