import React from 'react'

type ExercisesProps = {
  bodyPart: string
  setExercises: React.Dispatch<React.SetStateAction<string[]>>
  setBodyPart: React.Dispatch<React.SetStateAction<string>>
}

const Exercises = ({ bodyPart, setExercises, setBodyPart }: ExercisesProps) => {
  return (
    <div>Exercises</div>
  )
}

export default Exercises