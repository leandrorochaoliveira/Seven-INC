export interface LoadEmployeeList {
  loadAll: () => Promise<LoadEmployeeList.Model[]>
}

export namespace LoadEmployeeList {
  export type Model = {
    id: string
    question: string
    date: Date
    didAnswer: boolean
  }
}
