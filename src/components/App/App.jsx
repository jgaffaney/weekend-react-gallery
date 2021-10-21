import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';


function App() {

    useEffect(() => {
        fetchPics();
    }, []);

    const fetchPics = () => {
      console.log('in fetchPics');
      axios.get('/gallery')
          .then(response => {
              console.log('Axios response: ', response);
              setGallery(response.data)
          })
          .catch(err => {
              console.log('Axios error: ', err);
          })
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
