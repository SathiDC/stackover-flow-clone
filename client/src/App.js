import { BrowserRouter as Router } from 'react-router-dom'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from './Components/Navbar/Navbar'
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';

// import './App.css';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUsers())
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <AllRoutes />
        <Navbar />

      </Router>

    </div>
  );
}

export default App;
