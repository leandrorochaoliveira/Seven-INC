import { makeRemoteloadEmployeeList } from '@/main/factories/usecases'
import { EmployeeIndex } from '@/presentation/pages'

export const MakeEmployeeIndex: React.FC = () => {
  return (
    <EmployeeIndex
      loadEmployeeList={makeRemoteloadEmployeeList()}
    />
  )
}