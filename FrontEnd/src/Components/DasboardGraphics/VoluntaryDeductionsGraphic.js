import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BarPlot } from '../Plots/BarPlot'
import { getVoluntaryDeductionsStatistics } from '../../Utils/VoluntaryDeductions/getVoluntaryDeductionsStatistics';

export const VoluntaryDeductionsGraphic = () => {

  const user = useSelector((state) => state.user.user);
  const [infoReceived, setInfoReceived] = useState(false);
  const [voluntaryDeductionsLables, setVoluntaryDeductionsLabels] = useState([]);
  const [voluntaryDeductionsData, setVoluntaryDeductionsData] = useState([]);
  useEffect(() => {
    const getStatistics = async () => {
      const data = await getVoluntaryDeductionsStatistics(user.Cedula);
      if (data) {
        let labels = [];
        let dataValues = [];
        data.forEach((element) => {
          labels.push(element.Nombre);
          dataValues.push(element.empleados);
        });
        setVoluntaryDeductionsLabels(labels);
        setVoluntaryDeductionsData(dataValues);
        setInfoReceived(true);
      }
    };
    getStatistics();
  }, []);

  return !infoReceived ? <div className='loader' ></div > : (
    <div className='voluntaryDeductions-graphic-container'>
      <h3> Voluntary deductions selected by employees</h3>
      <BarPlot
        dataLabels={voluntaryDeductionsLables}
        dataValues={voluntaryDeductionsData}
      />
    </div>

  )
}