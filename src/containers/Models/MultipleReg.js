import React, {useState} from "react";
import {Form, Button, Row, Col, Tabs, Tab} from "react-bootstrap";
import axios from "axios";

export default function MultipleReg(){

    //graficas generadas con el modelo
    const img5 = "/images/imagen_modelom1.png";
    const img6 = "/images/imagen_modelom2.png";
    const img7 = "/images/imagen_modelom3.png";

    const [valFirstModel, setValFirstModel] = useState(0);
    const [valSecondModel, setValSecondModel] = useState(0);
    const [valThirdModel, setValThirdModel] = useState(0);

    //imagenes ocultas hasta que se desencadene el evento
    const [displayImages, setDisplayImages] = useState({img5: false, img6: false, img7:false});

    //valores iniciales modelo1 
    const [firstModelValues, firstModelSetValues] = useState({
        motherEducation: "",
        fatherEducation: "",
        studentAge: 0
    });

    //contantes iniciales modelo2
    const [secondModelValues, secondModelSetValues] = useState({
        motherEducation: "",
        studentAbsences: 0,
        studentFreeTime: 0
    });

    //contantes iniciales modelo3
    const [thirdModelValues, thirdModelSetValues] = useState({
        studentStudyTime: 0,
        studentAbsences: 0,
        rejectedGrades: 0
    });
    
    //funcion para la conectar con el api y hacer uso de el codigo python modelo 1.
    function handleSubmitFirstModel(evt) {
        evt.preventDefault();
        //Llamada a Endpoint del primer modelo aqui
        axios.post("https://localhost:5001/api/User/FirstModelSubmit", {
            motherEducation: firstModelValues.motherEducation,
            fatherEducation: firstModelValues.fatherEducation,
            studentAge: firstModelValues.studentAge
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                setValFirstModel(res.data);
            }
        }).catch((err) => {
            console.log("Error en handleSubmitFirstModel" + err);
        });
    }

    //función para conectar con el api modelo 2
    function handleSubmitSecondModel(evt) {
        evt.preventDefault();
        //Llamada a Endpoint del segundo modelo aqui
        axios.post("https://localhost:5001/api/User/SecondModelSubmit", {
            motherEducation: secondModelValues.motherEducation,
            studentAbsences: secondModelValues.studentAbsences,
            studentFreeTime: secondModelValues.studentFreeTime
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                setValSecondModel(res.data);
            }
        }).catch((err) => {
            console.log("Error en handleSubmitSecondModel" + err);
        });
    }

    //función para conectar con el api modelo 3
    function handleSubmitThirdModel(evt) {
        evt.preventDefault();
        //Llamada a Endpoint del tercer modelo aqui
        axios.post("https://localhost:5001/api/User/ThirdModelSubmit", {
            studentStudyTime: thirdModelValues.studentStudyTime,
            studentAbsences: thirdModelValues.studentAbsences,
            rejectedGrades: thirdModelValues.rejectedGrades
        }).then((res) => {
            if (res.status === 200) {
                console.log(res.data);
                setValThirdModel(res.data);
            }
        }).catch((err) => {
            console.log("Error en handleSubmitThirdModel" + err);
        });
    }
    
    //obtención de valores nuevos modelo 1
    function handleChangeFirstModel(evt) {
        const { target } = evt;
        const { name, value } = target;

        const newValues = {
          ...firstModelValues,
          [name]: value,
        };
        

        firstModelSetValues(newValues);
    }

    //btención de valores nuevos modelo 2 
    function handleChangeSecondModel(evt) {
        const { target } = evt;
        const { name, value } = target;

        const newValues = {
          ...secondModelValues,
          [name]: value,
        };
        

        secondModelSetValues(newValues);
    }

    //obtención de valores nuevos modelo 3
    function handleChangeThirdModel(evt) {
        const { target } = evt;
        const { name, value } = target;

        const newValues = {
          ...thirdModelValues,
          [name]: value,
        };
        

        thirdModelSetValues(newValues);
    }


    return (
      <>
        <div>
            <h1>Regresión Múltiple</h1>
        </div>
        <div className="">        
            <p align="justify">
               Dentro de esta página vemos una regresión simple en donde podemos visualizar la gráfica de predicción de calificación
                <br/>
                Recordando una regresión múltiple es un modelo el cual trata de ajustar las variables 
                dependientes contra más de una variable independiente para de ese modo obtener una predicción.
                <br/>
                <br/>
                <b>Instrucciones: </b> Seleccione el atributo con el cual quiere generar la gráfica de predicción, 
                para hacer una nueva prediccion recargue la pagina por favor.
                <br/>
                <br/>
                <b>*Nota*</b>
                <p>Recuerde que el resultado de la predicción va desde <b>0 a 20</b> como calificación máxima a obtener por parte del alumno.</p>
            </p>
        </div>

        <div className="container" align = "left">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">

                {/* creación del modelo 1 */}
            <Tab eventKey="home" title="Modelo 1">
            <Form onSubmit={handleSubmitFirstModel}>
            <Form.Group as={Row} className="mb-3" controlId="formMotherInfo">
                <Form.Label column sm={5}>
                Nivel de educacion de la madre:
                </Form.Label>
                <Col sm={7}>
                <Form.Control as="select" 
                              placeholder="Seleccionar..." 
                              value={firstModelValues.motherEducation} 
                              onChange={handleChangeFirstModel} 
                              name="motherEducation">
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
                <Form.Control as="select" 
                              placeholder="Seleccionar..." 
                              value={firstModelValues.fatherEducation} 
                              onChange={handleChangeFirstModel} 
                              name="fatherEducation">
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
                <Col sm={2}>
                <Form.Control as="input" 
                              type="number" 
                              min="15" 
                              max="22" 
                              value={firstModelValues.studentAge} 
                              onChange={handleChangeFirstModel}
                              name="studentAge">
                </Form.Control>
                </Col>
                <br/>
            </Form.Group>
                <Button variant="primary" 
                        type="submit" 
                        onClick={() => setDisplayImages({...displayImages, img5: true})}>
                    Enviar
                </Button>
                <div className="container">
                    <hr/>
                    <h1>Resultado obtenido: {valFirstModel}</h1>
                </div>
                {displayImages.img5 ? (
                    <div align="center">
                        <p align="justify">
                            Esta grafica fue obtenida en base a todos los elementos que contienen los atributos ya mencionados.
                            En esta grafica se puede observar la cantidad de alumnos que poseen esa caracteristica contra la calificación 
                            final.
                            <br/>
                            <br/>
                            <b>Ejemplo: </b> Como se observa en la parte inferior izquierda en donde se observa G3 vs Medu y en la cual podemos obtener
                            la edad de los alumnos y la educación máxima de la madre en base a eso.
                        </p>
                        {displayImages.img5 && <img width="100%" className="d-block w-20px" src={img5} alt=""/>} 
                        <p align="justify">
                        <b>Nota</b>
                        <br/>
                            Para este modelo tambien se determinó lo siguiente:
                            <br/>
                            * El coeficiente de determinación es de: 0.1346970660406004
                            <br/>
                            * Con un error de: 4.256335977266388
                        </p>                       
                    </div>
                ) : <div></div>}
            </Form>
                
            </Tab>

            {/* creación del modelo 2 */}
            <Tab eventKey="profile" title="Modelo 2">
            <Form onSubmit={handleSubmitSecondModel}>
            <Form.Group as={Row} className="mb-3" controlId="formMotherInfo2">
                <Form.Label column sm={5}>
                Nivel de educacion de la madre:
                </Form.Label>
                <Col sm={7}>
                <Form.Control as="select" 
                              placeholder="Seleccionar..." 
                              value={secondModelValues.motherEducation} 
                              onChange={handleChangeSecondModel} 
                              name="motherEducation">
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
                <Col sm={2}>
                <Form.Control as="input" 
                              type="number" 
                              min="0" 
                              max="93" 
                              value={secondModelValues.studentAbsences} 
                              onChange={handleChangeSecondModel}
                              name="studentAbsences">
                </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formFreeTime2">
                <Form.Label column sm={5}>
                Tiempo Libre despues de la escuela:
                </Form.Label>
                <Col sm={3}>
                <Form.Control as="select" 
                              placeholder="Seleccionar..." 
                              value={secondModelValues.studentFreeTime} 
                              onChange={handleChangeSecondModel}
                              name="studentFreeTime">
                    <option value="1">Muy bajo</option>
                    <option value="2">Bajo</option>
                    <option value="3">Medio</option>
                    <option value="4">Alto</option>
                    <option value="5">Muy alto</option>
                </Form.Control>
                </Col>
                <br/>
            </Form.Group>
            <Button variant="primary" 
                    type="submit" 
                    onClick={() => setDisplayImages({...displayImages, img6: true})}>
                    Enviar
            </Button>
                <div className="container">
                    <hr/>
                    <h1>Resultado obtenido: {valSecondModel}</h1>
                </div>
                {displayImages.img6 ? (
                    <div align="center">
                        <p align="justify">Esta grafica fie obtenida en base a todos los elementos que contienen los atributos ya mencionados. 
                                En esta grafica se puede observar la cantidad de alumnos que poseen esa caracteristica contra la calificación
                                final.
                            <br/>
                            Como se observa en la parte inferior en medio en donde se observa G3 vs absences y en la cual podemos obtener 
                            el freetime de los alumnos y la educación máxima de la madre en base a eso.
                            <br/>
                            <br/>
                            <b>Ejemplo: </b> Con esta tabla se ogra observar que un alumno tiene 1 hora libre, tiene más de 60
                            faltas y que aproximadamente tiene una calificación de 90.
                        </p>
                        {displayImages.img6 && <img width="100%" className="d-block w-20px" src={img6} alt=""/>}
                        <p align="justify">
                        <b>Nota</b>
                        <br/>
                            Para este modelo tambien se determinó lo siguiente:
                            <br/>
                            * El coeficiente de determinación es de: 0.04733910819444753
                            <br/>
                            * Con un error de: 4.466023278619253
                        </p> 
                    </div>
                ) : <div></div>}
            </Form>

            </Tab>

            {/* creación del modelo 3 */}
            <Tab eventKey="contact" title="Modelo 3">
            <Form onSubmit={handleSubmitThirdModel}>
            <Form.Group as={Row} className="mb-3" controlId="formStudyTime3">
                <Form.Label column sm={5}>
                Tiempo de estudio:
                </Form.Label>
                <Col sm={7}>
                <Form.Control as="select" 
                              placeholder="Seleccionar..." 
                              value={thirdModelValues.studentStudyTime} 
                              onChange={handleChangeThirdModel}
                              name="studentStudyTime">
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
                <Col sm={2}>
                <Form.Control as="input" 
                              type="number" 
                              min="0" 
                              max="93" 
                              value={thirdModelValues.studentAbsences} 
                              onChange={handleChangeThirdModel}
                              name="studentAbsences">
                </Form.Control>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formRejectedAge3">
                <Form.Label column sm={5}>
                Numero de materias reprobadas:
                </Form.Label>
                <Col sm={3}>
                    <Form.Control as="select" 
                                  placeholder="Seleccionar..." 
                                  value={thirdModelValues.rejectedGrades} 
                                  onChange={handleChangeThirdModel}
                                  name="rejectedGrades">
                    <option value="1">Una</option>
                    <option value="2">Dos</option>
                    <option value="3">Tres</option>
                    <option value="4">Cuatro</option>
                </Form.Control>
                </Col>
                <br/>
            </Form.Group>
            <Button variant="primary" 
                    type="submit"
                    onClick={() => setDisplayImages({...displayImages, img7: true})}>
                    Enviar
                </Button>
                <div className="container">
                    <hr/>
                    <h1>Resultado obtenido: {valThirdModel}</h1>
                </div>
                {displayImages.img7 ? (
                    <div align="center">
                        <p align="justify"> Esta grafica fie obtenida en base a todos los elementos que contienen los atributos ya mencionados. 
                            En esta grafica se puede observar la cantidad de alumnos que poseen esa caracteristica contra la calificación
                            final.
                            <br/>
                            Como se observa en la parte inferior izquierda dio en donde se observa G3 vs studytime y en
                            la cual podemos obtener el failures de los alumnos y las absences de los estudiantes en base a eso.
                            <br/>
                            <br/>
                            <b>Ejemplo: </b> con esta tabla se ogra observar que la una gran cantidad de alumnos 
                            tienen cero materias reprobadas, estudian por lo menos 1 hora al dia y que sacan más de 
                            60 como calificación, pero tambien se observa que hay un alumno que estudia solo una hora tiene 
                            3 materias reprobadas y que aproximadamente tiene un 70 de calificación.
                        </p>
                        {displayImages.img7 && <img width="100%" className="d-block w-20px" src={img7} alt=""/>}
                        <p align="justify">
                        <b>Nota</b>
                        <br/>
                            Para este modelo tambien se determinó lo siguiente:
                            <br/>
                            * El coeficiente de determinación es de: 0.1346970660406004
                            <br/>
                            * Con un error de: 4.256335977266388
                        </p> 
                    </div>
                ) : <div></div>}
            </Form>
            </Tab>
            </Tabs>
        </div>
      </>
    );
}