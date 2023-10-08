import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box'

import { Navbar, Feed, VideoView, ChannelView, SearchResult } from './components';

const App = () => (
    <BrowserRouter>
      <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" element={<VideoView />} />
          <Route path="/channel/:id" element={<ChannelView />} />
          <Route path="/search/:searchTerm" element={<SearchResult />} />
        </Routes>
      </Box>
    </BrowserRouter>

  )

export default App;