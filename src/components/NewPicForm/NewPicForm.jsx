import {useState} from 'react';

function NewPicForm({addPic}) {

    const [newPicPath, setNewPicPath] = useState('');
    const [newPicDescription, setNewPicDescription] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const newPic = {
            path: newPicPath,
            description: newPicDescription
        }

        
        addPic(newPic);
    }
    console.log('newPicPath: ', newPicPath);
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="path">Add a URL for your image:</label>
            <input  id="path" 
                    type="text" 
                    placeholder="URL" 
                    onChange={(e) => setNewPicPath(e.target.value)}
            />
            <label htmlFor="description">Add a description for your image:</label>
            <textarea 
                rows="4" 
                cols="25" 
                id="description" 
                onChange={(e) => setNewPicDescription(e.target.value)}
            />
            <button className="submitBtn" type="Submit">Submit</button>
        </form>

    )
}

export default NewPicForm;