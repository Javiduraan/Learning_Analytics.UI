import React, {useState} from "react";
import {Form, Button, Row, Col, Tabs, Tab} from "react-bootstrap";


export default function MultipleReg(){
    
    
    const [firstModelValues, firstModelSetValues] = useState({
        motherEducation: "",
        fatherEducation: "",
        studentAge: 0
    });
    
    const [secondModelValues, secondModelSetValues] = useState({
        motherEducation2: "",
        studentAssists2: 0,
        studentFreeTime2: 0
    });

    const [thirdModelValues, thirdModelSetValues] = useState({
        studentStudyTime3: 0,
        studentAssists3: 0,
        rejectedGrades3: 0
    });
    
    function handleSubmitFirstModel(evt) {
        evt.preventDefault();
        //Llamada a Endpoint del primer modelo aqui
    }

    function handleSubmitSecondModel(evt) {
        evt.preventDefault();
        //Llamada a Endpoint del segundo modelo aqui
    }

    function handleSubmitThirdModel(evt) {
        evt.preventDefault();
        //Llamada a Endpoint del tercer modelo aqui
    }
    
    function handleChangeFirstModel(evt) {
        const { target } = evt;
        const { name, value } = target;

        const newValues = {
          ...firstModelValues,
          [name]: value,
        };
        

        firstModelSetValues(newValues);
    }

    function handleChangeSecondModel(evt) {
        const { target } = evt;
        const { name, value } = target;

        const newValues = {
          ...firstModelValues,
          [name]: value,
        };
        

        secondModelSetValues(newValues);
    }

    function handleChangeThirdModel(evt) {
        const { target } = evt;
        const { name, value } = target;

        const newValues = {
          ...firstModelValues,
          [name]: value,
        };
        

        secondModelSetValues(newValues);
    }


    return (
      <>
        <div>
            <h1>Multiple Regression Page</h1>
        </div>
        <div className="">        
            <p>
               Dentro de esta página vemos una regresión simple en donde podemos visualizar la gráfica de predicción de calificación <br/>Instrucciones: Seleccione el atributo con el cual quiere generar la gráfica de predicción
            </p>
        </div>
        <div className="container">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Modelo 1">
            <Form onSubmit={handleSubmitFirstModel}>
            <Form.Group as={Row} className="mb-3" controlId="formMotherInfo">
                <Form.Label column sm={5}>
                Nivel de educacion de la madre:
                </Form.Label>
                <Col sm={7}>
                <Form.Control as="select" placeholder="Seleccionar..." value={firstModelValues.motherEducation} onChange={handleChangeFirstModel}>
                    <option value="0">Sin estudios</option>
                    <option value="1">Educacion primaria (hasta 4° grado)</option>
                    <option value="2">Hasta 3° de secundaria</option>
                    <option value="3">Preparatoria</option>
                    <option value="4">Licenciatura o superior</option>
                </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formFatherInfo">
                <Form.Label column sm={5}>
                Nivel de educacion del padre:
                </Form.Label>
                <Col sm={7}>
                <Form.Control as="select" placeholder="Seleccionar..." value={firstModelValues.fatherEducation} onChange={handleChangeFirstModel}>
                    <option value="0">Sin estudios</option>
                    <option value="1">Educacion primaria (hasta 4° grado)</option>
                    <option value="2">Hasta 3° de secundaria</option>
                    <option value="3">Preparatoria</option>
                    <option value="4">Licenciatura o superior</option>
                </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formStudAge">
                <Form.Label column sm={5}>
                Edad del Alumno:
                </Form.Label>
                <Col sm={1}>
                <Form.Control as="input" type="number" min="15" max="22" value={firstModelValues.studentAge} onChange={handleChangeFirstModel}>
                </Form.Control>
                </Col>
                <br/>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form.Group>
                <div className="container">
                    <hr/>
                    <h1>Resultado obtenido: </h1>
                </div>
            </Form>
                
            </Tab>
            <Tab eventKey="profile" title="Modelo 2">
            <Form onSubmit={handleSubmitSecondModel}>
            <Form.Group as={Row} className="mb-3" controlId="formMotherInfo2" value={secondModelValues.motherEducation2} onChange={handleChangeSecondModel}>
                <Form.Label column sm={5}>
                Nivel de educacion de la madre:
                </Form.Label>
                <Col sm={7}>
                <Form.Control as="select" placeholder="Seleccionar...">
                    <option value="0">Sin estudios</option>
                    <option value="1">Educacion primaria (hasta 4° grado)</option>
                    <option value="2">Hasta 3° de secundaria</option>
                    <option value="3">Preparatoria</option>
                    <option value="4">Licenciatura o superior</option>
                </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formAssist2">
                <Form.Label column sm={5}>
                Asistencias:
                </Form.Label>
                <Col sm={1}>
                <Form.Control as="input" type="number" min="0" max="93" value={secondModelValues.studentAssists2} onChange={handleChangeSecondModel}>
                </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formFreeTime2">
                <Form.Label column sm={5}>
                Tiempo Libre despues de la escuela:
                </Form.Label>
                <Col sm={3}>
                <Form.Control as="select" placeholder="Seleccionar..." value={secondModelValues.studentFreeTime2} onChange={handleChangeSecondModel}>
                    <option value="1">Muy bajo</option>
                    <option value="2">Bajo</option>
                    <option value="3">Medio</option>
                    <option value="4">Alto</option>
                    <option value="5">Muy alto</option>
                </Form.Control>
                </Col>
                <br/>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form.Group>
                <div className="container">
                    <hr/>
                    <h1>Resultado obtenido: </h1>
                </div>
            </Form>

            </Tab>
            <Tab eventKey="contact" title="Modelo 3">
            <Form onSubmit={handleSubmitThirdModel}>
            <Form.Group as={Row} className="mb-3" controlId="formStudyTime3">
                <Form.Label column sm={5}>
                Tiempo de estudio:
                </Form.Label>
                <Col sm={7}>
                <Form.Control as="select" placeholder="Seleccionar..." value={thirdModelValues.studentStudyTime3} onChange={handleChangeThirdModel}>
                    <option value="1">Menos de dos horas</option>
                    <option value="2">De dos a cinco horas</option>
                    <option value="3">De cinco a diez horas</option>
                    <option value="4">Mayor a diez horas</option>
                </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formAssist3">
                <Form.Label column sm={5}>
                Asistencias:
                </Form.Label>
                <Col sm={1}>
                <Form.Control as="input" type="number" min="0" max="93" value={thirdModelValues.studentAssists3} onChange={handleChangeThirdModel}>
                </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formRejectedAge3">
                <Form.Label column sm={5}>
                Numero de materias reprobadas:
                </Form.Label>
                <Col sm={3}>
                <Form.Control as="select" placeholder="Seleccionar..." value={thirdModelValues.rejectedGrades3} onChange={handleChangeThirdModel}>
                    <option value="1">Una</option>
                    <option value="2">Dos</option>
                    <option value="3">Tres</option>
                    <option value="4">Cuatro</option>
                </Form.Control>
                </Col>
                <br/>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form.Group>
                <div className="container">
                    <hr/>
                    <h1>Resultado obtenido: </h1>
                </div>
            </Form>
            </Tab>
            </Tabs>
        </div>
      </>
    );
}