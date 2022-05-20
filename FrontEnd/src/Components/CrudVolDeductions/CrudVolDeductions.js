import { Container } from "reactstrap";

import { useState, useEffect, useContext } from "react";
import '../../App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { VolDeductionsModal } from "./VolDeductionsModal";
import ProjectContext from "../../Contexts/ProjectContext";

export const CrudVolDeductions = () => {
  const [data, setData] = useState([{}]);
  const { activeProject } = useContext(ProjectContext);
  const [infoReceived, setInfoReceived] = useState(false);

  const apiVolDeductions = `http://localhost:4000/volDeductions/${activeProject}`

  useEffect(() => {
    const fetchSeleAPI = async () => {
      try {
        const response = await fetch(apiVolDeductions);
        const newData = await response.json();
        setData(newData);
        console.log(newData)
        setInfoReceived(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSeleAPI();
  }, []);

  return !infoReceived ? <div className="loader" ></div > : (
    <>
      <Container className="content-container">
        <br />
        <VolDeductionsModal data={data} setData={setData} />
        <br />
        <table className="Table">
          <thead>
            <tr className="table-header">
              <th className="table-left-border">Voluntary Deduction </th>
              <th>Edit</th>
              <th className="table-right-border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element) => (
              <tr key={element.Nombre}>
                <td>{element.Nombre}</td>
                <td>
                  <button className=" button"> Edit </button>
                </td>
                <td>
                  <button className=" button cancel-button" > Delete </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>

    </>
  )

};
