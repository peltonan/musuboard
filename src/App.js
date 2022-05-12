
import './App.css';
import test from './images/animeMe.jpg'

/* import { polaroid } from './pictures.js'
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MusuBoard</h1>
        <h2>May Posts</h2>
        <div class="wrapper">
          <div class="item">
            <div class="polaroid"><img src={test} />
              <div class="caption">Test</div>
            </div>
          </div>
        </div>

      </header >
    </div >
  );
}
export default App;
