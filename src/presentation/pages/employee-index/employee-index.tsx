import { Main } from '@/presentation/components'
import { Grid } from '@mui/material';
import { useEffect, useState, useMemo } from 'react';
import './employee-index.scss'
import EmployeeListItem from './employee-listitem'
import { Button, InputAdornment, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { EmployeeListModel } from '@/data/models'

const EmployeeIndex = () => {
  let navigate = useNavigate();
  let [search, setSearch] = useState('')
  let [employees, setEmployees] = useState<EmployeeListModel[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setEmployees([
        {
          id: 1,
          name: 'Employees 1',
          email: 'Employeesemail@gmail.com',
          phone: '123123123123',
          salary: '124123',
          created_at: '2022-08-20'
        },
        {
          id: 2,
          name: 'Employees 2',
          email: 'Employeesemail@gmail.com',
          phone: '123123123123',
          salary: '124123',
          created_at: '2022-08-20'
        },
        {
          id: 3,
          name: 'Teste Filtro 3',
          email: 'Employeesemail@gmail.com',
          phone: '123123123123',
          salary: '124123',
          created_at: '2022-08-20'
        }
      ]);
      
    }, 1000);
  }, []);

  let employeeFilter = useMemo(() => {
    if(search == '') {
      return employees
    }
     return employees.filter((employee) => employee.name.includes(search) ||  employee.email.includes(search))
  }, [employees,search]);

  const confirmDelete = (index: number) => {
    // let newListEmployees = {...employees }
    // // setEmployees(newListEmployees.unshift(index))

    let array = [...employees]; // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1);
      setEmployees(array)
      // this.setState({people: array});
    }

  }

  return (
    <Main>
      <>
      <Grid container alignItems="flex-end">
        <Grid item xs={8}>
          <TextField
            label="Pesquisar"
            id="Search"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
              endAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
            }}
            variant="standard"
            onChange={(e) => { setSearch(e.target.value)}}
          />
        </Grid>
        <Grid item xs={4} style={{textAlign: 'right'}}>
          <Button variant="contained" startIcon={<AddIcon />}
          onClick={() => {
            navigate(`/employee/create`);
          }}
          style={{marginBottom: '8px'}}>
          Novo
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          {employeeFilter.map((employee, index) => (
          <EmployeeListItem
          id={employee.id}
          name={employee.name}
          email={employee.email}
          phone={employee.phone}
          salary={employee.salary}
          created_at={employee.created_at}
          key={employee.id}></EmployeeListItem>
          ))}
        </Grid>
      </Grid>
      </>
    </Main>
  )
}

export default EmployeeIndex