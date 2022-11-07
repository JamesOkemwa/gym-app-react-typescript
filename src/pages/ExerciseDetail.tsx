import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'

import { exercisesOptions, fetchData, IExercise, IExerciseVideo, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [ exerciseDetail, setExerciseDetail ] = useState<IExercise>({} as IExercise)
  const [ exerciseVideos, setExerciseVideos ] = useState<IExerciseVideo[]>([])
  const [ targetMuscleExercises, setTargetMuscleExercises ] = useState([])
  const [ equipmentExercises, setEquipmentExercises ] = useState([])
  const { id } = useParams()


  const fetchExercisesData = async () => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

    const exerciseDetailData: IExercise = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions)
    setExerciseDetail(exerciseDetailData)

    const exerciseVideosDtargetMuscleExercisesata = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData?.name}`, youtubeOptions)
    setExerciseVideos(exerciseVideosData.contents)

    const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions)
    setTargetMuscleExercises(targetMuscleExercisesData)

    const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions)
    setEquipmentExercises(equipmentExercisesData)

  }

  useEffect(() => {

    fetchExercisesData()
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  )
}

export default ExerciseDetail