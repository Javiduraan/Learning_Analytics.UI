import React from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useState, useEffect } from "react";
import { BubbleChart } from "../../components/Chart";

export default function Clustering(){
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchClustering(clusters = 2) {
    setLoading(true);
        axios.get("https://localhost:5001/api/User/Clustering", {
          params: {
            numClusters: clusters
          }
        })
        .then(response => {
          const data = response.data;
          console.log(data);
          setChartData({
            datasets: [
              {
                label: 'blue dataset',
                data: Object.values(data)?.map((comp) => ({
                  x: comp.Array_0.Componente_1,
                  y: comp.Array_0.Componente_2,
                  r: 5
                })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
              },
              {
                label: 'red dataset',
                data: Object.keys(data)?.map((comp) => ({
                  x: comp.Array_1.Componente_1,
                  y: comp.Array_1.Componente_2,
                  r: 3
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
            <h1>Clustering Page</h1>
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
      </>
    );
}