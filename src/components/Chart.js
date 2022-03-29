import {Bubble} from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'


export const BubbleChart = ({ data }) => {
    if(!data || data.length === 0) {
        return null;
    }

    return (
        <div>
            <Bubble
                data={data}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Clustering Chart"
                        },
                        legend: {
                            display: true,
                            position: "top"
                        }
                    }
                }}
            />
        </div>
    )
}
