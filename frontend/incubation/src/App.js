import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AdminRoute, ProtectedRoute } from "./utils/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import SignupPage from "./pages/SignupPage";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import AdminNavbar from "./components/AdminNavbar";
import EditUser from "./components/EditUser";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path="/admin" element={<AdminLogin/>}  />
        <Route path="/adminhome" element={
          <AdminRoute>
            <AdminNavbar/>
               <AdminHome />
          </AdminRoute>
        
      }  />
      <Route path="/userupdate/:id" element={<EditUser/>}/>
      </Routes>

      </AuthProvider>


    </div>
  );
}

export default App;
