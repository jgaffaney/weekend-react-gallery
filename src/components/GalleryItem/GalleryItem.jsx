import {useState} from 'react';

export default function GalleryItem({image, addLike, fetchPics}) {
    console.log('in GalleryImage');

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