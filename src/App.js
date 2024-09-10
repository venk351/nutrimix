import './App.css';
import Header from './component/Header';
import NutritionGrid from './component/NutritionGrid';
import './styles.css'
import {BrowserRouter as Router, Routes, Route, Link} from  'react-router-dom'
import Cart from './component/Cart';
import { NutritionProvider } from './context/NutritionContext';
import FeedBack from './component/FeedBack';
import { useReducer } from 'react';
import feedBackReducer from './reducer/feedBackReducer';

function App() {
  const initialState = {feedBackList:[]}
  const [state, dispatch] = useReducer(feedBackReducer, initialState)
  return (
    <div className='App'>
      <Header></Header>
      <NutritionProvider>
        <Router>
            <Link className='tabs' to="/">Home</Link>
            <Link className='tabs' to="/cart">Add Cart</Link>
            <Link className='tabs' to="/feedback">Feedback</Link>
          <Routes>
            <Route path="/" element={<NutritionGrid></NutritionGrid>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
            <Route path='/feedback' element={<FeedBack dispatch={dispatch} feedBackList={state.feedBackList}></FeedBack>}>
            </Route>
          </Routes>
        </Router>
      </NutritionProvider>
    </div>
  );
}

export default App;
