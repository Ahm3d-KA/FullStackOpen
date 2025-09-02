const Header = (props) => {
    console.log(props)
    return (
        <>
            <h1>{props.course}</h1>
        </>
        // i try to rename everything
    )
}
const Part = (props) => {
    return (
        <>
            <p>
                {props.part} {props.exercises}
            </p>
        </>
    )
}
const Content = ({parts}) => {
    return (
        <>
            {parts.map((part, i) =>
                <Part part={part.name} exercises={part.exercises} key={i} />
            )}
            {/*<Part part={parts[0].name} exercises={parts[0].exercises} />*/}
            {/*<Part part={parts[1].name} exercises={parts[1].exercises} />*/}
            {/*<Part part={parts[2].name} exercises={parts[2].exercises} />*/}

        </>

    )
}
const Total = (props) => {
    return (
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>

    )
}
const Course = ({course}) => {
    return (
        <>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>

    )
}
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }



    return (
        <div>
            {/*<Header course={course.name} />*/}
            {/*<Content parts={course.parts} />*/}
            {/*<Total parts={course.parts} />*/}
            <Course course={course} />
        </div>
    )
}



export default App
