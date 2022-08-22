import { MakeEmployeeIndex } from '@/main/factories/pages'
import { EmployeeCreate, EmployeeShow, EmployeeEdit} from '@/presentation/pages';

import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#22305a',
    },
    secondary: {
      main: '#317abd',
    },
    error: {
      main: red[300]
    }
  },
});

const Router = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MakeEmployeeIndex />}/>
          <Route path="employee/create"  element={<EmployeeCreate />}/>
          <Route path="employee/:id" element={<EmployeeShow />} />
          <Route path="employee/edit/:id" element={<EmployeeEdit />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default Router
