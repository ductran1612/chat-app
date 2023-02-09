import "./App.css";
import Login from "./components/Login";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import AddRoomModal from "./components/Modals/AddRoomModal";
import InviteModal from "./components/Modals/InviteModal";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <AppProvider>
            <Routes>
              <Route element={<Login />} path="/login" />
              <Route element={<ChatRoom />} path="/" />
            </Routes>
            <AddRoomModal />
            <InviteModal />
          </AppProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
