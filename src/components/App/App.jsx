import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList.jsx';
import NewPicForm from '../NewPicForm/NewPicForm';

function App() {

    useEffect(() => {
        fetchPics();
    }, []);

    // state variables
    const [gallery, setGallery] = useState([]);

    // uploads a URL path and description to DB 
    const addPic = (newPic) => {
      console.log('in addPic');
      console.log('newPic = ', newPic);
      axios({
        method: 'POST',
        url: '/gallery',
        data: newPic
      }).then(response => {
          console.log('POST response: ', response);
          fetchPics();
      })
        .catch(err => {
          console.log('Error on POST ', err);
        })
    }
    


    // updates the like count
    const addLike = (id) => {
      console.log('in addLike with: ', id);
      axios.put(`/gallery/like/${id}`)
          .then(response => {
            console.log('put response: ', response);
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
          <h1 className="App-title">My <b>"most important"</b> in life are friends and family!</h1>
        </header>
        <GalleryList gallery={gallery} addLike={addLike} fetchPics={fetchPics}/>
        <NewPicForm addPic={addPic}/>
      </div>
    );
}

export default App;
