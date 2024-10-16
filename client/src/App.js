import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import { UserProvider } from './store/userContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './components/Layout';
import Feedback from './components/Feedback'; // Import the Feedback component

function App() {
  return (
    <div className="App">
      <Router>
        <UserProvider>
          <Layout />
          {/* Add Routes here */}
          <Routes>
            <Route path="/feedback" element={<Feedback />} />
            {/* You can add more routes here as needed */}
          </Routes>
        </UserProvider>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
