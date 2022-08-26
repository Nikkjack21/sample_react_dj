import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { AdminRoute, ProtectedRoute } from "./utils/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import SignupPage from "./pages/SignupPage";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import EditUser from "./components/EditUser";
import Header from "./components/Header";
import BookCompany from "./pages/BookingUser/BookCompany";
import AdminTable from "./components/Admin/AdminTable";
import BookAppList from "./pages/Booking Admin/BookAppList";

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
          <Route path="/test" element={<Header />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/book" element={<BookCompany />} />

          {/* Admin Page */}
          <Route path="/admin" element={<AdminLogin />} />
          <Route
            path="/adminhome"
            element={
              <AdminRoute>
                <AdminHome />
              </AdminRoute>
            }
          />
          <Route path="/application" element={<BookAppList/>}  />
          <Route path="/userupdate/:id" element={<EditUser />} />
          <Route path="/users" element={<AdminTable />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
