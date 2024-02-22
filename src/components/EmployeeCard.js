import React from 'react'

const EmployeeCard = ({ employee }) => {
  return (
    <div className='employee-card'>
      <img src={employee.img} alt='Фото сотрудника'></img>
      <h2>{employee.name}</h2>
      <h3>{employee.specialization}</h3>
      <p>{employee.desc}</p>
    </div>
  )
}

export default EmployeeCard