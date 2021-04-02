import './App.scss';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer'
function App() {
  return (
    <div className="App container">
      <Header />
      <Home />
      <Footer/>
    </div>
  );
}

export default App;
