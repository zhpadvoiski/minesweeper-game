import Minesweeper from "react-minesweeper";
import "react-minesweeper/lib/minesweeper.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Minesweeper
        onWin={() => console.log("GAME WON")}
        onLose={() => console.log("GAME LOST")}
        bombChance={0.15} // 15% chance that a field will contain a bomb
        width={10} // amount of fields horizontally
        height={10} // amount of fields vertically
      />
    </div>
  );
}

export default App;
