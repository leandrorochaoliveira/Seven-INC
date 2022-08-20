/* import { makeLogin, makeSignUp, makeSurveyList, makeSurveyResult } from '@/main/factories/pages'
import { setCurrentAccountAdapter, getCurrentAccountAdapter } from '@/main/adapters'
import { PrivateRoute } from '@/main/proxies'
import { currentAccountState } from '@/presentation/components'
 */

import { EmployeeIndex, EmployeeCreate, EmployeeShow, EmployeeEdit} from '@/presentation/pages';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import React from 'react'

const Router = () => {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<EmployeeIndex />}/>
          <Route path="employee/create"  element={<EmployeeCreate />}/>
          <Route path="employee/:id" element={<EmployeeShow />} />
          <Route path="employee/edit/:id" element={<EmployeeEdit />} />
        </Routes>
      </BrowserRouter>
  )
}

export default Router
