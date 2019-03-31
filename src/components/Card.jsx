import React, { Component } from 'react';

export class Card extends Component {
  state = {
    reveal: false,
  }

  handleToggleReveal = () => {
    this.setState(prevState => ({
      reveal: !prevState.reveal,
    }));
  };

  render() {
    const { tabIndex, card: { prompt, answer } } = this.props;
    const { reveal } = this.state;
    return (
      <div
        className="card"
        onClick={this.handleToggleReveal}
        tabIndex={tabIndex}
      >
        <div className="card-prompt">
          <h4>{prompt}</h4>
        </div>
        <div className="card-answer">
          <h4 className={reveal ? 'text-revealed' : 'text-hidden'}>{answer}</h4>
        </div>
      </div>
    );
  }
};
