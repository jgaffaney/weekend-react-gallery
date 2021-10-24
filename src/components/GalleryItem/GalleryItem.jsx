import {useState} from 'react';

export default function GalleryItem({image, addLike, fetchPics}) {
    console.log('in GalleryImage');

    // state variable to hold a display boolean for toggling
    // this will not be necessary when moved to a database
    // actually, this will stay to ensure all photos show on initial load
    const [displayPhoto, setDisplayPhoto] = useState(true);

    const toggleDescription = () => {
        console.log('in toggle Description with: ', image);
        console.log('displayPhoto= ', displayPhoto);
        setDisplayPhoto(!displayPhoto);
        console.log('displayPhoto after: ', displayPhoto);
        fetchPics();
    }

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
            
        </div> 
    )
}