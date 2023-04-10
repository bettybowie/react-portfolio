import React from "react";
import LookUp from "../../Assets/images/LookUp.png";
import textEditor from "../../Assets/images/textEditor.png";
import noteTaker from "../../Assets/images/noteTaker.png";
import timedQuiz from "../../Assets/images/timedQuiz.png";
import weatherDashboard from "../../Assets/images/weatherDashboard.png";
import dayPlanner from "../../Assets/images/dayPlanner.png";

export default function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div class="card-group">
        <div class="card">
          <img src={LookUp} class="card-img-top" alt="look up app"></img>
          <div class="card-body">
            <h5 class="card-title">Look Up</h5>
            <p class="card-text">
              Look Up is a destressing social media app where users can create their own profile to post post beautiful pictures of the sky.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary"><a href="https://look-up-project-2.herokuapp.com" target="_blank" rel="noreferrer">View Deployment</a> </small>
            <small class="text-body-secondary"><a href="https://github.com/bettybowie/look-up" target="_blank" rel="noreferrer">View GitHub Repo</a></small>
          </div>
        </div>
        <div class="card">
          <img src={textEditor} class="card-img-top" alt="text editor app"></img>
          <div class="card-body">
            <h5 class="card-title">Text Editor</h5>
            <p class="card-text">
              This text editor is a single-page application that meets the PWA criteria.
            </p>
          </div>
          <div class="card-footer">
          <small class="text-body-secondary"><a href="https://paw-text-editor.herokuapp.com" target="_blank" rel="noreferrer">View Deployment</a> </small>
            <small class="text-body-secondary"><a href="https://github.com/bettybowie/textEditor" target="_blank" rel="noreferrer">View GitHub Repo</a></small>
          </div>
        </div>
        <div class="card">
          <img src={dayPlanner}class="card-img-top" alt="day planner app"></img>
          <div class="card-body">
            <h5 class="card-title">Work Day Scheduler</h5>
            <p class="card-text">
            This is a simple calendar application that allows users to save events for each hour of the day.
            </p>
          </div>
          <div class="card-footer">
          <small class="text-body-secondary"><a href="https://bettybowie.github.io/dayPlanner/" target="_blank" rel="noreferrer">View Deployment</a> </small>
            <small class="text-body-secondary"><a href="https://github.com/bettybowie/dayPlanner" target="_blank" rel="noreferrer">View GitHub Repo</a></small>
          </div>
        </div>
        </div>
        <div class="card-group">
        <div class="card">
          <img src={weatherDashboard} class="card-img-top" alt="weather dashboard"></img>
          <div class="card-body">
            <h5 class="card-title">Weather Dashboard</h5>
            <p class="card-text">
              This application allows users to look up a city name and weather conditions will display.
            </p>
          </div>
          <div class="card-footer">
          <small class="text-body-secondary"><a href="https://bettybowie.github.io/weatherDashboard/" target="_blank" rel="noreferrer">View Deployment</a> </small>
            <small class="text-body-secondary"><a href="https://github.com/bettybowie/weatherDashboard" target="_blank" rel="noreferrer">View GitHub Repo</a></small>
          </div>
        </div>
        <div class="card">
          <img src={noteTaker} class="card-img-top" alt="note taker"></img>
          <div class="card-body">
            <h5 class="card-title">Note Taker</h5>
            <p class="card-text">
            This is an application that allows users to write and save notes so they can organize their thoughts and keep track of tasks they need to complete. 
            </p>
          </div>
          <div class="card-footer">
          <small class="text-body-secondary"><a href="https://notetaker-challenge.herokuapp.com" target="_blank" rel="noreferrer">View Deployment</a> </small>
            <small class="text-body-secondary"><a href="https://github.com/bettybowie/noteTaker" target="_blank" rel="noreferrer">View GitHub Repo</a></small>
          </div>
        </div>
        <div class="card">
          <img src={timedQuiz} class="card-img-top" alt="timed quiz"></img>
          <div class="card-body">
            <h5 class="card-title">Timed Quiz</h5>
            <p class="card-text">
              This is a timed coding quiz with multiple-choice questions. This app runs in the browser, and features dynamically updated HTML and CSS powered by JavaScript. 
            </p>
          </div>
          <div class="card-footer">
          <small class="text-body-secondary"><a href="https://bettybowie.github.io/timedQuiz/" target="_blank" rel="noreferrer">View Deployment</a> </small>
            <small class="text-body-secondary"><a href="https://github.com/bettybowie/timedQuiz" target="_blank" rel="noreferrer">View GitHub Repo</a></small>
          </div>
        </div>
      </div>
    </section>
  );
}
