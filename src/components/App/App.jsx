import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';

function App() {

    useEffect(() => {
        fetchPics();
    }, []);

    // state variables
    const [gallery, setGallery] = useState([]);

    const addLike = (id) => {
      console.log('in addLike with: ', id);
      axios.put(`/gallery/like/${id}`)
          .then(response => {
            console.log('put response: ', response);
            // setGallery(response.data);
            fetchPics()
          })
          .catch(err => {
            console.log('Error on fetchPics axios: ', err);
          })
    }
    
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
        <GalleryList gallery={gallery} addLike={addLike}/>
      </div>
    );
}

export default App;
