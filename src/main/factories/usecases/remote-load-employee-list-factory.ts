import { makeApiUrl, makeAxiosHttpClient } from '@/main/factories/http'
import { LoadEmployeeList } from '@/domain/usecases'
import { RemoteloadEmployeeList } from '@/data/usecases'

export const makeRemoteloadEmployeeList = (): LoadEmployeeList =>
  new RemoteloadEmployeeList(makeApiUrl('/data/employeelist.json'), makeAxiosHttpClient())
