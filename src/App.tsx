import "./App.css";
import { Button, Container, Modal, SearchBar } from "./components";
import { IoAddSharp } from "react-icons/io5";
import { GrTask } from "react-icons/gr";
import TodoList from "./TodoList";
import { useModal } from "./hooks/ModalHook";
import { useState } from "react";


function App() {
  const { openModal } = useModal();
  const [ searchTerm, setSearchTerm ] = useState<string>('');
  const [completeStatus, setCompleteStatus] = useState<boolean | undefined>(undefined);

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Container>
          <header> 
            <h1>TO-DO <GrTask /></h1>
            <SearchBar  searchValue={searchTerm} handleSearch={handleSearchValue} />
          </header>

          <main className="task-section">
            <div className="task-actions">
              <Button handleClick={openModal} variant="filled">
                <IoAddSharp />
                New Todo
              </Button>
              <Button handleClick={() => setCompleteStatus(undefined)} variant="outline" >
                All
              </Button>

              <Button handleClick={() => setCompleteStatus(true)} variant="outline" >
                Completed
              </Button>

              <Button handleClick={() => setCompleteStatus(false)} variant="outline">
                Incomplete
              </Button>
            </div>
            
            <ul className="task-list">
              <TodoList term={searchTerm} todoCompleted={completeStatus} />
            </ul>
          </main>

          <Modal />
        </Container>
    </>
  )
}

export default App;
