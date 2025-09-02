

const Header = (props) => {
    console.log(props)
    return (
        <>
            <h1>{props.course}</h1>
        </>
        // i try to rename everything
    )
}
const Part = ({part, exercises}) => {
    return (
        <>
            <p>
                {part} {exercises}
            </p>
        </>
    )
}
const Content = ({parts}) => {
    console.log(parts)
    return (
        <>
            {parts.map((part) =>
                <Part part={part.name} exercises={part.exercises} key={part.id} />
            )}

            {/*<Part part={parts[0].name} exercises={parts[0].exercises} />*/}
            {/*<Part part={parts[1].name} exercises={parts[1].exercises} />*/}
            {/*<Part part={parts[2].name} exercises={parts[2].exercises} />*/}

        </>

    )
}
const Total = ({parts}) => {
    const total =
        parts.reduce(
            (accumulator, currentValue) => accumulator + currentValue.exercises,
            0,
            )
    return (
        <>
            <p><b>Number of exercises {total}</b></p>
            {/*<p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>*/}
        </>

    )
}
const Course = ({course, parts}) => {
    return (
        <>
            <Header key='1' course={course} />
            <Content key='2' parts={parts} />
            <Total key='3' parts={parts} />
        </>
        )
}
const Courses = ({courses}) => {
    // courses.forEach((course) => console.log(course.id))
    return (
        <>
            {courses.map((course) =>
                <>
                    <Course key={course.id} course={course.name} parts={course.parts} />
                </>
            )}
        </>

    )
}
const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]


    return (
        <div>
            {/*<Header course={course.name} />*/}
            {/*<Content parts={course.parts} />*/}
            {/*<Total parts={course.parts} />*/}
            <Courses courses={courses} />
        </div>
    )
}



export default App
