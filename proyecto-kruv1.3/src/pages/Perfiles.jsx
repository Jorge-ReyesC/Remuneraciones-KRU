import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';




const Perfiles = () => {
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
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary">Editar</Button>
                                <Button variant="secondary">Eliminar</Button>
                            </ButtonGroup>
                            </td>
                        </tr>
                        <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary">Editar</Button>
                                <Button variant="secondary">Eliminar</Button>
                            </ButtonGroup>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>Larry the Bird</td>
                            <td>@twitter</td>
                            <td>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="secondary">Editar</Button>
                                <Button variant="secondary">Eliminar</Button>
                            </ButtonGroup>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
                

        </div>
    );
};

export default Perfiles;