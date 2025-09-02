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
        </>

    )
}
const Header = (props) => {
    console.log(props)
    return (
        <>
            <h1>{props.course}</h1>
        </>
        // i try to rename everything
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
    return (
        <>
            {courses.map((course) =>
                <Course key={course.id} course={course.name} parts={course.parts} />

            )}
        </>

    )
}
export default Courses