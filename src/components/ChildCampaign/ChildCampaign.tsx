import React,{useState} from 'react'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Paper from '@mui/material/Paper';
import Input from '@mui/material/Input';
import Checkbox from '@mui/joy/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';  
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';



const ChildCampaign = ({subCampaigns}) => {


    const [children,setChildren] = useState(subCampaigns)
    const [current,setCurrent] = useState(0)

    const handleAdd = () => {
        setChildren([...children,{id:children.length,active:true,list:[{name:1,quantity:0}],sum:0,}])
        setCurrent(children.length)
    }

    const handleSelect = (id) => {
        setCurrent(id)
    }


    const [rows, setRows] = useState([{name:1,quantity:0}]);
    const handleAddChild = () => {
    //   setRows([...rows, {name:rows.length+1,quantity:0}]);
      const temp = [...children]
      temp[current].list = [...temp[current].list,{name:temp[current].list.length+1,quantity:0}]
      console.log(temp)
      setChildren(temp)
    };
    const handleDelete = (id) => {
      setRows(rows.filter((item) => item.name !== id));
    };

    const handleChangeInput = (e,index) => {
      const temp = [...children]
      temp[current].list[index].quantity = e.target.value
      console.log(temp[current])
      //let aas = temp[current].list.reduce((a,b)=>{a+b.quantity})
      let sum =0
      for(let i =0;i<temp[current].list.length;i++){
        sum += +temp[current].list[i].quantity
      }
      temp[current].sum = sum
      setChildren(temp)
    }
    

  return (

    <div>
        <div style={{display:'flex', flexDirection:'row', marginBottom:'24px'}}>
                    <div style={{overflow:'auto'}}>
                        <div style={{display:'flex'}}>
                            <div>
                                <IconButton onClick={()=>{handleAdd()}} style={{
                                    backgroundColor: 'rgb(237, 237, 237)',
                                    color:'#f50057',
                                }}>
                                    <AddIcon />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <div style={{display:'flex',flexDirection:'row'}}>
                        {children.map((child)=>(

                            <Paper 
                                onClick={()=>{handleSelect(child.id)}}
                                elevation={3} 
                                style={{marginLeft: 16, height:'126px',width:'216px' }}>
                                <div style={{
                                    display:'flex', 
                                    fontSize:'20px', 
                                    alignItems:'center',
                                    justifyContent:'center',
                                    padding:'8px 8px 4px',
                                    flex:'1'
                                    }}>
                                    <div>Chiến dịch con {child.id+1}</div>
                                    <CheckCircleIcon className='icon-check active' style={{fontSize:'14px'}}/>
                                </div>
                                <div style={{fontSize:'24px',textAlign:'center',lineHeight:'32px'}}>
                                    {child.sum}
                                </div>
                            </Paper>))}
                    </div>
                </div>
                
                <div style={{marginLeft:'16px'}}>
                    <div >
                        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <div style={{borderBottom: '1px solid rgba(0, 0, 0, 0.42)', margin:'8px 8px 8px 0',width:'100%'}}>
                                <label htmlFor="name">Tên chiến dịch con*</label>
                                <Input value={`Chiến dịch con ${children[current].id +1}`} fullWidth id='name'>
                                </Input>
                            </div>
                            <div style={{width:'268px'}}>
                                <Checkbox label="Đang hoạt động" defaultChecked />
                            </div>
                        </div>
                    </div>

                    <div>
                        <div style={{margin:'32px 16px 16px 0',fontSize:'20px'}}>
                            DANH SÁCH QUẢNG CÁO
                        </div>
                    </div>  
                    {/* <List list={children[current-1].list} /> */}


                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell ><Checkbox /></TableCell>
                                <TableCell>Tên quảng cáo*</TableCell>
                                <TableCell >Số lượng*</TableCell>
                                <TableCell >
                                <Button onClick={()=>{handleAddChild()}} variant="outlined">
                                    <AddIcon fontSize='small'/>
                                    Thêm
                                    </Button>
                                </TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {children[current].list.map((row,index) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell ><Checkbox /></TableCell>
                                <TableCell component="th" scope="row">
                                    <TextField
                                    id="standard-helperText"
                                    defaultValue={`Quảng cáo ${row.name}`}
                                    variant="standard"
                                    style={{width:'100%'}}
                                    />
                                </TableCell>
                                <TableCell >
                                    <TextField
                                    id="standard-number"
                                    type="number"
                                    defaultValue={row.quantity}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{width:'100%'}}
                                    onChange={(e)=>{handleChangeInput(e,index)}}
                                    variant="standard"
                                    />
                                </TableCell>
                                <TableCell >
                                    <IconButton onClick={()=>{handleDelete(row.name)}} title='Xóa'>
                                    <DeleteIcon />
                                    </IconButton>
                                </TableCell>

                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                        </TableContainer>
                </div>
                
    </div>
  )
}

export default ChildCampaign