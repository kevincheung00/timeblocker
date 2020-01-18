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
            <div>
                <p>{this.props.content}</p>
            </div>
        </Fade>

        <Fade right>
            <img src={"/images/" + this.props.image} />
        </Fade>
      </div>
    );
  }
}

export default FadeText;
