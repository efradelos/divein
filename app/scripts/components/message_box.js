import React from 'react';
import classNames from 'classnames';

class MessageBox extends React.Component {
  constructor() {
    super();
    this.state = { };
    this.handleClose = this.handleClose.bind(this);
  }

  confirm(title, content, cb) {
    this.setState({ active: true, title: title, content: content});
    this.cb = cb;
  }

  handleClose(result) {
    this.setState({active: false});
    if (this.cb) this.cb(!!result);
  }

  renderButtons() {
    return (
      <p className="text-center">
        <button className="button button-assertive" onClick={this.handleClose.bind(this, true)}>Yes</button>
        <button className="button" onClick={this.handleClose.bind(this, false)}>Cancel</button>
      </p>
    );
  }

  render() {
    var modalClass = classNames({ modal: true, active: this.state.active });
    return (
      <div className={modalClass}>
        <header className="bar bar-header">
          <div className="h1 title">{this.state.title}</div>
          <button className="button button-icon icon ion-close" onClick={this.handleClose.bind(this, false)} />
        </header>

        <div className="scroll-content has-header">
          <p className="padding">{this.state.content}</p>
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

export default MessageBox;
