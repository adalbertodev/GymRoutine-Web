import * as React from 'react';
// import { getExercises } from '../ExerciseAPI';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@mui/material';
import Paper from '@mui/material/Paper';
import './test.css';

const RoutineTable_UI: React.FC = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      maxWidth: '20%',
      padding: 0
    }
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    }
  }));

  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
  ];

  // const exercises = async () => {
  //   console.log(await getExercises());
  // };

  // exercises();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Lunes</StyledTableCell>
            <StyledTableCell align='center'>Martes</StyledTableCell>
            <StyledTableCell align='center'>Miércoles</StyledTableCell>
            <StyledTableCell align='center'>Jueves</StyledTableCell>
            <StyledTableCell align='center'>Viernes</StyledTableCell>
          </TableRow>
          <TableRow>
            <th>
              <div className='StyledCellGrid'>
                <StyledTableCell align='center'>Ejercicio</StyledTableCell>
                <StyledTableCell align='center'>S</StyledTableCell>
                <StyledTableCell align='center'>R</StyledTableCell>
                <StyledTableCell align='center'>Peso</StyledTableCell>
              </div>
            </th>
            <th>
              <div className='StyledCellGrid'>
                <StyledTableCell align='center'>Ejercicio</StyledTableCell>
                <StyledTableCell align='center'>S</StyledTableCell>
                <StyledTableCell align='center'>R</StyledTableCell>
                <StyledTableCell align='center'>Peso</StyledTableCell>
              </div>
            </th>
            <th>
              <div className='StyledCellGrid'>
                <StyledTableCell align='center'>Ejercicio</StyledTableCell>
                <StyledTableCell align='center'>S</StyledTableCell>
                <StyledTableCell align='center'>R</StyledTableCell>
                <StyledTableCell align='center'>Peso</StyledTableCell>
              </div>
            </th>
            <th>
              <div className='StyledCellGrid'>
                <StyledTableCell align='center'>Ejercicio</StyledTableCell>
                <StyledTableCell align='center'>S</StyledTableCell>
                <StyledTableCell align='center'>R</StyledTableCell>
                <StyledTableCell align='center'>Peso</StyledTableCell>
              </div>
            </th>
            <th>
              <div className='StyledCellGrid'>
                <StyledTableCell align='center'>Ejercicio</StyledTableCell>
                <StyledTableCell align='center'>S</StyledTableCell>
                <StyledTableCell align='center'>R</StyledTableCell>
                <StyledTableCell align='center'>Peso</StyledTableCell>
              </div>
            </th>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell align='center'>
                <div className='StyledCellGrid'>
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                </div>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <div className='StyledCellGrid'>
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                </div>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <div className='StyledCellGrid'>
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                </div>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <div className='StyledCellGrid'>
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                </div>
              </StyledTableCell>
              <StyledTableCell align='center'>
                <div className='StyledCellGrid'>
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                  <TextField id='standard-basic' variant='standard' />
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    // <Table id='rutineTable'>
    //   <TableRow>
    //     <TableHead>Lunes</TableHead>
    //     <TableHead>Martes</TableHead>
    //     <TableHead>Miercoles</TableHead>
    //     <TableHead>Jueves</TableHead>
    //     <TableHead>Viernes</TableHead>
    //   </TableRow>

    //   <RoutineColumnHead />

    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    //   <RoutineRow />
    // </Table>
  );
};

export default RoutineTable_UI;
