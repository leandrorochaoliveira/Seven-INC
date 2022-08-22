import React from "react";
import { useNavigate } from "react-router-dom";

import VisibilityIcon from '@mui/icons-material/Visibility';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import moment from 'moment'
import { IconButton, Button, } from '@mui/material';
import { EmployeeListModel } from '@/data/models'

const EmployeeListItem: React.FC<EmployeeListModel> = ({id, name, email, phone,salary, created_at}: EmployeeListModel) => {
  let navigate = useNavigate();
return (
  <div className="employee-list-item">
    <div className="employee-list-item-show">
        <IconButton aria-label="visualizar"
          onClick={() => {
            navigate(`/employee/${id}`);
          }}>
          <VisibilityIcon />
        </IconButton>
    </div>
    <div className="employee-list-item-name">
      {name}
    </div>
    <div className="employee-list-item-contact">
      <small>{email}<br />
      {phone}</small>
    </div>
    <div className="employee-list-item-professional">
      <small>{salary}<br />
      {moment(created_at).format('DD/MM/YYYY')}</small>
    </div>
    <div className="employee-list-item-actions">
      
      <Button variant="outlined" startIcon={<EditOutlinedIcon />}
        onClick={() => {
          navigate(`/employee/edit/${id}`);
        }}>
        Editar
      </Button>

      <IconButton aria-label="delete" color="error">
        <DeleteForeverOutlinedIcon />
      </IconButton>
    </div>
  </div>
)
}

export default EmployeeListItem
