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
import tableSlice, { /* increase,decrease */  listConfigFee, tableSelector } from '../slices/tableSlice';
import { useSelector } from 'react-redux';

export default function FeeTable({}) {
  const dispatch = useAppDispatch();
  const fees = useAppSelector((state) => state.auth.serviceFees);

  useEffect(() => {
    dispatch(listConfigFee());
  },[])


  const [max,setMax] = useState("");


  /* const handleCLick = (max:any, rowmax:any) => {
    max != "" ? dispatch(increase(parseInt(max))) : dispatch(increase(rowmax))
    setMax("");
  } */
  
  return (
    <div>
        <Container>
      <AppleIcon/>
      <AdbRoundedIcon/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">MIN</TableCell>
            <TableCell align="right">MAX</TableCell>
            <TableCell align="right">FEE</TableCell>
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
              <TableCell align="right"><TextField variant="standard" type="number" disabled defaultValue={row.feePrice}></TextField></TableCell>
              <TableCell align="right"><TextField variant="standard" type="number" placeholder='min' defaultValue={row.feeMin} onChange={(e) => setMax(e.target.value)}></TextField></TableCell>
              <TableCell align="right"><TextField variant="standard" type="number" placeholder='max' defaultValue={row.feeMax}></TextField></TableCell>
         
              {fees.length == 1 ? <>
              <TableCell align="right"><Button variant="contained" /* onClick={() => handleCLick(max,row.max)} */>
                <AddIcon/></Button><Button hidden><RemoveIcon/></Button></TableCell>
              </>
              :
              row.id ==  fees.length ?  <>

              <TableCell align="right"><Button variant="contained" /* onClick={() => handleCLick(max,row.max)} */>
                <AddIcon /></Button>
                <Button variant="contained" /* onClick={ () => {
                    dispatch(decrease());
                }} */><RemoveIcon/></Button></TableCell>
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
    </TableContainer>
    </Container>
    </div>
  )
}