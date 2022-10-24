import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Ventanaeditar from '../components/Editwindow';
import {
    BiEdit
}from "react-icons/bi";




const Perfiles = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const handleClose = () => {  
        setModalShow(false);
        
    };
    const handleShow = () => setModalShow(true);

    return (
        <div>
            <div className='box-text'>
                <h1>Perfiles</h1>
                <h2 className='parrafo'>Aqui puedes ver los empleados que fueron ingresados al sistema.</h2>
            </div>
            <div className='box3'>
                <Table striped bordered hover  variant='dark' >
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Rut</th>
                            <th>Telefono</th>
                            <th>Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td >Larry </td>
                            <td >17283834-8 </td>
                            <td>978675643</td>
                            <td>
                                <Button variant="primary" onClick={handleShow}>
                                <BiEdit ></BiEdit>
                                </Button>
                                <Ventanaeditar
                                show={modalShow}
                                onHide={handleClose}
                                />   
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default Perfiles;