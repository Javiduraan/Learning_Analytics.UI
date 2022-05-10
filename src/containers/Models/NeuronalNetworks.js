import React from "react";
import {Form, Button, Row, Col, Tabs, Tab} from "react-bootstrap";

export default function SimpleReg(){

    return (
        <>
        <div>
            <h1>Redes Neuronales</h1>
        </div>
        
        <div className="" align="justify">        
            <p>
            Dentro de esta pestaña de muestran las predicciones obtenidas con un programa desarrollado con Python
             en donde se usan una serie de atributos como son las regresiones, agrupaciones, pre procesamientos, transformada, 
             selecciones entre otros, para asi lograr obtener la predicción de calificaciones y predicciones de otros atributos
            <br/>
            <br/>
            **Recuerde que las calificaciones van de 0 a 20 puntos maximos a obtener por parte del estudiante.**
            </p>
            <br/>
            <br/>
         <div>
            <p>1.-Esta gráfica obtenida con redes neuronales muestra las variables numéricas que poseen ciertos
                 atributos mostrando asi la cantidad de alumnos que tienen esa caracteristica en especial.
            </p> 
                <img width="100%"
                    className="d-block w-20px"
                    src="/images/imagen_redesneuro1.png"
                    alt=""
                />
        </div>
            <br/> 
        <div>
            <p>2.-Esta gráfica muestra la cantidad de alumnos que poseen esa caracteristica en especial solo que todos estos atributos 
                son los que contienen resultados y/o estudiantes con esa caracteristica en especial, dichos atributos son los que contienen elementos numericos solamente.
            </p> 
                <img width="100%"
                    className="d-block w-20px"
                    src="/images/imagen_redesneuro2.png"
                    alt=""
                />
        </div>
             <br/> 
        
         <div>
            <p> 3.-Esta gráfica muestra las características que contiene datos con relación alfanumericos como dirección, genero, etc.
            </p> 
                <img width="100%"
                    className="d-block w-20px"
                    src="/images/imagen_redesneuro3.png"
                    alt=""
                />
        </div>
             <br/> 
        
        <div>
            <p>4.-Por ultimo tenemos la gráfica en donde se muestran las predicciones obtenidas con este modelo en donde tenemos dos colores,
                 la linea azul es la que muestra las calificaciones que estan dentro del dataset que estamos utilizando el cual es el
                  que contiene toda la información del y los estudiantes y en el cual contiene las calificaciones finales, 
                  para compararla con la linea roja la cual es la predicción obtenida después de ser procesada con el modelo 
                  desarrollado de redes neuronales.
            <br/>
            <br/>
                <b >Nota: </b>Si gusta comparar las calificaciones puede verlas dentro de la pestaña de estadísticas básicas en el 
                apartado de Atributos utilizados.
            <br/>
            <br/>
                <b>*Importante*</b>
            <br/>
                Una de las cosas que se logró analizar con esta grafica fue la obtención del coeficiente de determinación y el error que genero el modelo desarrollado.
            <br/>
                •	Error obtenido: 1.8039812250113978
            <br/>
                •	Coeficiente de determinación:  0.8307890736326884

            </p> 
                <img width="100%"
                    className="d-block w-20px"
                    src="/images/imagen_redesneuro4.png"
                    alt=""
                />
            <br/>
            <p>Logrando obtener tambien estas posibles predicciones de calificaciones, las cuales pueden ser compardas con las calificaciones que se encuentran en estadisticas basicas
                en la pestaña de Atributos utilizados.
            </p>
            <img width="100%"
                    className="d-block w-20px"
                    src="/images/imagen_califRN1.png"
                    alt=""
                />
        </div>

        </div>
      </>
    );
}