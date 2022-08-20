import { Main } from '@/presentation/components'
import { useState } from 'react';
import './employee-index.scss'
import EmployeeListItem from './employee-listitem'

const EmployeeIndex = () => {

  let [employees, setEmployees] = useState([
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
      name: 'Employees 3',
      email: 'Employeesemail@gmail.com',
      phone: '123123123123',
      salary: '124123',
      created_at: '2022-08-20'
    }
  ]);

  return (
    <Main>
      <>
      {employees.map((employee) => (
        <EmployeeListItem
        id={employee.id}
        name={employee.name}
        email={employee.email}
        phone={employee.phone}
        salary={employee.salary}
        created_at={employee.created_at}
        key={employee.id}></EmployeeListItem>
        ))}
        </>
    </Main>
  )
}

export default EmployeeIndex