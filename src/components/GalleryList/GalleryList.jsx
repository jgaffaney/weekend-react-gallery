import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import './GalleryList.css';

export default function GalleryList({gallery, addLike, fetchPics}) {
    console.log('in GalleryList');

    return(
        <div className ="gallery-container">
            <div className="gallery-list">
                {gallery.map((image) => (
                   <GalleryItem 
                        key={image.id} 
                        image={image} 
                        addLike={addLike}
                        fetchPics={fetchPics}/>
                ))}
            </div>
        </div>
    )
}