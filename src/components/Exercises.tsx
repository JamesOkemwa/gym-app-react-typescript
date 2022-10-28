import React, { useState, useEffect } from 'react'
import Pagination from "@mui/material/Pagination"
import { Box, Stack, Typography } from "@mui/material"

import { exercisesOptions, fetchData, IExercise } from '../utils/fetchData'

type ExercisesProps = {
  bodyPart: string
  exercises: IExercise[]
  setExercises: React.Dispatch<React.SetStateAction<IExercise[]>>
}

const Exercises = ({ bodyPart, setExercises, exercises }: ExercisesProps) => {
  return (
    <Box 
      id="exercises"
      sx={{mt: {lg: '110px'}}}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack 
        direction="row" 
        sx={{ gap: {lg: '110px', xs: '50px'}}}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, index) => (
          exercise.name
        ))}
      </Stack>
    </Box>
  )
}

export default Exercises