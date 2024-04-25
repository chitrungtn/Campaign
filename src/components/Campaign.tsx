import React,{useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './style.css'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import ChildCampaign from './ChildCampaign/ChildCampaign';
import Information from './Information/Information';


const Campaign = () => {
    const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    console.log(event)
    setValue(newValue);
  };

  const data =[{
        id: 0,
        active: true,
        list:[{name:1,quantity:0}],
        sum:0,
    }]

  const initData= {
    name: '',
    describe:'', 
    subCampaigns: data,
  }

  const [allData, setAllData] = useState(initData);
  const [err, setErr] = useState(false);
  const handleSubmit = ()=>{
    if(allData.name.trim()){
        alert(JSON.stringify(allData))
    }
    else {
        alert('Vui lòng điền đúng và đầy đủ thông tin')
        setErr(true)
    }
  }


  const handleDataFromChild = (name:any) => {
    let temp = allData;
    temp.name = name
    setAllData(temp);
    console.log(allData)
  };

  return (
    <div>
        <Box style={{
            borderBottom:'1px solid gray',
            display:'flex',
            padding: '40px 20px 10px',
            justifyContent: 'flex-end',
        }} >
            <Button style={{backgroundColor:'#3f51b5'}} onClick={()=>handleSubmit()} variant="contained">SUBMIT</Button>
        </Box>

        <Box style={{padding:'24px'}} >
            <Paper elevation={3} style={{ padding: 20 }}>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="THÔNG TIN" value="1" />
                            <Tab label="CHIẾN DỊCH CON" value="2" />
                        </TabList>
                        </Box>
                        <TabPanel value="1">
                            <Information data={allData} sendDataToParent={handleDataFromChild} err={err}/>
                        </TabPanel>
                        <TabPanel value="2">
                            <ChildCampaign subCampaigns={allData.subCampaigns} />
                        </TabPanel>
                    </TabContext>
                </Box>
            </Paper>
        </Box>
    </div>
  )
}

export default Campaign