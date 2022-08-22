import { useFormik } from 'formik';
import * as yup from 'yup';
import { TextField, Button, Grid, InputAdornment} from '@mui/material';
import { default as NumberFormat } from 'react-number-format';
import { EmployeeModel } from '@/data/models';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Digite um e-mail valido')
    .required('E-mail é obrigatorio'),
  phone: yup.string(),
  created_at: yup.date().default(function () {
    return new Date();
  }),
  birth_date:  yup.date().default(function () {
    return new Date();
  })
/*   document: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'), */
});

type Props = {
  initialValues?: EmployeeModel;
};

const EmployeeForm: React.FC<Props> = ({initialValues}: Props) => {
  const initialValuesEmpty = {
    id: null,
    name: '',
    email: '',
    phone: '',
    salary: '',
    created_at: '',
    document: '',
    birth_date: '',
  }
  const formik = useFormik({
    initialValues: initialValues || initialValuesEmpty ,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
      <form onSubmit={formik.handleSubmit} style={{background: '#fff', padding: '16px', borderRadius: '8px',}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Nome"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              label="telefone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone
              &&
              Boolean(formik.errors.phone)}
              helperText={formik.touched.phone
              &&
              formik.errors.phone} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="salary"
              name="salary"
              label="Salario"
              value={formik.values.salary}
              onChange={formik.handleChange}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
              error={formik.touched.salary
              &&
              Boolean(formik.errors.salary)}
              helperText={formik.touched.salary
              &&
              formik.errors.salary} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="created_at"
              name="created_at"
              label="Data de contratação"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formik.values.created_at}
              onChange={formik.handleChange}
              error={formik.touched.created_at
              &&
              Boolean(formik.errors.created_at)}
              helperText={formik.touched.created_at
              &&
              formik.errors.created_at} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="document"
              name="document"
              label="CPF"
              value={formik.values.document}
              onChange={formik.handleChange}
              error={formik.touched.document
              &&
              Boolean(formik.errors.document)}
              helperText={formik.touched.document
              &&
              formik.errors.document} />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              id="birth_date"
              name="birth_date"
              label="Data de nascimento"
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formik.values.birth_date}
              onChange={formik.handleChange}
              error={formik.touched.birth_date
              &&
              Boolean(formik.errors.birth_date)}
              helperText={formik.touched.birth_date
              &&
              formik.errors.birth_date} />
          </Grid>
          <Grid item xs={12} >
            <Button color="primary" variant="contained" type="submit">
              Enviar
            </Button>
          </Grid>    
        </Grid>
      </form>
  );
};

export default EmployeeForm