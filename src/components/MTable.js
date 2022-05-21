import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../styles/App.css";

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('日時', '5月27日(金) 18:00~21:00'),
  createData('会場', 'East Venture 六本木オフィス'),
  createData('主催', '合同会社gibierco'),
  createData('料金', '0.01ETH'),
  createData('協力', 'EastVenture'),
];

const MTable = () => {
  return (
    <div className='Table'>
      <p className='Overview'>OverView</p>
      <p className='information'>開催情報</p>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 480 }} aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell 
                  style={{width:300}}
                  align="left">{row.calories}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default MTable;