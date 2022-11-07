export interface IExercise  {
  bodyPart: string
  equipment: string
  gifUrl: string
  id: string
  name: string
  target: string
}


export interface IVideoThumbnails {
  height: number
  url: string
  width: string
}
export interface IVideo {
  channelId: string
  channelName: string
  description: string
  thumbnails: IVideoThumbnails[]
  title: string
  videoId: string
}
export interface IExerciseVideo {
  video: IVideo
}

export const exercisesOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url: string, options: any) => {
    const response = await fetch(url, options)
    const data = await response.json()

    return data
}