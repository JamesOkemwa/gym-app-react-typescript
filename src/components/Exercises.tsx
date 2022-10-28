import React, { useState, useEffect } from 'react'
import Pagination from "@mui/material/Pagination"
import { Box, Stack, Typography } from "@mui/material"

import { exercisesOptions, fetchData } from '../utils/fetchData'

type ExercisesProps = {
  bodyPart: string
  exercises: string[]
  setExercises: React.Dispatch<React.SetStateAction<string[]>>
}

const Exercises = ({ bodyPart, setExercises, exercises }: ExercisesProps) => {
  return (
    <div>Exercises</div>
  )
}

export default Exercises