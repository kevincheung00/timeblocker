import React from 'react';
import Fade from 'react-reveal/Fade';

class FadeText extends React.Component {
  render() {
    return (
      <div>
        <Fade up>
          <h2>{this.props.title}</h2>
        </Fade>

        <Fade up>
          <p>{this.props.content}</p>
        </Fade>

        <Fade right>
            <img src={"../public/images/" + this.props.image} />
        </Fade>
      </div>
    );
  }
}

export default FadeText;
