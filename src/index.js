//Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom';
import "./styles.css";
import Header from './components/Header';



//Create a react component
function App() {
    return (
        <Header />
    )
}

//take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root')
)