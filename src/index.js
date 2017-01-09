// @flow
import { h, render } from 'preact'

type AppProps = {
  // FIXME! This will cause an error right due to line 15 passing a string. Change
  // this from "number" to "string" and the error goes away.
  greeting: number,
};

const App = (props: AppProps) => (
  <div>
    <h1>{props.greeting}</h1>
  </div>
)

render(<App greeting="Hello, world"/>, document.getElementById('app'))
