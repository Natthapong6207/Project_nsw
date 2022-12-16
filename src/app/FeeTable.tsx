import React,{ useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import AddIcon from '@mui/icons-material/AddCircleRounded';
import RemoveIcon from '@mui/icons-material/RemoveCircleRounded';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppleIcon from '@mui/icons-material/Apple';
import StarIcon from '@mui/icons-material/StarHalfRounded';
import AdbRoundedIcon from '@mui/icons-material/AdbRounded';
import { useAppDispatch, useAppSelector } from '../store/store';
import tableSlice, { increase,decrease ,  createConfigFee, listConfigFee, tableSelector, deleteConfigFee } from '../slices/serviceFeeSlice';
import { useSelector } from 'react-redux';
import { ServiceFee } from '../interfaces/ServiceFee';
import serviceFeeService from '../service/serviceFee.service';

export default function FeeTable({}) {
  const dispatch = useAppDispatch();
  const fees = useAppSelector((state) => state.fees.serviceFees);

  const [data,setData] = useState<ServiceFee[]>([]);

  useEffect(() => {
    dispatch(listConfigFee());
    setData(JSON.parse(JSON.stringify(fees)))
    console.log("DATA: "+data.length)
  },[])

  const [price,setPrice] = useState("");
  const [min,setMin] = useState("");
  const [max,setMax] = useState("");

  const handleClickAdd = () => {
    data.push({
      id: fees.length,
      feePrice: parseFloat(price),
      feeMin: parseFloat(min),
      feeMax: parseFloat(max)
    })
    console.log("fees: "+data.toString)
  } 

  const handleClickRemove = () => {
    data.pop()
    console.log("data pop: "+data.values)
    setData(data)
  } 
  
  return (
    <div>
        <Container>
      <AppleIcon/>
      <AdbRoundedIcon/>s
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead> 
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">PRICE</TableCell>
            <TableCell align="right">MIN</TableCell>
            <TableCell align="right">MAX</TableCell>
            <TableCell align="right">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {fees.map((row) => (
            <TableRow
              hover
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right"><TextField variant="standard" type="number" placeholder='price' defaultValue={row.feePrice} onChange={(e) => setPrice(e.target.value)}></TextField></TableCell>
              <TableCell align="right"><TextField variant="standard" type="number" placeholder='min' defaultValue={row.feeMin} onChange={(e) => setMin(e.target.value)}></TextField></TableCell>
              <TableCell align="right"><TextField variant="standard" type="number" placeholder='max' defaultValue={row.feeMax} onChange={(e) => setMax(e.target.value)}></TextField></TableCell>
         
              {fees.length == 1 ? <>
              <TableCell align="right"><Button variant="contained" onClick={() => {handleClickAdd(); dispatch(increase(row))}}>
                <AddIcon/></Button><Button hidden><RemoveIcon/></Button></TableCell>
              </>
              :
              row.id ==  fees.length ?  <>

              <TableCell align="right"><Button variant="contained" onClick={() => {handleClickAdd(); dispatch(increase(row))}}>
                <AddIcon /></Button>
                <Button variant="contained" onClick={() => {handleClickRemove(); dispatch(decrease())}}><RemoveIcon/></Button></TableCell>
                </>
                : 
                <>
                <TableCell align="right">  <Button hidden><AddIcon/></Button>
                  <Button  hidden><RemoveIcon/></Button> 
                </TableCell>
                </>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={() => {dispatch(deleteConfigFee()); dispatch(createConfigFee(data))}}>SAVE</Button>
      <Button onClick={() => dispatch(deleteConfigFee())}>DELETE</Button>
    </TableContainer>
    </Container>
    </div>
  )
}