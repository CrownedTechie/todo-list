import "./App.css";
import { Button, Container } from "./components";
import { IoAddSharp, IoFilterSharp } from "react-icons/io5";
import { GrTask } from "react-icons/gr";
import TodoList from "./TodoList";


function App() {

  return (
    <>
      <Container>
        <header> 
          <h1>TO-DO <GrTask /></h1>
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

          
          <ul className="task-list">
           <TodoList />
          </ul>
        </section>
      </Container>
    </>
  )
}

export default App;
