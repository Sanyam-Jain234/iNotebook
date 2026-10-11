import React, {useContext, useState} from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container my-3">
            
            <div className="container my-4">
    <div className="card shadow-sm">
        <div className="card-body">

            <h3 className="card-title mb-4">Add a New Note</h3>

            <form onSubmit={handleClick}>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        placeholder="Enter note title"
                        value={note.title}
                        onChange={onChange}
                        minLength={5}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        Description
                    </label>

                    <textarea
                        className="form-control"
                        id="description"
                        name="description"
                        rows="3"
                        placeholder="Write your note..."
                        value={note.description}
                        onChange={onChange}
                        minLength={5}
                        required
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                        Tag
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        id="tag"
                        name="tag"
                        placeholder="e.g. React, JavaScript"
                        value={note.tag}
                        onChange={onChange}
                    />
                </div>

                <button
                    disabled={
                        note.title.length < 5 ||
                        note.description.length < 5
                    }
                    type="submit"
                    className="btn btn-primary"
                >
                    Add Note
                </button>

            </form>

        </div>
    </div>
</div>
        </div>
    )
}

export default AddNote
