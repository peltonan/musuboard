import './App.css';
import './NeonText.css'
import { cards } from './Cards'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "MusuBoard"
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MusuBoard</h1>
        <div className="wrapper">
          {cards.map((card) => {
            return (
              <div className="item">
                <div className="polaroid">
                  <img src={card.polaroid} />
                  <div className="caption">{card.caption}</div>
                </div>
              </div>
            )
          })}

        </div>
      </header>
    </div>
  );
}
export default App;



