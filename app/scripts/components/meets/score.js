import _ from 'lodash';
import React from 'react';
import Router from 'react-router';
import cx from 'classnames';

export default class MeetScore extends React.Component {
  constructor() {
    super();
    this.state = { currentJudge: 0, scores: [0, 0, 0, 0 ,0 ,0 ,0]};
  }

  handleScore(score) {
    var scores = this.state.scores;
    var currentJudge = this.state.currentJudge;
    scores[currentJudge] = score;
    currentJudge++;
    if(currentJudge >= scores.length) currentJudge = 0;
    this.setState({ scores: scores, currentJudge: currentJudge});
  }

  renderJudge(num) {
    var isCurrent = this.state.currentJudge == num;
    var buttonClass = cx({
      'button': true,
      'button-positive': isCurrent,
      'button-calm': !isCurrent
    });

    var score = this.state.scores[num] || '-';
    return (
      <div className="col button-container"><button className={buttonClass}>{score}</button></div>
    );
  }

  render() {
    return (
      <div id="meet-score">
        <header className="bar bar-header">
          <Router.Link to="meets:list" className="button button-icon icon ion-ios-arrow-back"></Router.Link>
          <h1 className="h1 title">meet.name</h1>
        </header>

        <div className="scroll-content has-header">
          <div className="card">
            <h5>Ssf Esss</h5>
            <h5>Forward 1 SS</h5>
          </div>
          <div className="row">
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 1.0)}>1.0</button></div>
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 1.5)}>1.5</button></div>
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 2.0)}>2.0</button></div>
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 2.5)}>2.5</button></div>
          </div>
          <div className="row">
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 3.0)}>3.0</button></div>
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 3.5)}>3.5</button></div>
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 4.0)}>4.0</button></div>
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 4.5)}>4.5</button></div>
          </div>
          <div className="row">
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 5.0)}>5.0</button></div>
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 5.5)}>5.5</button></div>
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 6.0)}>6.0</button></div>
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 6.5)}>6.5</button></div>
          </div>
          <div className="row">
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 7.0)}>7.0</button></div>
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 7.5)}>7.5</button></div>
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 8.0)}>8.0</button></div>
            <div className="col button-container"><button className="button button-royal" onClick={this.handleScore.bind(this, 8.5)}>8.5</button></div>
          </div>

          <div className="bar-judge">
            <h4>Judges Scores</h4>
            <div className="row">
              {this.renderJudge(0)}
              {this.renderJudge(1)}
              {this.renderJudge(2)}
              {this.renderJudge(3)}
              {this.renderJudge(4)}
              {this.renderJudge(5)}
              {this.renderJudge(6)}
            </div>
          </div>
          <button className="button">Submit</button>
        </div>
      </div>
    );
  }
}
