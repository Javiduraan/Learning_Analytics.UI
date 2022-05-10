import React from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState, useEffect } from "react";
import { BubbleChart } from "../../components/Chart";

export default function Clustering(){
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  function filtrarDatosJson(json){
    let componente1 = [];
    let componente2 = [];

    Object.values(json)?.forEach(item => {
      item?.forEach(ide => {
        console.log(ide.Componente_1);
      });
    });



    // componentes.push(Object.values(json)?.map((el) => {
    //   return el;
    // }));

    // componentes?.forEach(item => console.log("componentes items: ", item));

    // console.log("componente2 items: ");
    // console.log(componentes);

  }

  async function fetchClustering(clusters = 2) {
    setLoading(true);
        axios.get("https://localhost:5001/api/User/Clustering", {
          params: {
            numClusters: clusters
          }
        })
        .then(response => {
          const data = response.data;
          const ddd = JSON.stringify(data);
          const dataX = JSON.parse(data);
          console.log(dataX);

          filtrarDatosJson(dataX);
          setChartData({
            datasets: [
              {
                label: 'blue dataset',
                data: Object.values(dataX)?.map((comp) => ({
                  x: comp.Array_0?.forEach((item, index) => {
                           return item.Componente_1;
                    }),
                  y: comp.Array_1?.forEach((item, index) => {
                          return item.Componente_2;
                     }),
                  r: 5
                })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
              },
              {
                label: 'red dataset',
                data: Object.values(dataX)?.map((comp) => ({
                  x: comp.Array_0?.forEach((item, index) => {
                      return item.Componente_1;
                     }),
                  y: comp.Array_1?.forEach((item, index) => {
                        return item.Componente_2;
                     }),
                  r: 5
                })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
              }
            ]
          });
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
  }

  useEffect(() => {
      fetchClustering()
        
        return () => {
          setChartData({});
        };
      }, [])

  if (loading) {
    return <h1>Data is Loading </h1>
  }
    return (
      <>
        <div>
            <h1>Clustering (Agrupamientos)</h1>
            <p align="justify">
              Dentro de esta página usted podrá realizar agrupamientos con los datos de los estudiantes para posteriormente verlos visualizados en
               una gráfica.
              <br/>
              Estos agrupamientos estan basados en los siguientes datos: sexo, edad, actividades extracurriculares, situación sentimental, 
              educación máxima de los padres, si cuenta con internet, entre otros atributos. 
              <br/>
              <br/>
              <b>Instrucciones: </b>
              Para la realización de las gráficas de clusterings es necesario elegir cuantos agrupamientos quiere hacer.
            </p>
        </div>
        <div className="container">
            <Form>
            <Form.Label>Selecciona una cantidad de clusters(agrupamientos):</Form.Label>
            <Form.Control as="select">
                <option>Seleccionar...</option>
                <option value="2">Dos</option>
                <option value="3">Tres</option>
                <option value="4">Cuatro</option>
            </Form.Control>

            </Form>
        </div>
        <div className="container">
            <BubbleChart data={chartData}/>
        </div>

        {/* Info: Analisis */}
        <div>
          {/* Analisis clustering de 2 */}
          <p>
              Para el clustering de 2 elementos se observó lo siguiente:
              <br/>
                •	El promedio total obtenido es de: 0.54177215
                <br/>
                Tambien se obtuvieron el total de alumnos por cada uno de los grupos
                <br/>
                •	Grupo 0: Un total de 181 estudiantes. 
                <br/>
                •	Grupo 1: Un total de 214 estudiantes. 
                <br/>
                Colores de los grupos
                <br/>
                •	Grupo 0: Verde (Alumnos sin riesgo académico y con buenas calificaciones).
                <br/>
                •	Grupo 1: Amarillo (Alumnos en posible riesgo académico).

          </p>
          {/* Analisis clustering de 3 */}
        <p>
            Para el clustering de 3 se observó lo siguiente: 
            <br/>
            •	El promedio total obtenido es de: 1.028031224
            <br/>
            Tambien se obtuvieron el total de alumnos por cada uno de los grupos
            <br/>
            •	Grupo 0: Un total de 103 estudiantes.
            <br/>
            •	Grupo 1: Un total de 181 estudiantes.
            <br/>
            •	Grupo 2: Un total de 111 estudiantes.
            <br/>
            Colores de los grupos
            <br/>
            •	Grupo 0: Rojo (Alumnos en riesgo académico).
            <br/>
            •	Grupo 1: Amarillo (Alumnos en posible riesgo académico).
            <br/>
            •	Grupo 2: Verde (Alumnos sin riesgo académico y con buenas calificaciones).
        </p>

        {/* Analisis clustring  de 4 */}
        <p>
              Para el clustering de 4 se observó lo siguiente: 
              <br/>
                •	El promedio total obtenido es de: 1.44050633
                <br/>
                Tambien se obtuvieron el total de alumnos por cada uno de los grupos
                <br/>
                •	Grupo 0: Un total de 111 estudiantes. 
                <br/>
                •	Grupo 1: Un total de 90 estudiantes.
                <br/>
                •	Grupo 2: Un total de 103 estudiantes
                <br/>
                •	Grupo3:  Un total de 91 estudiantes.
                <br/>
                Colores de los grupos
                <br/>
                •	Grupo 0: Rojo (Alumnos en riesgo académico).
                <br/>
                •	Grupo 1: Amarillo (Alumnos en posible riesgo académico).
                <br/>
                •	Grupo 2: Azul (Alumnos buenos, pero no excelentes).
                <br/>
                •	Grupo 3: Verde (Alumnos sin riesgo académico excelentes).

        </p>
        </div>
      </>
    );
}