import React, { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


type ExercisesHorizontalScrollbarProps = {
    data: any[]
}

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

function ExercisesHorizontalScrollbar({ data }: ExercisesHorizontalScrollbarProps) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item, idx) => (
        <Box
          key={idx}
          // itemId={idx}
          // title={item.id || item}
          m="0 40px"
        >
          <ExerciseCard exercise={item}/>
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default ExercisesHorizontalScrollbar