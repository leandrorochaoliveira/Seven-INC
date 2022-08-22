export interface LoadEmployeeList {
  loadAll: () => Promise<LoadEmployeeList.Model[]>
}

export namespace LoadEmployeeList {
  export type Model = {
    id: number
    name: string
    email: string
    phone: string
    salary: string
    created_at: string
  }
}
