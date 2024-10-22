import "./App.css";
import Container from "./components/container/Container";

function App() {

  return (
    <>
      <Container>
        <header> 
          <h1>TO-DO</h1>
          <p>SEARCH BAR BTN</p>
          <p className="welcome-message">WHAT'S UP, CHINENYE!</p>
        </header>

        <section>CATEGORIES</section>

        <section className="task-section">
          <div className="task-actions">
            <button>NEW TASK</button>
            <button>FILTERS</button>
          </div>

          
          <ul>
            <li>TODO LIST 1</li>
            <li>TODO LIST 1</li>
          </ul>
        </section>
      </Container>
    </>
  )
}

export default App;
