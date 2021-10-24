import {useState} from 'react';
import './NewPicForm.css';
import Button from '@mui/material/Button';
import TextareaAutoSize from '@mui/material/TextareaAutosize'

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
    // console.log('newPicPath: ', newPicPath);
    return (
        <div className="form-container">
            <p>Upload your own photos here!</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="path">Add a URL for your image:</label>
                <input  id="path" 
                        className="path"
                        type="text" 
                        placeholder="URL" 
                        onChange={(e) => setNewPicPath(e.target.value)}
                        // ensure field filled before submitting POST request
                        required
                />
                <br></br>
                <label htmlFor="description">Add a description for your image:</label>
                <TextareaAutoSize
                    rows="4" 
                    cols="25" 
                    id="description" 
                    className="description"
                    aria-label="minimum height"
                    minRows={3}
                    maxRows={5}
                    style={{width: 300}}
                    onChange={(e) => setNewPicDescription(e.target.value)}
                />
                <Button variant="contained" 
                        color="info"
                        className="submitBtn" 
                        style={{margin: '0 auto', display: "flex"}}
                        type="Submit">Submit </Button>
            </form>
        </div>
    )
}

export default NewPicForm;