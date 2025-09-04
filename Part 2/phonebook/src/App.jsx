import { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas' }
    ])
    const [newName, setNewName] = useState('')
    const addName = (event) => {
        event.preventDefault()
        console.log(event)
        setPersons(persons.concat(newName))
    }
    const handleInputChange = (event) => {
        setNewName(event.target.value)
        console.log('handle input change: ', event.target.value)
    }
    // const namesInNice = () => {
    //     persons.map(person => <p>person.name</p>)
    // }

    return (
        <div>
            <div>debug: {newName}</div>
            <h2>Phonebook</h2>

                    <form onSubmit={addName}>
                <div>
                     name:   <input value={newName} onChange={handleInputChange} />
                </div>
                <div>
                        <button type="submit">add</button>

                </div>
                    </form>

            <h2>Numbers</h2>

            ...
        </div>
    )
}

export default App