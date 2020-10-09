import React from 'react'

export const Notes = ({ notes, onRemove, alert }) => {
  const remove = async (id) =>  {
    await onRemove(id)
    alert.show('Notes deleted', 'success')
  }
  return (
    <ul className="list-group">
      {notes.map(note => (
        <li
          className="list-group-item note"
          key={note.id}
        >
          <div>
            <strong>
              {note.title}
            </strong>
            <small className="ml-2">
              {note.data}
            </small>
          </div>
          <button onClick={() => remove(note.id)} className="btn btn-outline-danger btn-sm">&times;</button>
        </li>
      ))}
    </ul>
  )
}