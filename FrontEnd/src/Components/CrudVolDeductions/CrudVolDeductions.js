import {
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
  } from "reactstrap";
  
  import { useState } from "react";
  import '../../App.css'
  import "bootstrap/dist/css/bootstrap.min.css";
  
  
  const database = [
    { id: 1, name: "Insurance"},
    { id: 2, name: "Charity"},
  ];
  
  export const CrudVolDeductions = () => {
    const [data, setData] = useState(database);
    const [viewModal, setViewModal] = useState(false);
    const [name, setName] = useState('');
    const [warning, setWarning] = useState('');
  
    const addToTable = () => {
      if (name) {
        const names = [];
        data.map((index) => {
          names.push(index.name);
        })
        if (!names.includes(name)) {
          const newData = {
            id: data.length + 1,
            name: name,
          };
          setData([...data, newData]);
          setWarning('');
          setViewModal(false);
          setName("");
        } else {
          setWarning('*That benefit already exist')
        }
  
      }
      else {
        setWarning('*Please enter all the values')
      }
    }
  
    return (
      <>
        <Container className="content-container">
          <br />
          <button className="create-button" onClick={() => setViewModal(true)}>
            {" "}
            Create New Voluntary Deduction
          </button>
          <br />
          <table className="Table">
            <thead>
              <tr className="table-header">
                <th className="table-left-border">#</th>
                <th>Voluntary Deduction</th>
                <th>Edit</th>
                <th className="table-right-border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((element) => (
                <tr key={element.id}>
                  <td className="tds">{element.id}</td>
                  <td>{element.name}</td>
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
        <Modal className='modal-window' isOpen={viewModal}>
          <ModalHeader>
            <div>
              <h3>Insert New Voluntary Deduction</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>#:</label>
              <input
                className="form-control"
                readOnly
                type="text"
                value={data.length + 1}
              ></input>
            </FormGroup>
  
            <FormGroup>
              <label>Name:</label>
              <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <label className="warning-message">{warning}</label>
            <button
              className="button create-button"
              onClick={() => {
                addToTable();
              }}
            >
              Insert
            </button>
            <button className="button cancel-button" onClick={() => {
              setViewModal(false)
              setName("");
              setWarning('');
            }}>
              Cancel
            </button>
          </ModalFooter>
        </Modal>
      </>
    )
  };
  