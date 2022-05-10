import React, {useState} from "react";
import {Form, Button, Row, Col, Tabs, Tab} from "react-bootstrap";

export default function SimpleReg(){

    //graficas obtenidad para este modelo
    const img1 = "/images/imagen_regresionsimple1.png";
    const img2 = "/images/imagen_regresionsimple2.png";
    const img3 = "/images/imagen_regresionsimple3.png";
    const img4 = "/images/imagen_califM1_reseionsimple.png";
    const img5 = "/images/imagen_califM2_reseionsimple.png";
    const img6 = "/images/imagen_califM3_reseionsimple.png";
    const [displayImages, setDisplayImages] = useState({img1: false, img2: false, img3:false, img4:false, img5:false, img6:false});
    return (
        <>
        <div>
            <h1>Regresión Simple</h1>
        </div>
        <div className="" >        
            <p align="justify">
               Dentro de esta página vemos una regresión simple en donde se visualizara la gráfica de predicciónes.
               <br/>
                Recordando una regresión simple es un modelo matemático para realizar aproximaciones de dependencia entre una variable en específico.
               <br/>
               <b>Instrucciones:</b> De clic en el boton de enviar para generar la gráfica de predicción.
            </p>
        </div>
        <div className="container"  align="left">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                
                {/* creación modelo 1 */}
            <Tab eventKey="home" title="Modelo 1">
            <Form.Group as={Row} className="mb-3" controlId="model1info" align="justify">
                <p>
                    Tiempo de estudio (studytime en inglés):<br/>
                    •	1 = Menos de 2 horas.<br/>
                    •	2 = De 2 a 5 horas.<br/>
                    •	3 = De 5 a 10 horas.<br/>
                    •	4 = Mayor a 10 horas.<br/>
                    <br/>
                    G3 (Calificación final y a predecir)<br/>
                    •	Va desde 0 hasta 20 puntos máximos.
                </p>
            </Form.Group>
            <Button variant="primary" 
                    type="submit" 
                    onClick={() => setDisplayImages({...displayImages, img1: true, img4: true})}>
                    Enviar
            </Button>
                <div className="container">
                    <hr/>
                    <h1>Resultado obtenido: </h1>
                </div>
                {displayImages.img1 ? (
                    <div align="center">
                        <p align="justify">
                            La grafica generada está utilizando el tiempo de estudio (studytime) para obtener la predicción de G3 (calificación final) 
                            como podemos observar en la gráfica obtenida en el eje de las X tenemos la cantidad de horas estudiadas 
                            por un alumno en donde observamos que los alumnos tienen tendencia a estudiar dos horas diarias, del mismo modo
                            podemos observar que son pocos los alumnos que no logran tener una calificación aprobatoria ya que la mayoría de los 
                            alumnos tienen tendencia a varias horas de estudio.
                            </p>
                            {displayImages.img1 && <img width="100%" className="d-block w-20px" src={img1} alt=""/>} 
                        <p align="justify">
                        <b>Nota</b>
                        <br/>
                            Para este modelo tambien se determinó lo siguiente:
                            <br/>
                            * El coeficiente de determinación es de: 0.009568691683847441
                            <br/>
                            * La media de calificaciones es de: 9.328260988559855
                            <br/>
                            Algunas de las calificaciones que se obtienen con este modelo son las siguientes:
                        </p>
                        {displayImages.img4 && <img width="100%" className="d-block w-20px" src={img4} alt=""/>} 
                    </div>
                ) : <div></div>}
                
            </Tab>

            {/* creación modelo 2 */}
            <Tab eventKey="profile" title="Modelo 2">
            <Form.Group as={Row} className="mb-3" controlId="formMotherInfo2">
                <p>
                Educación de la madre (Medu):<br/>
                •	0 = Sin estudios.<br/>
                •	1 = Educación primaria (hasta 4° grado).<br/>
                •	2 = Hasta 3 de secundaria.<br/>
                •	3 = Preparatoria.<br/>
                •	4 = Licenciatura o superior.
                <br/>
                <br/>
                G3 (Calificación final y a predecir) <br/>
                •	Va desde 0 hasta 20 puntos máximos.
                </p>
                
            </Form.Group>
            <Button variant="primary" 
                    type="submit" 
                    onClick={() => setDisplayImages({...displayImages, img2: true, img5: true})}>
                    Enviar
            </Button>
                <div className="container">
                    <hr/>
                    <h1>Resultado obtenido: </h1>
                </div>
                {displayImages.img2 ? (

                <div align="center">
                    <p align="justify">
                            Dentro de este modelo estamos utilizando los estudios máximos de la madre para obtener la predicción de G3 (calificaciones finales).
                            En la gráfica podemos observar en el eje de las X 5 elementos los cuales hacen referencia al nivel de estudios que poseen las madres
                            de los estudiantes y en donde se observa que la mayoría de los estudiantes cuentan con una madre que estudio hasta la universidad o más.
                    </p>
                    {displayImages.img2 && <img width="100%" className="d-block w-20px" src={img2} alt=""/>}
                    <p align="justify">
                        <b>Nota</b>
                        <br/>
                            Para este modelo tambien se determinó lo siguiente:
                            <br/>
                            * El coeficiente de determinación es de: 0.047153035079265826
                            <br/>
                            * La media de calificaciones es de: 7.916681857662159
                            <br/>
                            Algunas de las calificaciones que se obtienen con este modelo son las siguientes:
                        </p>
                        {displayImages.img5 && <img width="100%" className="d-block w-20px" src={img5} alt=""/>} 
                </div>
                ) : <div></div>}

            </Tab>

            {/* creación modelo 3 */}
            <Tab eventKey="contact" title="Modelo 3">
            <Form.Group as={Row} className="mb-3" controlId="formStudyTime3">
                <p>
                Materias reprobadas (failures en inglés):
                <br/>
                •	Van de 1 hasta 4.
                <br/>
                <br/>
                G3 (Calificación final y a predecir)<br/>
                •	Va desde 0 hasta 20 puntos máximos.<br/>
                </p>
                <br/>
            </Form.Group>
            <Button variant="primary" 
                    type="submit" 
                    onClick={() => setDisplayImages({...displayImages, img3: true, img6: true})}>
                    Enviar
            </Button>
                <div className="container">
                    <hr/>
                    <h1>Resultado obtenido: </h1>
                </div>
                {displayImages.img3 ? (
                    <div align="center">
                    <p align="justify">
                            Con ayuda de esta grafica se logra observar las fallas o materias reprobadas que posee un estudiante vs
                            la calificación final. Dicha tabla nos muestra que al no tener ninguna materia reprobada es más probable que
                            el alumno pasee la materia, tambien muestra que la gran mayoría de los alumnos no han reprobado alguna.
                        </p>
                        {displayImages.img3 && <img width="100%" className="d-block w-20px" src={img3} alt=""/>}
                        <p align="justify">
                        <b>Nota</b>
                        <br/>
                            Para este modelo tambien se determinó lo siguiente:
                            <br/>
                            * El coeficiente de determinación es de: 0.12989892930797453
                            <br/>
                            * La media de calificaciones es de: 7.916681857662159
                            <br/>
                            Algunas de las calificaciones que se obtienen con este modelo son las siguientes:
                        </p>
                        {displayImages.img6 && <img width="100%" className="d-block w-20px" src={img6} alt=""/>} 
                    </div>
                ) : <div></div> }

            </Tab>
            </Tabs>
        </div>
      </>
    );
}