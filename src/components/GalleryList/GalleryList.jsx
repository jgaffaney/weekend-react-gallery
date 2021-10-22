import GalleryItem from '../GalleryItem/GalleryItem.jsx'

export default function GalleryList({gallery, addLike}) {
    console.log('in GalleryList');

    return(
        <div className ="gallery-container">
            {
                gallery.map((image) => (
                   <GalleryItem key={image.id} image={image} addLike={addLike}/>
                ))}
        </div>
    )
}