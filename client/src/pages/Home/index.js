import React, { Component } from 'react'

class Home extends Component {


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>Where is our damn splash page</p>
                <img style={imageStyle} alt="home" src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg" />
            </div>
        )

    }
}

export default Home
