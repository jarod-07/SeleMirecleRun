import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../../App.css';
import { getAnEntity } from '../../Utils/getAnEntity';
export const EmployeePayments = () => {
  const activeProject = useSelector( ( state ) => state.activeProject.projectName );
  const employeeEmail = useSelector( ( state ) => state.user.user.Email ); 

  const [ employeePayments, setEmployeePayments ] = useState( [] );
  const [ isLoading, setIsLoading ] = useState( true ); 

  const removeTimeFromDate = ( date ) =>{
    let myDate = new Date( date );
    let noTimeDate = new Date( myDate.getFullYear(), myDate.getMonth(), myDate.getDate() );
    return noTimeDate.toDateString();
  };

  useEffect( () => {
    setIsLoading( true );
    const getEmployeeInfo = async () =>{

      const infoReceived =  await getAnEntity( 'employeePayments', `/${activeProject}/${employeeEmail}` );
      setEmployeePayments( infoReceived );
      console.log( infoReceived );
      setIsLoading( false );
    };
    getEmployeeInfo();
  }, [ activeProject, employeeEmail ] );

  return  ( isLoading ? <h1>loading</h1> :
    <>
      {/* <div className='details-table-button'>
      </div> */}
      <h2 className='table-button'>My Payments</h2> 
      <table className='Table'>
        <thead>
          <tr className='table-header'>
            {/* <th className='left-td table-left-border'>Type of Contract</th> */}
            <th className='left-td table-left-border'>Contract Type</th>
            <th className='right-td'>Start Date</th>
            <th className='right-td'>End Date</th>
            <th className='right-td'>Hours Worked</th>
            <th className='right-td'>Hourly Wage</th>
            <th className='right-td'>Gross Salary</th>
            <th className='right-td'>Mandatory Deductions</th>
            <th className='right-td'>Voluntary Deductions</th>
            <th className='right-td'>Benefits</th>
            <th className='table-right-border right-td'>Net Salary</th>
          </tr>
        </thead>
        <tbody>
          {employeePayments.map( ( row ) => (
            <tr key={row.ConsecutivoPago}>
              <td  className='left-td table-left-border'>{row.TipoContrato}</td>
              <td  className='right-td'>{removeTimeFromDate(  row.FechaIncio )}</td>
              <td className='right-td'>{removeTimeFromDate( row.FechaFin )}</td>
              <td className='right-td'>{ row.SalarioBruto / row.SalarioPorHoras }</td>
              <td className='right-td'>{ row.SalarioPorHoras }</td>
              <td className='right-td'>{ row.SalarioBruto }</td>
              <td className='right-td'>{ row.MontoTotalDeduccionesObligatoriasEmpleado }</td>
              <td className='right-td'>{ row.MontoTotalDeduccionesObligatoriasEmpleador }</td>
              <td className='right-td'>{ row.MontoTotalBeneficios }</td>
              <td className='right-td'>{ row.SalarioNeto }</td>
            </tr>
          ) )}
        </tbody>
      </table>
    </>
  );
};