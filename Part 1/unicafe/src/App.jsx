import { useState } from 'react'

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const handleGood = () => {
        const updatedGood = good +1
        setGood(updatedGood)
        console.log("Good is now: ", updatedGood)

    }
    const handleNeutral = () => {
        const updatedNeutral = neutral +1
        setNeutral(updatedNeutral)
        console.log("Neutral is now: ", updatedNeutral)

    }
    const handleBad = () => {
        const updatedBad = bad +1
        setBad(updatedBad)
        console.log("Bad is now: ", updatedBad)

    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button text='good' onClick={handleGood}></Button>
            <Button text='neutral' onClick={handleNeutral}></Button>
            <Button text='bad' onClick={handleBad}></Button>
            <h1>Statistics</h1>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
        </div>
    )
}

export default App