import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Home, MoveDetail, PageNotFound, Footer } from './components';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/movie/:imdbID' element={<MoveDetail />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App