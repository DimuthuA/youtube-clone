import React from 'react'

import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import { VideoCard, ChannelCard } from './index.js'

const Videos = ({ videos }) => {

  // console.log('This is inside Videos.jsx', videos)
  // console.log(videos.length > 0 && videos[0].id.videoId)

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>

      {videos.length > 0 && videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {/* {item.id.channelId && <ChannelCard channel={item} />} */}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos