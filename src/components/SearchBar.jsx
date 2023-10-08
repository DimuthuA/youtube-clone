import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Search from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <Paper
      component="form"
      sx={{
        border: '1px solid #e3e3e3',
        borderRadius: 20,
        paddingLeft: 2,
        marginRight: { sm: 5 }
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        // value=""
        onChange={() => {}}
      />
      <IconButton
        type="submit"
        sx={{p: '10px', color: 'red'}}>
        <Search />
      </IconButton>    
    </Paper>
  )
}

export default SearchBar;