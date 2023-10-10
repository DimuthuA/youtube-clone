import React from 'react';
import { useState, useEffect } from 'react';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Sidebar, Videos } from './index.js';


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([])

  // useEffect(() => {
  //   console.log(`This is after videos is updated: `, videos)
  // }, [videos]);

  useEffect(() => {

    fetchFromAPI(selectedCategory)
      .then ((response) => {
        setVideos(response.data.items)

        // console.log(response.data.items)
      })

  }, [selectedCategory])

  return (
    <Stack
      sx={{flexDirection: {sx: "column", md: "row"}}}
    >
      <Box sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', paddingX: {sx: 0, md: 2}}}>
        <Sidebar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" variant="body2" sx={{marginTop: 1.5, color: '#FFF'}}>
          Copyright 2023 XYZ Inc.
        </Typography>
      </Box>
      <Box padding={2} height='90vh' flex={2} sx={{overflowY: 'auto'}}>
        <Typography
          variant='h4'
          fontWeight='bold'
          marginBottom={2}
          color='white'
        >
          {selectedCategory} <span style={{color: '#FC1503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed;
