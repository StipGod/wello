import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],

        borderWidth: 1
    }]
}
export function BarExample(props: any) {
    console.log("here22");
    console.log(props)
    // const data = {
    //     lables: props.map((item: any) => item.title),
    //     datasets: [{
    //         label: "Amount in Dollars",
    //         data: props.map((item: any) => item.maxPrice),
    //         backgroundColor: "rgba(255, 159, 64, 0.2)",

    //     }]

    // }
    return props && (
        <div>
            <h2>Bar Example (custom size)</h2>
            <Bar
                data={data}
                width={100}
                height={50}
            // options={{
            //     maintainAspectRatio: false
            // }}
            />
        </div>
    );
}
