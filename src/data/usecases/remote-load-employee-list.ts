import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError, AccessDeniedError } from '@/domain/errors'
import { LoadEmployeeList } from '@/domain/usecases'

export class RemoteLoadSurveyList implements LoadEmployeeList {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadSurveyList.Model[]>
  ) {}

  async loadAll (): Promise<LoadEmployeeList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })
    const remoteEmployees = httpResponse.body || []
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteEmployees.map(remoteEmployee => ({
        ...remoteEmployee,
        date: new Date(remoteEmployee.date)
      }))
      case HttpStatusCode.noContent: return []
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadSurveyList {
  export type Model = {
    id: string
    question: string
    date: string
    didAnswer: boolean
  }
}
