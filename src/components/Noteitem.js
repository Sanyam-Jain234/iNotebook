import React, { useContext } from 'react'
import noteContext from "../context/notes/noteContext"

const Noteitem = (props) => {

    const context = useContext(noteContext);
    const { deleteNote } = context;

    const { note, updateNote } = props;

    return (
        <div className="col-md-4">
            <div className="card my-3 shadow-sm">

                <div className="card-body">

                    <div className="d-flex justify-content-between align-items-start">

                        <h5 className="card-title mb-2">
                            {note.title}
                        </h5>

                       <div>
    <button
        className="btn btn-sm btn-outline-primary mx-1"
        onClick={() => updateNote(note)}
    >
        Edit
    </button>

    <button
        className="btn btn-sm btn-outline-danger mx-1"
        onClick={() => deleteNote(note._id)}
    >
        Delete
    </button>
</div>

                    </div>

                    <p className="card-text">
                        {note.description}
                    </p>

                    {note.tag && (
                        <span className="badge bg-secondary">
                            #{note.tag}
                        </span>
                    )}

                    <p className="text-muted mt-3 mb-0 small">
                        {new Date(note.date).toLocaleDateString()}
                    </p>

                </div>

            </div>
        </div>
    )
}

export default Noteitem