import React from 'react'

type BodyPartProps = {
    item: string
    bodyPart: string
    setBodyPart: React.Dispatch<React.SetStateAction<string>>
}

const BodyPart = ({ item }: BodyPartProps) => {
  return (
    <div>BodyPart</div>
  )
}

export default BodyPart