// Imports
import React, { useState } from 'react';
import './App.css';
import user from './storage';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Table} from 'react-bootstrap';
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";


function App() {
  const [users, setUser] = useState(user);
  const [addFormData, setAddFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [viewFormData, setViewFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    index: "",
  });


  // Input Clear Func
  const clear = () => {
    setAddFormData({ ...addFormData, name: '', email: "", phone: "", address: "" })
  }

  // Create Modal
  const [show, setShow] = useState(false);
  const handleClose = () => {clear();setShow(false);}
  const handleShow = () => setShow(true);

  // Update Modal
  const [upShow, setUpShow] = useState(false);
  const handClose = () => {clear();setUpShow(false);}
  const handShow = () => setUpShow(true);


  // Create Func
  const formSubmit = (event) => {
    event.preventDefault();

    const newUser = {
      name: addFormData.name,
      email: addFormData.email,
      address: addFormData.address,
      phone: addFormData.phone,
    };

    const newUsers = [...users, newUser];
    setUser(newUsers);
    handleClose();
    clear();
  };


  // view Data
const viewData = (i)=>{
  const usersData = [...users];
  const userData = usersData[i];
  setViewFormData({
    name: userData.name,
    email: userData.email,
    phone: userData.phone,
    address: userData.address,
    index : i,
  })
  
  handShow();
}

// Edit Func
  const editFormSubmit = (i) => {
    // event.preventDefault();
    const ind = parseInt(i);
    const editUser = {
      name: viewFormData.name,
      email: viewFormData.email,
      address: viewFormData.address,
      phone: viewFormData.phone,
    };
    const oldData = [...users];
    oldData.splice(ind,1,editUser);
    // console.log(oldData);
    setUser(oldData);
    handClose();
    clear();
  };

  // Delete Func
  const onDelete = (i) => {
    const oldUsers = [...users];
    const index = parseInt(i);
    // const index = users.findIndex((user) => user.name === userName);

    oldUsers.splice(index, 1);

    setUser(oldUsers);
  };

  return (
    <>
    <div className="App">
      <Table bordered >
        <thead>
          <tr>
            <th>SL NO</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((data, i) =>
            <tr>
              <td>{i + 1}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.address}</td>
              <td><Button style={{"backgroundColor":"#b8ccf3", "border":"none"}} onClick={()=>viewData(i)}><BiEditAlt color='black' /></Button><Button style={{"backgroundColor":"#b8ccf3", "border":"none", "marginLeft":"10px"}}  onClick={()=>onDelete(i)}><RiDeleteBinLine color='black' /></Button></td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button style={{"backgroundColor":'#7ea2e9',"color":"black","border":"none"}} onClick={handleShow}>Add User</Button>
    </div>
    
    {/* Create user Modal */}
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter name..."
          value={addFormData.name}
          onChange={(e) => setAddFormData({ ...addFormData, name: e.target.value })}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter email..."
          value={addFormData.email}
          onChange={(e) => setAddFormData({ ...addFormData, email: e.target.value })}
        />
        <input
          type="text"
          name="phone"
          required="required"
          placeholder="Enter phone number..."
          value={addFormData.phone}
          onChange={(e) => setAddFormData({ ...addFormData, phone: e.target.value })}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address..."
          value={addFormData.address}
          onChange={(e) => setAddFormData({ ...addFormData, address: e.target.value })}
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={formSubmit}>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Update user Modal */}
      <Modal show={upShow} onHide={handClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <input
          type="text"
          name="name"
          required="required"
          placeholder="Enter name..."
          value={viewFormData.name}
          onChange={(e) => setViewFormData({ ...viewFormData, name: e.target.value })}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter email..."
          value={viewFormData.email}
          onChange={(e) => setViewFormData({ ...viewFormData, email: e.target.value })}
        />
        <input
          type="text"
          name="phone"
          required="required"
          placeholder="Enter phone number..."
          value={viewFormData.phone}
          onChange={(e) => setViewFormData({ ...viewFormData, phone: e.target.value })}
        />
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter address..."
          value={viewFormData.address}
          onChange={(e) => setViewFormData({ ...viewFormData, address: e.target.value })}
        />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() =>editFormSubmit(viewFormData.index)}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
