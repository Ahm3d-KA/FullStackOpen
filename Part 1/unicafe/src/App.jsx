import {use, useState} from 'react'


const StatisticLine = ({ text, value }) => {
    return (
        <>
            <p>{text}: {value}</p>
        </>
    )
}
    const Statistics = ({ good, neutral, bad, total, average, positive}) => {
    console.log(good, neutral, bad)
    if (good === 0 && neutral === 0 && bad === 0) {
        return (
            <>
                <h1>Statistics</h1>
                <p>No feedback given</p>
            </>
        )
    }
    return (
        <>
            <h1>Statistics</h1>
            <StatisticLine text='Good' value={good}></StatisticLine>
            <StatisticLine text='Neutral' value={neutral}></StatisticLine>
            <StatisticLine text='Bad' value={bad}></StatisticLine>
            <StatisticLine text='Total' value={total}></StatisticLine>
            <StatisticLine text='Average' value={average}></StatisticLine>
            <StatisticLine text='Positive' value={positive}></StatisticLine>

        </>
    )
}
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
    const [total, setTotal] = useState(0)
    const [average, setAverage] = useState(0)
    const [percentOfPosFeedback, setPercentOfPosFeedback] = useState(0)
    const handleGood = () => {
        const updatedGood = good +1
        setGood(updatedGood)

        const updatedTotal = updatedGood + neutral + bad
        setTotal(updatedTotal)

        setPercentOfPosFeedback((updatedGood/updatedTotal)*100)
        setAverage((updatedGood - bad)/updatedTotal)
        console.log("Good is now: ", updatedGood)

    }
    const handleNeutral = () => {
        const updatedNeutral = neutral +1
        setNeutral(updatedNeutral)

        const updatedTotal = good + updatedNeutral + bad
        setTotal(updatedTotal)

        setPercentOfPosFeedback((good/updatedTotal)*100)
        setAverage((good - bad)/updatedTotal)
        console.log("Neutral is now: ", updatedNeutral)

    }
    const handleBad = () => {
        const updatedBad = bad +1
        setBad(updatedBad)

        const updatedTotal = good + neutral + updatedBad
        setTotal(updatedTotal)

        setPercentOfPosFeedback((good/updatedTotal)*100)
        setAverage((good - updatedBad)/updatedTotal)
        console.log("Bad is now: ", updatedBad)

    }

    return (
        <div>
            <h1>Give feedback</h1>
            <Button text='good' onClick={handleGood}></Button>
            <Button text='neutral' onClick={handleNeutral}></Button>
            <Button text='bad' onClick={handleBad}></Button>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={percentOfPosFeedback}></Statistics>
        </div>
    )
}

export default App