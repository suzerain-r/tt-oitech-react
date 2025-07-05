import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainComponent from "./component/MainComponent";
import TrendingComponent from "./component/TrendingComponent";
import HomeComponent from "./component/HomeComponent";
import FilmDetail from "./component/FilmDetail";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<MainComponent />}>
            <Route element={<HomeComponent />} />
            <Route path="trending" index element={<TrendingComponent />} />
            <Route path="movie/:id" element={<FilmDetail />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
