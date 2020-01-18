import React from 'react';

export default class Body extends React.Component {
    

    render() {
        if (this.props.currStep != 2)
            return null
        return(
            <div class="main">
                <p>Welcome to the entry</p>
            </div>
        );
    }
}
