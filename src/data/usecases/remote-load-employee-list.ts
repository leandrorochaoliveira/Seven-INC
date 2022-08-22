import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, AccessDeniedError } from '@/domain/errors'
import { LoadEmployeeList } from '@/domain/usecases'
import { EmployeeListModel } from '@/data/models'

export class RemoteloadEmployeeList implements LoadEmployeeList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<EmployeeListModel[]>
  ) {}

  async loadAll (): Promise<LoadEmployeeList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteEmployees = httpResponse.body || []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteEmployees
      case HttpStatusCode.noContent: return []
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}