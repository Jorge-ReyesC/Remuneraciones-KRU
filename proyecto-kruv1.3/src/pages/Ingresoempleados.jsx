import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const Ingresoempleados= () => {
    return (
    <div>
        <div className='box-text'>
            <h1>Ingreso de empleados.</h1>
            <h2 className='parrafo'>Aqui puedes ingresar la información personal de tus empleados</h2>
        </div>
        <div className='container'>
            <Form>
                <div className='row'>
                    <div className='col'> 
                    <Form.Group className="mb-3" controlId="nombre">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="" required />
                    </Form.Group>
                    </div>
                    <div className='col'>
                    <Form.Group className="mb-3" controlId="apellido">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control type="text" placeholder="" required/>
                    </Form.Group>
                    </div>
                    <div className='col'>
                    <Form.Group className="mb-3" controlId="rut">
                        <Form.Label>Rut</Form.Label>
                        <Form.Control type="text" placeholder="" required/>
                    </Form.Group> 
                    </div>
                    <div className='col'>
                    <Form.Group className="mb-3" controlId="telefono">
                        <Form.Label>Telefono</Form.Label>
                        <Form.Control type="text" placeholder="" required/>
                    </Form.Group>
                    </div>
                    <div className='col'>
                    <Form.Group className="mb-3" controlId="nacionalidad">
                        <Form.Label>Nacionalidad</Form.Label>
                        <Form.Control type="text" placeholder="" required/>
                    </Form.Group>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                    <h1>Haberes</h1>
                    <Form.Group className="mb-3" controlId="sueldo-base">
                        <Form.Label>Sueldo Base</Form.Label>
                        <Form.Control type="text" placeholder="" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="horas-extras">
                        <Form.Label>Horas extras</Form.Label>
                        <Form.Control type="text" placeholder="" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="colacion">
                        <Form.Label>Colación</Form.Label>
                        <Form.Control type="text" placeholder="" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="movi">
                        <Form.Label>Movilizacion</Form.Label>
                        <Form.Control type="text" placeholder="" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="carga-familiar">
                        <Form.Label>Carga familiar</Form.Label>
                        <Form.Control type="text" placeholder="" required/>
                    </Form.Group>    
                    </div>
                    <div className='col'>
                    <h1>Descuentos</h1>
                    <Form.Group className="mb-3" controlId="afp">
                        <Form.Label>AFP</Form.Label>
                        <Form.Control type="text" placeholder="" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="prevision">
                    <Form.Label>Previsión</Form.Label>
                    <Form.Select required>
                    <option disabled >Seleccione una opción</option>
                    <option >Isapre</option>
                    <option >Fonasa</option>
                    </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="seguro-cesantia">
                        <Form.Label>Seguro de censantia</Form.Label>
                        <Form.Control type="text" placeholder="" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="otro-descuento">
                        <Form.Label>Otros descuentos (Opcional)</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                    </div>
                </div>
                <Button className='Buttonsumit' variant="primary" type="submit">
                Submit
                </Button>
            </Form>
        </div>
    </div>

    );
};

export default Ingresoempleados;