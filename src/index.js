// @flow
import { h, render } from 'preact'

type AppProps = {
  greeting: number,
};

const App = (props: AppProps) => (
  <div>
    <h1>{props.greeting}</h1>
  </div>
)

render(<App greeting="Hello, world"/>, document.getElementById('app'))