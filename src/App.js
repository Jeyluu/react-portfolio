import './App.css';
import ThemeContextProvider from './Context/ThemeContext'
import Home from './Container/Home'





function App() {



  return (
    <div>
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
