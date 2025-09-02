import { useState } from 'react'

const Button = ({ text, onClick}) => {
    return (
        <button onClick={onClick}>{text}</button>

        )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(new Uint8Array(8))
    const [mostUpvotedIndex,setMostUpvotedIndex] = useState(-1)
    console.log(votes)
    const selectRandomAnecdote = () => {
        setSelected(Math.floor(Math.random() * anecdotes.length))
    }

    const findMostUpvotedIndex = () => {
        let largest = 0
        let largestIndex = -1
        // trying to find the index of the largest number in the array votes
        for (let i=0; i<8; i++) {
            if (votes[i] > largest) {
                console.log('index', i, 'is larger')
                largest = votes[i]
                largestIndex = i
                console.log(largestIndex)
            }
        }
        console.log(largestIndex)
        setMostUpvotedIndex(largestIndex)
        }
    const updateVotes = (selected, votes) => {
        const newVotes = { ...votes }
        console.log(newVotes)
        newVotes[selected] += 1
        setVotes(newVotes)
        findMostUpvotedIndex()
        console.log('most upvoted anecdote index is: ', mostUpvotedIndex)
    }
    if (mostUpvotedIndex === -1) {
        return (
            <div>
                <h1>Anecdote of the Day</h1>
                <Button text='Vote' onClick={() => updateVotes(selected, votes)}></Button>
                <Button text='Random Anecdote' onClick={selectRandomAnecdote}></Button>
                <br/>
                This one has {votes[selected]} votes<br/>
                {anecdotes[selected]}
                <h1>Anecdote with the most votes</h1>
                <p>No votes recorded yet</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Anecdote of the Day</h1>
            <Button text='Vote' onClick={() => updateVotes(selected, votes)}></Button>
            <Button text='Random Anecdote' onClick={selectRandomAnecdote}></Button>
            <br/>
            This one has {votes[selected]} votes<br/>
            {anecdotes[selected]}
            <h1>Anecdote with the most votes</h1>
            <p>{anecdotes[mostUpvotedIndex]}</p>
        </div>

    )
}

export default App