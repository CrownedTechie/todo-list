import "./App.css";
import { Button, Container, Modal, SearchBar } from "./components";
import { IoAddSharp, IoFilterSharp } from "react-icons/io5";
import { GrTask } from "react-icons/gr";
import TodoList from "./TodoList";
import { useModal } from "./hooks/ModalHook";


function App() {
  const { openModal } = useModal();

  return (
    <>
      <Container>
          <header> 
            <h1>TO-DO <GrTask /></h1>
           
            <SearchBar />
           
            <p className="welcome-message">WHAT'S UP, CHINENYE!</p>
          </header>

          <section>CATEGORIES</section>

          <section className="task-section">
            <div className="task-actions">
              <Button handleClick={openModal} variant="filled">
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

          <Modal />
        </Container>
    </>
  )
}

export default App;
