import React from "react";
import LookUp from "../../Assets/images/LookUp.png";
import textEditor from "../../Assets/images/textEditor.png";
import noteTaker from "../../Assets/images/noteTaker.png";
import timedQuiz from "../../Assets/images/timedQuiz.png";
import weatherDashboard from "../../Assets/images/weatherDashboard.png";
import dayPlanner from "../../Assets/images/dayPlanner.png";
import matchmyneeds from "../../Assets/images/matchmyneeds.png";

export default function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="portfolio-div">
        <div className="card-group">
          <div className="card">
            <img src={LookUp} className="card-img-top" alt="look up app"></img>
            <div className="card-body">
              <h5 className="card-title">Look Up</h5>
              <p className="card-text">
                Look Up is a destressing social media app where users can create
                their own profile to post post beautiful pictures of the sky.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <a
                  href="https://look-up-project-2.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Deployment
                </a>{" "}
              </small>
              <small className="text-body-secondary">
                <a
                  href="https://github.com/bettybowie/look-up"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Repo
                </a>
              </small>
            </div>
          </div>
          <div className="card">
            <img
              src={textEditor}
              className="card-img-top"
              alt="text editor app"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Text Editor</h5>
              <p className="card-text">
                This text editor is a single-page application that meets the PWA
                criteria.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <a
                  href="https://paw-text-editor.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Deployment
                </a>{" "}
              </small>
              <small className="text-body-secondary">
                <a
                  href="https://github.com/bettybowie/textEditor"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Repo
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <img
              src={dayPlanner}
              className="card-img-top"
              alt="day planner app"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Work Day Scheduler</h5>
              <p className="card-text">
                This is a simple calendar application that allows users to save
                events for each hour of the day.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <a
                  href="https://bettybowie.github.io/dayPlanner/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Deployment
                </a>{" "}
              </small>
              <small className="text-body-secondary">
                <a
                  href="https://github.com/bettybowie/dayPlanner"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Repo
                </a>
              </small>
            </div>
          </div>
          <div className="card">
            <img
              src={weatherDashboard}
              className="card-img-top"
              alt="weather dashboard"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">
                This application allows users to look up a city name and weather
                conditions will display.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <a
                  href="https://bettybowie.github.io/weatherDashboard/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Deployment
                </a>{" "}
              </small>
              <small className="text-body-secondary">
                <a
                  href="https://github.com/bettybowie/weatherDashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Repo
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <img
              src={noteTaker}
              className="card-img-top"
              alt="note taker"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Note Taker</h5>
              <p className="card-text">
                This is an application that allows users to write and save notes
                so they can organize their thoughts and keep track of tasks they
                need to complete.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <a
                  href="https://notetaker-challenge.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Deployment
                </a>{" "}
              </small>
              <small className="text-body-secondary">
                <a
                  href="https://github.com/bettybowie/noteTaker"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Repo
                </a>
              </small>
            </div>
          </div>
          <div className="card">
            <img
              src={timedQuiz}
              className="card-img-top"
              alt="timed quiz"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Timed Quiz</h5>
              <p className="card-text">
                This is a timed coding quiz with multiple-choice questions. This
                app runs in the browser, and features dynamically updated HTML
                and CSS powered by JavaScript.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <a
                  href="https://bettybowie.github.io/timedQuiz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Deployment
                </a>{" "}
              </small>
              <small className="text-body-secondary">
                <a
                  href="https://github.com/bettybowie/timedQuiz"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Repo
                </a>
              </small>
            </div>
          </div>
        </div>
        <div className="card-group">
          <div className="card">
            <img
              src={matchmyneeds}
              className="card-img-top"
              alt="matchmyneeds"
            ></img>
            <div className="card-body">
              <h5 className="card-title">MatchMyNeeds</h5>
              <p className="card-text">
                This website was created so that anyone can post their
                needs/request for a specific item and connects people from all
                over the nation to fulfill their ask. Purely giving out of the
                goodness of one’s heart or simply to declutter their space.
                There’s no limit to how much you can give or how much you can
                ask. The beauty about our application is that we connect people
                through community and the experience of sharing that item. What
                sets us apart from a thrift store is that users do not blindly
                give, they are personally donating their item to an individual
                who will give it a second chance.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <a
                  href="https://matchmyneeds.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Deployment
                </a>{" "}
              </small>
              <small className="text-body-secondary">
                <a
                  href="https://github.com/bettybowie/MatchMyNeeds"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Repo
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
