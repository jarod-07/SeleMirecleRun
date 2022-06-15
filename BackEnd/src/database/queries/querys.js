export const queries = {
  // User queries
  getAllUSers: 'Select * From Usuarios',
  createNewUser: 'Insert into Usuarios (Email,Contrasenia,Roles) values(@Email,@Contrasenia,@Roles)',
  createNewEmployee: 'Insert into Empleado (Cedula, Nombre, Apellido1, Apellido2, Telefono, Email) values(@Cedula, @Nombre, @Apellido1, @Apellido2, @Telefono, @Email)',
  getUserByEmail: 'Select * From Usuarios Where Email = @Email',
  verifyCredentials: 'Select * From Usuarios Where Email = @Email AND Contrasenia = @Contrasenia',

  // Payroll period queries
  getPeriodos: 'Select * from Periodo',

  //Employees
  getAllEmployees: 'Select e.Nombre, e.Apellido1, e.Apellido2, e.Cedula,e.Email, ecp.TipoContrato from  Empleado e inner join EmpleadoYContratoSeAsocianAProyecto ecp on e.Cedula = ecp.CedulaEmpleado and ecp.NombreProyecto = @Proyecto;',
  getEmployeeByID: 'Select * From Empleado Where Cedula = @Cedula',
  verifyEmployeeContractProject: 'Select * from EmpleadoYContratoSeAsocianAProyecto ecp where ecp.CedulaEmpleado = @Cedula AND ecp.NombreProyecto = @Proyecto',
  addContractOfAnEmployee:
    `Insert into EmpleadoYContratoSeAsocianAProyecto 
  values(@Cedula,@TipoJornada,@NombreProyecto,@NombreServicio,@SalarioPorHora,
    @FechaInicioContrato,@FechaFinContrato,@ValorServicio)`,

  // Voluntary Deduction queries
  getVolDeductions: 'Select * From DeduccionesVoluntarias Where NombreProyecto = @NombreProyecto',
  createNewVolDeduction: 'Insert into DeduccionesVoluntarias (Nombre, NombreProyecto, Costo, Descripcion) values (@Nombre, @NombreProyecto, @Costo, @Descripcion)',
  getVolDeductionsByName: 'Select Nombre from DeduccionesVoluntarias where Nombre = @Nombre and NombreProyecto = @NombreProyecto',

  // Benefit queries
  getBenefits: 'Select * from Beneficios where NombreProyecto = @Proyecto',
  getBenefitsByName: 'select Nombre from Beneficios where Nombre = @Nombre and NombreProyecto = @Proyecto',
  getAllEmployers: 'Select * From Empleador',
  getEmployerByID: 'Select * From Empleador Where Cedula = @Cedula',
  createNewEmployer: 'Insert into Empleador (Cedula, Nombre, Apellido1, Apellido2, Telefono, Email) values(@Cedula, @Nombre, @Apellido1, @Apellido2, @Telefono, @Email)',

  // Employer queries
  getAllContracts: 'Select TipoJornada from Contrato',
  getAllEmployeesByID: 'Select * From Empleador Where Cedula = @Cedula',
  createBenefit: 'Insert into Beneficios (Nombre, NombreProyecto, CostoActual, Descripción) values (@Nombre, @NombreProyecto ,@CostoActual, @Descripción)'
};