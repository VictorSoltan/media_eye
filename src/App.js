import './App.scss';
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="content">
        <Home/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
