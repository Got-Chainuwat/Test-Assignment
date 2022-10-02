import React,{useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';

const Item = styled(Paper)(({ theme }) => ({
  marginTop: '80px',
  marginLeft: '90px',
  display:'flex',
  justifyContent:'space-around',
  border: '0px'

}));

function Contents() {
    const [age, setAge] = useState('')
    const handleChange = (event) => {
        // console.log(event.target.value)
    setAge(event.target.value);
        
};

  return (
    <Item>
        <h4 sx={{ justifyContent:'flex-end' }}>Place List </h4>
        <Box sx={{ minWidth: 220,borderRadius: '50px',justifyContent:'flex-end' }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Restaurant</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
                >
                <MenuItem value={10}>Restaurant</MenuItem>
                <MenuItem value={20}>Bakery</MenuItem>
                <MenuItem value={30}>Cafe</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            value=''
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon
                  aria-label="toggle password visibility"
                  edge="end"
                >
                  
                </SearchIcon>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
            
        </Box>   
    </Item>
  )
}

export default Contents