import "./App.css";
import { Button, Container } from "./components";
import { IoAddSharp, IoFilterSharp } from "react-icons/io5";

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
            <Button variant="filled">
              <IoAddSharp />
              New Task
            </Button>

            <Button variant="outline">
              <IoFilterSharp />
              Filters
            </Button>
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
