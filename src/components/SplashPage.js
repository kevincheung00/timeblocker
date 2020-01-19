import React from 'react';
import Fade from 'react-reveal/Fade';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

class SplashPage extends React.Component {
    render() {
        if (this.props.currStep != 1)
            return null
        return (
            <div class="main">
                <h1><b>Time Block Your Life</b> <Badge pill variant="secondary">beta</Badge> <br/><br/></h1>

                <div class="intro">
                    <Fade right cascade>
                        <img src={"/images/" + this.props.image} id="header-image"/>
                    </Fade>

                    <Fade up>
                        <h2>{this.props.title}</h2>
                    </Fade>

                    <Fade up cascade>
                        <div id="opening-text">
                            <p>{this.props.content}</p>
                        </div>
                    </Fade>

                    <Fade up cascade>
                        <Button variant="outline-primary" onClick={this.props.next}>Get Started!</Button>
                    </Fade>
                </div>

                <div class="credits">
                    <p>Made by Justin Zhang, Kevin Cheung, Shubh Shah, Sammi Yeung</p>
                </div>
            </div>
        );
      }
    }

export default SplashPage;
