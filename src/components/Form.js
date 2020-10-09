import React, { useState, useContext } from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Form = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const firebase = useContext(FirebaseContext)

  const submitHandler = event => {
    event.preventDefault()
    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show('Заметка создана', 'success')
        setValue('')
      }).catch(() => {
        alert.show('Что та случилось !', 'danger')
      })
    } else {
      alert.show('Введите заголовок заметки', 'warning')
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        {/* <label htmlFor="formGroupExampleInput">Example label</label> */}
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter title notes"
        />
      </div>
    </form>
  )
}