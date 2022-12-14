import { useParams, useNavigate } from "react-router-dom";
import { Main } from '@/presentation/components'
import { Grid, Button, Box } from '@mui/material'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { useState } from 'react';
import moment from 'moment'

const EmployeeShow = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [employee, setEmployee] = useState({
    id: id,
    name: 'Employees 3',
    email: 'Employeesemail@gmail.com',
    phone: '123123123123',
    salary: '124123',
    created_at: '2022-08-20',
    birth_date: '1990-12-20',
    document: '8123123'
  });
  return (
    <Main>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <div>
            <p>
              <strong>Nome:</strong><br />
              {employee.name}
            </p>
            <p>
              <strong>CPF:</strong><br />
              {employee.document}
            </p>
            <p>
              <strong>E-mail:</strong><br />
              {employee.email}
            </p>
            <p>
              <strong>Telefone:</strong><br />
              {employee.phone}
            </p>
            <p>
              <strong>Data de nascimento:</strong><br />
              {moment(employee.birth_date).format('DD/MM/YYYY')}
            </p>
            <p>
              <strong>Salario:</strong><br />
              {employee.salary}
            </p>
            <p>
              <strong>Data de contratação:</strong><br />
              {moment(employee.created_at).format('DD/MM/YYYY')}
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box style={{ background: '#fff', height: '100%', flexGrow: 1, padding: 8, borderRadius: 8 }}>

          
          <Box sx={{ mb: 2 }}>
            <Button style={{ width: '100%' }} variant="contained" endIcon={<EditOutlinedIcon />}
            onClick={() => {
            navigate(`/employee/edit/${id}`);
            }}>
            Editar
            </Button>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Button style={{ width: '100%' }} variant="contained" color="error" endIcon={<DeleteForeverOutlinedIcon />}
            onClick={() => {
            return false
            }}>
            Excluir
            </Button>
          </Box>
          </Box>

        </Grid>
      </Grid>
    </Main>

  )

}

export default EmployeeShow