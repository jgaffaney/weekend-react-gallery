import axios from 'axios';
import {useState} from 'react';

export default function GalleryItem({image, addLike, fetchPics}) {
    console.log('in GalleryImage');

    // state variable to hold a display boolean for toggling
    // this will not be necessary when moved to a database
    const [displayPhoto, setDisplayPhoto] = useState(true);

    const handleDelete = (id) => {
        console.log('in handle delete');
        axios({
            method: 'DELETE',
            url: `/gallery/${id}`
        }).then(response => {
            console.log('Delete response from DB: ', response);
            fetchPics();
        }).catch(err => {
            console.log('Error on delete: ', err);
        })
    }

    const toggleDescription = () => {
        console.log('in toggle Description with: ', image);
        console.log('displayPhoto= ', displayPhoto);
        setDisplayPhoto(!displayPhoto);
        console.log('displayPhoto after: ', displayPhoto);
        fetchPics();
    }
    console.log('image.path from GalleryItem: ', image.path);
    return (
        <div className="gallery-image">

            {/* conditional rendering to display pic or description */}
            {displayPhoto ? 
            (<img src={image.path} onClick={toggleDescription} className="pic"/>) :
            (<div className="pic" onClick={toggleDescription}><
                h5>{image.description}</h5>
            </div>)}
            <button className="likeBtn" onClick={() => addLike(image.id)}>Like</button>
            <p className="likes">{image.likes} likes!</p>
            <button className="deleteBtn" onClick={() => handleDelete(image.id)}>Delete Pic</button>
            
        </div> 
    )
}