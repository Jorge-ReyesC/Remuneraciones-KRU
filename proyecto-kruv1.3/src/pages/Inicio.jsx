import React from 'react';
import Card from 'react-bootstrap/Card';


const Inicio= () => {
    return (
        <div>
            <div className='box-text'>
                <h1>Bienvenido de vuelta.</h1>
                <h2 className='parrafo'>Puedes realizar tus actividades que estan disponibles para ti!</h2>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src="https://es.justexw.com/wp-content/uploads/sites/2/importar-datos-web-en-excel.jpg" />
                            <Card.Body>
                                <Card.Title>Agrega tus empleados!</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                            </Card.Body>
                    </Card>   
                    </div>
                    <div className='col-md-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://trucoslondres.com/wp-content/uploads/2017/04/people-1.jpg" />
                            <Card.Body>
                                <Card.Title>Revisa la informacion de tus empleados</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                            </Card.Body>
                    </Card>  
                    </div>
                    <div className='col-md-4'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.workmeter.com/wp-content/uploads/2022/07/beneficios-antiguedad-empleado-scaled.jpg" />
                            <Card.Body>
                                <Card.Title>Pagale a tus empleados!</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                            </Card.Body>
                    </Card>  
                    </div>
                </div>
            </div>
        </div>     
    );
};

export default Inicio;