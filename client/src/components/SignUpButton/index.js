import React, { component } from 'react';
import { Shake } from 'reshake'
 

const SignUp = props = () => {
    <ShakeRotate >
    <button>Click Me!</button>
    </ShakeRotate>
}

class App extends Component {
    render () {
      return (
        <Shake 
          h={5}
          v={5}
          r={3}
          dur={300}
          int={10}
          max={100}
          fixed={true}
          fixedStop={false}
          freez={false}>
          <h1>&lt;Shake /&gt;</h1>
        </Shake>
      )
    }
  }

export default SignUp