import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeContext, themes } from './Context/ThemeContext';
import Home from './pages';
import Signin from './components/Signin/index';
import Signup from './components/Signup/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} exact/>
            <Route path='/signin' element={<Signin/>} exact/>
            <Route path='/signup' element={<Signup/>} exact/>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    );
  }
}

export default App;