import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import ExercisesHorizontalScrollbar from './ExercisesHorizontalScrollBar'
import Loader from './Loader'

type SimilarExercisesProps = {
  targetMuscleExercises: any[]
  equipmentExercises: any[]
}

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}: SimilarExercisesProps) => {
  return (
    <Box sx={{mt: { lg: '100px', xs: '0'}}}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative'}}>
        {targetMuscleExercises.length ? <ExercisesHorizontalScrollbar data={targetMuscleExercises}/> : <Loader />}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: 2, position: 'relative'}}>
        {equipmentExercises.length ? <ExercisesHorizontalScrollbar data={equipmentExercises}/> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises