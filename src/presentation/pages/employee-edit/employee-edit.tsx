import { useParams } from "react-router-dom";
import { Main, EmployeeForm } from '@/presentation/components'
import { useState } from "react";
const EmployeeEdit = () => {
  let { id } = useParams();
  const [employee, setEmployee] = useState({
    id: parseInt(id || ''),
    name: 'Employees Edit',
    email: 'Employeesemail@gmail.com',
    phone: '123123123123',
    salary: '124123',
    created_at: '2022-08-20',
    birth_date: '1990-12-20',
    document: '8123123'
  });

  return (
    <Main>
      <>
        <h4>Editar Funcionario</h4>
        <EmployeeForm initialValues={employee} />
      </>
    </Main>

  )
}

export default EmployeeEdit