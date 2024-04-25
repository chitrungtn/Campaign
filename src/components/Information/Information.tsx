import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';


const Information = ({data,err, sendDataToParent }) => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {
    setInputValue(e.target.value);
    sendDataToParentHandler()
  };
  const sendDataToParentHandler = () => {
    sendDataToParent(inputValue);
  };

  return (

    <div>
        <Box className='content'>
          {err?
            <TextField 
              sx={{marginBottom:'20px'}} 
              error helperText="Dư liệu không hợp lệ" 
              fullWidth id="standard-basic" 
              label="Tên chiến dịch*" 
              variant="standard" 
              value={inputValue}
              onChange={handleChange}
            />
            :
            <TextField 
              sx={{marginBottom:'20px'}} 
              fullWidth 
              id="standard-basic" 
              label="Tên chiến dịch*" 
              variant="standard" 
              value={inputValue}
              onChange={handleChange}
            />
          }
            <TextField fullWidth id="standard-basic" label="Mô tả" variant="standard" />
            
        </Box>
    </div>
  )
}

export default Information  