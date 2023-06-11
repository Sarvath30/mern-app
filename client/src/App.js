import { Routes, Route, Navigate } from "react-router-dom";
import Notes from "./pages/Notes";
import ViewNotes from "./pages/ViewNotes";
import CreateNotes from "./pages/CreateNotes";
import EditNotes from "./pages/EditNotes";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navigate to="/notes" />} />
        <Route exact path="/notes" element={<Notes />} />
        <Route exact path="/view/notes" element={<ViewNotes />} />
        <Route exact path="/create/notes" element={<CreateNotes />} />
        <Route exact path="/edit/notes" element={<EditNotes />} />
      </Routes>
    </div>
  );
}

export default App;
