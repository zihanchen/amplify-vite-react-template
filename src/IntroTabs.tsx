// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";

function IntroTabs() {

  function openTab(evt, tabName) {
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
    document.getElementById(tabName)!.style.display = "block";
    evt.currentTarget.className += " active";
  }

  return (
    <main>
      <h1> Zihan Chen </h1>
      <div className="tab">
        <button className="tablinks" onClick={() => openTab(event, 'Experience')}>Experience</button>
        <button className="tablinks" onClick={() => openTab(event, 'Education')}>Education</button>
        <button className="tablinks" onClick={() => openTab(event, 'Research')}>Research</button>
      </div>

      <div id="Experience" className="tabcontent" style={{display: "block"}}>
        <h1>Amazon</h1>
        <h4>2022, Sep - 2024, June</h4>
        <h3>Software Engineer</h3>
        <p>- Responsible for maintaining data propagation and transformation service, performing oncall duties</p>
        <p>- Worked on history offload and unified propagation, which releases around 50% of the memory space in database</p>
        <p>- Developed self-service for Data Extraction requests, reduce manual requests by 80%</p>

        <h1>Coinbase</h1>
        <h4>2022, Feb - 2022, June</h4>
        <h3>Software Engineer</h3>
        <p>- Responsible for maintaining data propagation and transformation service, performing oncall duties</p>
        <p>- Worked on history offload and unified propagation, which releases around 50% of the memory space in database</p>
        <p>- Developed self-service for Data Extraction requests, reduce manual requests by 80%</p>

        <h1>Coherent Logix</h1>
        <h4>2018, May - 2018, Sep</h4>
        <h3>Software Engineer</h3>
        <p>- Embed trained neural networks on low power consumption chips</p>
        <p>- Add quantization to the net parser to improve performance by around 15%</p>
        <p>- Widen the types of networks that can be processed</p>

        <h1>Avidbots</h1>
        <h4>2017, Sep - 2017, Dec</h4>
        <h3>Software Engineer</h3>
        <p>- Implement path planning algorithms for robots on ROS, adding A-star algorithm to the planning module</p>
        <p>- Build new KPI for robots to measure performances, adding more data from sensor to improve evaluations for robots</p>
        <p>- Built data pipeline for aggregating data from deployed robot</p>

      </div>

      <div id="Education" className="tabcontent" style={{display: "none"}}>
        <h1>University of Waterloo</h1>
        <h4>2019, June - 2021, Dec</h4>
        <p>Master of Mathematics - Computer Science</p>
        <h3>Courses</h3>
        <p>CS 854 - Advance Topics in Computer Science: IoT & Intelligent Connectivity</p>
        <p>CS 798 - Advanced Research Topics: Network Softwarization</p>
        <p>CS 680 - Introduction to Machine Learning</p>
        <p>CS 885 - Advanced Topics in Computer Science: Reinforcement Learning</p>

        <h1>University of Waterloo</h1>
        <h4>2014, Sep - 2019, May</h4>
        <p>Bachelor or Mathematics - Honours Computer Science & Honours Statistics with Computational Math Minor</p>

        <h3>Highlighted Courses</h3>
        <p>CS 246 - Object-Oriented Software Developed</p>
        <p>CS 240 - Data Structure and Data Managemenet</p>
        <p>CS 241 - Foundation of Sequential Programs</p>
        <p>CS 350 - Operating Systems</p>
        <p>STAT 341 - Computational Statistics & </p>
        <p>CS 365 - Models of Computation</p>
        <p>CS 343 - Concurrent and Parallel Programming</p>
        <p>CS 454 - Distributed System</p>
        <p>CS 450 - Computer Architecture</p>
        <p>CS 456 - Computer Networks</p>
        <p>CS 486 - Introduction to Artificial Intelligence</p>
        <p>CO 487 - Applied Cryptography</p>
      </div>

      <div id="Research" className="tabcontent" style={{display: "none"}}>
        <h1>Polite Wifi Sensing</h1>
        <h4>2020, May - 2021, Sep</h4>
        <p>Discover that private wifi network where IoT devices inside will respond to potentially malicious attacker </p>
        <p>and detecting breath rate of people near target device by processing CSI info from responding packets.</p>
        <p>Paper Reference: <a href="https://dspacemainprd01.lib.uwaterloo.ca/server/api/core/bitstreams/6c2877e0-7c01-4810-bba7-74a3e7e27ffc/content">Link</a></p>

        <h1>VIVA: Road Condition Sensing Using Wireless Signals</h1>
        <h4>2019, June - 2020, Apr</h4>
        <p>Discovers that millimeter wave(mmWave) is able to enable robust and practical road sensing for road conditions.</p>
        <p>Combining the mmWave radar with a machine learning algorithm, we trained a model that can detect the roughness of </p>
        <p>the road, which can be used to detect the road condition.</p>
        <p>Paper Reference: <a href="https://mobisys20.hotcrp.com/doc/mobisys20-paper213.pdf?cap=0213a1iBFyBH1Pys">Link</a></p>
      </div>
    </main>
  )
}

export default IntroTabs;
