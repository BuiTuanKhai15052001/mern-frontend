import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Auth from './views/Auth';
import AuthContextProvider from './contexts/AuthContext';
import Dashboard from './views/Dashboard';
import ProtectedRoute from './components/routing/ProtectedRoute';
import About from './views/About';
import PostContextProvider from './contexts/PostContext';
function App() {
  return (
    <AuthContextProvider>
      <PostContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Auth authRoute="login" />} />
            <Route path="/register" element={<Auth authRoute='register' />} />
            {/* <Route path='/dashboard/*' element={<ProtectedRoute  path='/dashboard' element={<Dashboard />} />} />  */}
            <Route path='/dashboard' element={<ProtectedRoute element={Dashboard} />} />
            <Route path='/about' element={<ProtectedRoute element={About} />} />

          </Routes>
        </BrowserRouter>
      </PostContextProvider>

    </AuthContextProvider>
  )
}

export default App;
