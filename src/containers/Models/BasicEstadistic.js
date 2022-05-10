import React from "react";
import {Form, Button, Row, Col, Tabs, Tab} from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useState } from "react";
// import "../Home.css";
import { CsvToHtmlTable } from "react-csv-to-table";
import "./BasicEstadistic.css";

export default function BasicEstadistic(){
    const [ csvText, setCsvTest ] = useState();

    // contante que trae la tabla con todos los atributos del dataset 
    const loadCSV = () => {
        fetch('./student-mat.csv')
        .then(res => res.text())
        .then(resText => {
            setCsvTest(resText)
        })
    };
    
    loadCSV();
    
    return(
        <>
        <div>
            <h1>Estadisticas Basicas</h1>
        </div>
        <div className="">        
            <p>
            Dentro de esta ventana usted podrá observar diferentes elementos y características de los atributos con los cuales se está trabajando.
            Un poco de historia: Este proyecto está utilizando un data set público que se obtuvo de un proyecto llamado <b>“Predicting Grades for the School Year” por Janio Martinez Bachmann (2017).</b>
            <br/>
            Este data set contiene un total de 392 elementos los cuales contienen información sobre los alumnos de la institución. 
            </p>
        </div>

{/* Pestaña de atributos utilizados */}
        <div className="" align="justify">
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Atributos utilizados">
            <Form.Group as={Row} className="mb-3" controlId="Atributos">
            </Form.Group>
                <div className="container">
                    {/* <button onClick={loadCSV}>Load Csv</button>
                    <h2>CSV: </h2>
                    <pre>{csvText}</pre> */}
                    <p>Los datos que se utilizan dentro de este proyecto estan dentro de archivo .csv o tambien conocido como archivo 
                        separado por comas el cual contiene toda la información de los alumnos.
                        Dicha tabla contiene diferentes abreviaciones para un uso más óptimo de los atributos que se 
                        estan usando, pero se describen mejor en pestañas posteriores.
                    </p>
                    <div className="ScrollableTable">
                        <CsvToHtmlTable
                        data={csvText}
                        csvDelimiter=","
                        tableClassName="table table-striped table-hover table-sm"
                        />
                    </div>
                </div>
            </Tab>

{/* Pestaña de descripción de atributos */}
            <Tab eventKey="profile" title="Descripción de atributos">
            <Form.Group as={Row} className="mb-3" controlId="Description">
                <p>Los datos de un alumno pueden ser de gran beneficio para nosotros ya que nos brindan una gran cantidad de información sobre su rendimiento por eso es importante es conocer más profundidad los elementos que 
                    estaremos usando los cuales serán descritos a continuación.</p>
            </Form.Group>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Atributo</th>
                    <th>Descripción</th>
                    <th>Abreviación </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>School </td>
                    <td>Escuela del estudiante </td>
                    <td align = "left">'GP' - Gabriel Pereira o 'MS' - Mousinho da Silveira</td>
                    </tr>
                    <tr>
                    <td>Sex </td>
                    <td>Sexo del estudiante</td>
                    <td align = "left">'F' - femenino o 'M' - masculino</td>
                    </tr>
                    <tr>
                    <td>Age </td>
                    <td>Edad del estudiante</td>
                    <td align = "left">Desde 15 años a 22 años </td>
                    </tr>
                    <tr>
                    <td>Address </td>
                    <td>Dirección</td>
                    <td align = "left">'U' - urbano o 'R' - rural</td>
                    </tr>
                    <tr>
                    <td>Famsize </td>
                    <td>Tamaño de la familia</td>
                    <td align = "left">'LE3' - menor o igual a 3 o 'GT3'- mayor que 3</td>
                    </tr>
                    <tr>
                    <td>Pstatus </td>
                    <td>Estado de la familia</td>
                    <td align = "left">T'- Viviendo junto a sus padres o 'A' - Padres separados</td>
                    </tr>
                    <tr>
                    <td>Medu</td>
                    <td>Educación de la madre</td>
                    <td align = "left">
                        0 = Sin estudios.
                        1= Educación primaria (hasta 4° grado).
                        2= Hasta 3 de secundaria.
                        3= Preparatoria.
                        4 = Licenciatura o superior.
                    </td>
                    </tr>
                    <tr>
                    <td>Fedu </td>
                    <td>Educación del padre</td>
                    <td align = "left">
                        0 = Sin estudios.
                        1= Educación primaria (hasta 4° grado).
                        2= Hasta 3 de secundaria.
                        3= Preparatoria.
                        4 = Licenciatura o superior.
                    </td>
                    </tr>
                    <tr>
                    <td>Mjob</td>
                    <td>Trabajo de la madre</td>
                    <td align = "left">maestro, trabajos de salud, servicios civiles, casa, otro</td>
                    </tr>
                    <tr>
                    <td>Fjob </td>
                    <td>Trabajo del padre</td>
                    <td align = "left">maestro, trabajos de salud, servicios civiles, casa, otro </td>
                    </tr>
                    <tr>
                    <td>Reason </td>
                    <td>Razón de elección de la escuela</td>
                    <td align = "left">cerca de casa, prestigio de la escuela, otro</td>
                    </tr>
                    <tr>
                    <td>Guardián </td>
                    <td>Encargado del estudiante</td>
                    <td align = "left">Madre, padre u otro</td>
                    </tr>
                    <tr>
                    <td>Traveltime </td>
                    <td>Tiempo libre del estudiante</td>
                    <td align = "left">1: menor a 15 min., 2: de 15 a 30 min., 3: de 30 min.a 1 hora, o 4: mayor a 1 hora </td>
                    </tr>
                    <tr>
                    <td>Studytime </td>
                    <td>Tiempo de estudio</td>
                    <td align = "left">1: menor a 15 min., 2: de 15 a 30 min., 3: de 30 min.a 1 hora, o 4: mayor a 1 hora</td>
                    </tr>
                    <tr>
                    <td>Failures </td>
                    <td>Cantidad de clases falladas</td>
                    <td align = "left">De una a cuatro faltas </td>
                    </tr>
                    <tr>
                    <td>Schoolsup </td>
                    <td>Soporte educativo adicional</td>
                    <td align = "left">Si o No</td>
                    </tr>
                    <tr>
                    <td>Famsup </td>
                    <td>Soporte familiar en la educación</td>
                    <td align = "left">Si o No</td>
                    </tr>
                    <tr>
                    <td>Paid </td>
                    <td>Pago de clases extras</td>
                    <td align = "left">Si o No</td>
                    </tr>
                    <tr>
                    <td>Nursery </td>
                    <td>Estudiantes foráneos</td>
                    <td align = "left">Si o No</td>
                    </tr>
                    <tr>
                    <td>Internet </td>
                    <td>Acceso a internet</td>
                    <td align = "left">Si o No</td>
                    </tr>
                    <tr>
                    <td>Romantic </td>
                    <td>Situación sentimental</td>
                    <td align = "left">Si o No</td>
                    </tr>
                    <tr>
                    <td>Famrel </td>
                    <td>Calidad de la relación en la familia</td>
                    <td align = "left">1 desde muy mala a 5 - excelente </td>
                    </tr>
                    <tr>
                    <td>Freetime </td>
                    <td>Tiempo libre después de la escuela</td>
                    <td align = "left">1: muy bajo a 5: muchas horas libres</td>
                    </tr>
                    <tr>
                    <td>Goout </td>
                    <td>Salida con amigos</td>
                    <td align = "left">1: poco tiempo fuera a 5: muchas horas fuera de casa </td>
                    </tr>
                    <tr>
                    <td>Dalc </td>
                    <td>Consumo de alcohol durante la semana</td>
                    <td align = "left">1: poco consumo entre semana a 5: mucho consumo durante semana </td>
                    </tr>
                    <tr>
                    <td> Walc </td>
                    <td>Consumo de alcohol durante el fin de semana</td>
                    <td align = "left">1: poco consumo durante fin de semana 5: mucho consumo durante el fin de        semana </td>
                    </tr>
                    <tr>
                    <td>Health </td>
                    <td>Calidad de la salud del estudiante</td>
                    <td align = "left">1: muy mala salud a 5: excelente salud </td>
                    </tr>
                    <tr>
                    <td>Absences </td>
                    <td>Cantidad de asistencias</td>
                    <td align = "left">0 a 93 </td>
                    </tr>
                    <tr>
                    <td> G1 </td>
                    <td>Calificación obtenida (1° unidad) </td>
                    <td align = "left">0 a 20 </td>
                    </tr>
                    <tr>
                    <td> G2 </td>
                    <td> Calificación obtenida (2° unidad) </td>
                    <td align = "left">0 a 20 </td>
                    </tr>
                    <tr>
                    <td> G3 </td>
                    <td>Calificación final</td>
                    <td align = "left">0 a 20 </td>
                    </tr>
                </tbody>
            </Table>
                </Tab>
{/* Pestaña  de los tipos de datos */}
            <Tab eventKey="contact" title="Tipos de datos">
            <Form.Group as={Row} className="mb-3" controlId="tipe">
                <p>Otro de los elementos que describiremos en este proyecto es el tipo de dato que posee dicha caracteristica del estudiante ya que es importante conocer qué tipo de elementos acepta para que de ese modo 
                    el usuario logre entender un poco más los elementos de entrada que necesita</p>
            </Form.Group>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Dato</th>
                    <th>Tipo de dato</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td align = "left">Escuela </td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td align = "left">Sexo</td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td align = "left">Edad</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td align = "left">Dirección(elemento que contiene letras)</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>5 </td>
                    <td align = "left">Tamaño de la familia </td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>6</td>
                    <td align = "left">Situación de los padres</td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>7</td>
                    <td align = "left">Educación máxima de la madre</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>8</td>
                    <td align = "left">Educación máxima del padre</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>9</td>
                    <td align = "left">Trabajo de la madre</td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>10</td>
                    <td align = "left">Trabajo del padre</td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>11</td>
                    <td align = "left">Razón de elección de escuela</td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>12</td>
                    <td align = "left">Encangado del estudiante</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>13</td>
                    <td align = "left">Tiempo de viaje</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>14</td>
                    <td align = "left">Tiempo de estudio</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>15</td>
                    <td align = "left">Total de fallas de materias</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>16</td>
                    <td align = "left">Soporte académico</td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>17</td>
                    <td align = "left">Soporte por parte de la familia</td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>18</td>
                    <td align = "left">Pago de clases extras</td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>19</td>
                    <td align = "left">Actividades extracurriculares </td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>20</td>
                    <td align = "left">Cuenta con cuidador </td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>21</td>
                    <td align = "left">Estado de salud</td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>22</td>
                    <td align = "left">Cuenta con internet</td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>23</td>
                    <td align = "left">Situación sentimental</td>
                    <td align = "left">Objeto (elemento que contiene letras) </td>
                    </tr>
                    <tr>
                    <td>24</td>
                    <td align = "left">Relación familiar</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>25</td>
                    <td align = "left">Tiempo libre</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>26</td>
                    <td align = "left">Tiempo fuera de casa</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>27</td>
                    <td align = "left">Toma de alcohol entre semana</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>28</td>
                    <td align = "left">Toma de alcohol durante el fin de semana </td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>29</td>
                    <td align = "left">Asistencias</td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>30</td>
                    <td align = "left">Calificaciones obtenida (1° unidad) </td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>31</td>
                    <td align = "left">Calificaciones obtenida (2° unidad) </td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                    <tr>
                    <td>32</td>
                    <td align = "left">Calificaciones finales </td>
                    <td align = "left">Int64 (elemento que contiene solo números) </td>
                    </tr>
                </tbody>
            </Table> 
                </Tab>
{/* Pestaña de correlaciones de algunos de los datos */}

            <Tab eventKey="correlaciones" title="Correlaciones">
            <Form.Group as={Row} className="mb-3" controlId="correlaciones">
                <p>Con ayuda de esta tabla se puede observar las correlaciones de los atributos. 
                Las correlaciones se definen como: una medida que expresa hasta qué punto dos 
                variables estan relacionadas literalmente. Permitiendo de ese modo describir las 
                relaciones simples que tenemos con la utilización de nuestros datos.
                </p>
            </Form.Group>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Atributo</th>
                    <th>Correlación</th>
                    </tr>
                </thead>
                <tbody align="left">
                    <tr>
                    <td>Calificación final (G3)</td>
                    <td align = "left">1.000000</td>
                    </tr>
                    <tr>
                    <td>Educación máxima de la madre (Medu)</td>
                    <td align = "left">0.217147</td>
                    </tr>
                    <tr>
                    <td>Nivel Máximo de estudio (b_higher_education)</td>
                    <td align = "left">0.182465</td>
                    </tr>
                    <tr>
                    <td>Educación máxima del padre(Fedu)</td>
                    <td align = "left">0.152457</td>
                    </tr>
                    <tr>
                    <td>Pago de clases extras (b_paixtraclasses)</td>
                    <td align = "left">0.101996</td>
                    </tr>
                    <tr>
                    <td>Acceso internet(b_internet)</td>
                    <td align = "left">0.098483</td>
                    </tr>
                    <tr>
                    <td>Tiempo de estudio (studytime)</td>
                    <td align = "left">0.097820</td>
                    </tr>
                    <tr>
                    <td>Estado familiar (b_Pstatus)</td>
                    <td align = "left">0.058009</td>
                    </tr>
                    <tr>
                    <td>Residencia (b_nursery)</td>
                    <td align = "left">0.051568</td>
                    </tr>
                    <tr>
                    <td>Relación familiar (famrel)</td>
                    <td align = "left">0.051363</td>
                    </tr>
                    <tr>
                    <td>Faltas (absences)</td>
                    <td align = "left">0.034247</td>
                    </tr>
                    <tr>
                    <td>Actividades extras (b_xtraactivities)</td>
                    <td align = "left">0.016100</td>
                    </tr>
                    <tr>
                    <td>Tiempo libre (freetime)</td>
                    <td align = "left">0.011307</td>
                    </tr>
                    <tr>
                    <td>Razón de elección de escuela (b_reason) </td>
                    <td align = "left">-0.028738</td>
                    </tr>
                    <tr>
                    <td>Soporte familiar (b_famsup)</td>
                    <td align = "left">-0.039157</td>
                    </tr>
                    <tr>
                    <td>Escuela (b_school)</td>
                    <td align = "left">-0.045017</td>
                    </tr>
                    <tr>
                    <td>Consumo de alcohol entre semana (Walc) </td>
                    <td align = "left">-0.051939</td>
                    </tr>
                    <tr>
                    <td>Persona encargada del alumno (b_guardian) </td>
                    <td align = "left">-0.054193</td>
                    </tr>
                    <tr>
                    <td>Consumo de alcohol los fines de semana (Dalc) </td>
                    <td align = "left">-0.054660</td>
                    </tr>
                    <tr>
                    <td>Estado de salud (health) </td>
                    <td align = "left">-0.061335</td>
                    </tr>
                    <tr>
                    <td>Tamaño de la familia (b_famsize) </td>
                    <td align = "left">-0.081407</td>
                    </tr>
                    <tr>
                    <td>Dirección (b_address)</td>
                    <td align = "left">-0.105756</td>
                    </tr>
                    <tr>
                    <td>Tiempo de viaje (traveltime) </td>
                    <td align = "left">-0.117142</td>
                    </tr>
                    <tr>
                    <td>Situación sentimental (b_romantic)</td>
                    <td align = "left">-0.129970</td>
                    </tr>
                    <tr>
                    <td>Tiempo libre fuera de casa (goout)</td>
                    <td align = "left">-0.132791</td>
                    </tr>
                    <tr>
                    <td>Edad (age)</td>
                    <td align = "left">-0.161579</td>
                    </tr>
                    <tr>
                    <td>Materias reprobadas (failures)</td>
                    <td align = "left">-0.360415</td>
                    </tr>
                </tbody>
            </Table>
                </Tab>

{/* Pestaña con algunas de las graficas generadas con estadisticas basicas */}
            <Tab eventKey="graficas" title="Gráficas de estadísticas">
            <Form.Group as={Row} className="mb-3" controlId="graficas" align="justify">
               {/* inicio de imagenes de graficas con datos escolares */}
                <div>
                     <p>1.-Con ayuda de esta grafica se puede visualizar los diferentes atributos que se tienen y sus niveles.
                        Como podemos observar en la  gráfica de Medu en donde vemos 
                        que tenemos en el eje de las X  5 posibles opciones de tipo de estudios con base a los índices del eje 
                        Y en donde tenemos representados la cantidad de personas que poseen dicho atributo
                    </p> 
                    <img width="100%"
                        className="d-block w-20px"
                        src="/images/imagen_graficaestadisticasbasicas1.png"
                        alt=""
                    />
                </div>
                <br/> 
                <div>
                    <p>2.-Esta gráfica de pastel muestra las predicciones de alumnos posibles de aprobar o reprobar la materia, tomando en cuenta todos los alumnos 
                        e información que contiene el dataset además muestra el porcentaje de aprobación y reprobación, 
                        dividiéndolo en dos colores verde (alumnos aprobados) y rojo (alumnos reprobados).
                    </p>
                    <img width="100%"
                        className="d-block w-20px"
                        src="/images/imagen_estadistibasicas2.png"
                        alt=""
                    />
                </div>
                <br/>
                <div>
                    <p>3.-Esta gráfica de pastel doble muestra los alumnos que aprobaron y reprobaron la materia, pero separándolos basado en el sexo
                         que ellos poseen ya sea F (femenino) o M (Masculino) 
                        y mostrando sus porcentajes y sus colores respectivamente verde (alumnos aprobados) rojo (alumnos reprobados).
                    </p>
                    <img width="100%"
                        className="d-block w-20px"
                        src="/images/imagen_estadisticasbasicas3.png"
                        alt=""
                    />
                </div>
                <br/>
                <div>
                    <p>4.-Esta gráfica es muy interesante ya que muestra a los alumnos que aprobaron la materia basándose en si se encuentran
                         dentro de una relación amorosa o no, además de separarlos en F (femenino) y M (masculino)
                          dicha grafica también muestra los porcentajes de alumnos que acreditaron la materia y los que no
                          los colores son: azul (alumnos que pasaron) rosa (alumnos que reprobaron). 
                    </p>
                    <img width="100%"
                        className="d-block w-20px"
                        src="/images/imagen_estadistibasicas4png.png"
                        alt=""
                    />
                </div>
                <br/>
                <div>
                    <p>5.-Esta gráfica nos muestra el nivel de estudios que manejan las madres de familia de los alumnos dividiéndolos 
                        en niveles académicos desde preescolar hasta el mayor que es universidad y nos muestra cuantos, de los alumnos
                         son los que logran aprobar y cuantos reprobar la materia. Los colores utilizados dentro de esta
                          gráfica son: rojo (alumnos reprobados) y azul (alumnos aprobados).
                    </p>
                    <img width="100%"
                        className="d-block w-20px"
                        src="/images/imagen_estadistibasicas5.png"
                        alt=""
                    />
                </div>
                <br/>
                <div>
                    <p>6.-La gráfica nos muestra el nivel de estudios que manejan los padres de familia de los alumnos 
                        dividiéndolos en niveles académicos desde preescolar hasta el mayor que es universidad y nos muestra cuantos
                         de los alumnos son los que logran acreditar y cuantos reprobar la materia. Los colores utilizados dentro de esta
                          grafica son: rojo (alumnos reprobados) y gris (alumnos aprobados).
                    </p>
                    <img width="100%"
                        className="d-block w-20px"
                        src="/images/imagen_estadistibasicas6.png"
                        alt=""
                    />
                </div>
                <br/>
                <div>
                    <p>7.-La gráfica muestra a los alumnos que anteriormente tienen alguna materia reprobada y 
                        con base en ello, nos dice si tienen posibilidad de aprobar o no la materia, 
                        los colores son rojo (alumnos que reprobaron) verde (alumnos que pasaron la materia).
                    </p>
                    <img width="100%"
                        className="d-block w-20px"
                        src="/images/imagen_estadistibasicas7.png"
                        alt=""
                    />
                </div>
                <br/>
                <div>
                    <p>8.-Por último tenemos esta gráfica en donde se observan las asistencias de 
                        los estudiantes y como eso afecta con las calificaciones finales en donde se
                         tiene que el rojo (son los alumnos reprobados) y el verde (alumnos que aprobaron).
                    </p>
                    <img width="100%"
                        className="d-block w-20px"
                        src="/images/imagen_estadistibasicas8.png"
                        alt=""
                    />
                </div>
            </Form.Group>
                </Tab>
            </Tabs>
        </div>
      </>
    );
}