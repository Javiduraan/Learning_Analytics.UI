import React from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState, useEffect } from "react";
import { BubbleChart } from "../../components/Chart";

export default function Clustering(){
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayImages, setDisplayImages] = useState({img5: true, img6: false, img7:false});

  async function fetchClusteringtwo(clusters = 2) {
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
          // console.log(dataX);

          // filtrarDatosJson(dataX);
          setChartData({
            datasets: [
              {
                label: 'Alumnos sin riesgo',
                data: dataX.Array_0.map((val) => ({x: val.Componente_1, y: val.Componente_2, r: 5})),
                backgroundColor: 'rgba(0, 143, 57, 0.5)'
              },
              {
                label: 'Alumnos en riesgo',
                data: dataX.Array_1.map((val) => ({x: val.Componente_1, y: val.Componente_2, r: 5})),
                backgroundColor: 'rgba(255, 0, 0, 0.5)'
              }
            ]
          });
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
  }

  async function fetchClusteringthree(clusters = 3) {
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

          setChartData({
            datasets: [
              {
                label: 'Alumnos sin riesgo',
                data: dataX.Array_0.map((val) => ({x: val.Componente_1, y: val.Componente_2, r: 5})),
                backgroundColor: 'rgba(0, 143, 57, 0.5)'
              },
              {
                label: 'Alumnos en riesgo',
                data: dataX.Array_1.map((val) => ({x: val.Componente_1, y: val.Componente_2, r: 5})),
                backgroundColor: 'rgba(255, 0, 0, 0.5)'
              },
              {
                label: 'Alumnos riesgo medio',
                data: dataX.Array_2.map((val) => ({x: val.Componente_1, y: val.Componente_2, r: 5})),
                backgroundColor: 'rgba(255, 255, 0, 0.5)'
              }
            ]
          });
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        });
  }

  async function fetchClusteringfour(clusters = 4) {
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

          setChartData({
            datasets: [
              {
                label: 'Alumnos sin riesgo',
                data: dataX.Array_0.map((val) => ({x: val.Componente_1, y: val.Componente_2, r: 5})),
                backgroundColor: 'rgba(0, 143, 57, 0.5)'
              },
              {
                label: 'Alumnos en riesgo',
                data: dataX.Array_1.map((val) => ({x: val.Componente_1, y: val.Componente_2, r: 5})),
                backgroundColor: 'rgba(255, 0, 0, 0.5)'
              },
              {
                label: 'Alumnos riesgo medio',
                data: dataX.Array_2.map((val) => ({x: val.Componente_1, y: val.Componente_2, r: 5})),
                backgroundColor: 'rgba(255, 255, 0, 0.5)'
              },
              {
                label: 'Alumnos riesgo alto',
                data: dataX.Array_3.map((val) => ({x: val.Componente_1, y: val.Componente_2, r: 5})),
                backgroundColor: 'rgba(255, 0, 128, 0.5)'
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
      fetchClusteringtwo()
        
        return () => {
          setChartData({});
        };
      }, [])


  function handleOnChange(evt){
    let val = evt.target.value;

    if (val === "2") {
      fetchClusteringtwo();
      setDisplayImages({img5: true, img6: false, img7: false})
    }

    if (val === "3") {
      fetchClusteringthree();
      setDisplayImages({img5: false, img6: true, img7: false})
    }

    if (val === "4") {
      fetchClusteringfour();
      setDisplayImages({img5: false, img6: false, img7: true})
    }


  }
  
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
            <Form.Control as="select" onChange={(event) => {
              handleOnChange(event);
            }}>
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
          {displayImages.img5 ? (
            <div>
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
            </div>
          ) : <div></div>}
          {/* Analisis clustering de 3 */}
          {displayImages.img6 ? (
            <div>
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
            </div>
          ) : <div></div>}

        {/* Analisis clustring  de 4 */}
        {displayImages.img7 ? (
          <div>
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
        ) : <div></div>}
        </div>
      </>
    );
}