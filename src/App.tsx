import "./App.css";
import { Button, Container, Modal } from "./components";
import { IoAddSharp, IoFilterSharp } from "react-icons/io5";
import { GrTask } from "react-icons/gr";
import TodoList from "./TodoList";
import { useModal } from "./hooks/ModalHook";

import { FcSearch } from "react-icons/fc";

function App() {
  const { openModal } = useModal();

  return (
    <>
      <Container>
          <header> 
            <h1>TO-DO <GrTask /></h1>
            {/* <p>SEARCH BAR BTN</p> */}

            <div className="search-box">
              <input
                type="text"
                className="search-bar"
                placeholder="Search tasks..."
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
              />

              <FcSearch />
            </div>
           
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
