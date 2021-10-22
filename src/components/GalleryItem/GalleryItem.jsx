export default function GalleryItem({image, addLike}) {
    console.log('in GalleryImage');

    const toggleDescription = () => {
        console.log('in toggle Description with: ', image);
        image.display_photo = !image.display_photo;
        fetchPics();
    }

   
    

    return (
        <div className="gallery-image">

            <img src={image.path} onClick={toggleDescription} />
            <button className="likeBtn" onClick={() => addLike(image.id)}>Like</button>
            <p>{image.likes} likes!</p>
        </div> 
    )
}