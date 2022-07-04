import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import MainNavBar from './MainNavBar';
import Sidebar from './Sidebar';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Weekly Componentwise Alert Data Analysis',
        },
    },
};

export const options2 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: true,
            text: 'Line Chart Data Analysis',
        },
    },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Lambda',
            data: labels.map(() => Math.floor(Math.random() * 100)),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgb(255, 99, 132)',
        },
        {
            label: 'TCP',
            data: labels.map(() => Math.floor(Math.random() * 100)),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(53, 162, 235, 0.5)'
        },
        {
            label: 'Mulesoft',
            data: labels.map(() => Math.floor(Math.random() * 100)),
            backgroundColor: 'rgba(117, 224, 145, 0.5)',
            borderColor: 'rgba(117, 224, 145, 0.5)'
        },
    ],
};

const Analytics = () => {
    return (
        <div>
        
        <MainNavBar />
        <div className='d-flex gap-5'>
        <Sidebar />
        <div className='container'>
            <div className='w-75 mt-5 d-flex align-items-center gap-5'>
                <Line options={options} data={data} />;
            </div>
            <div className=' w-75 mt-5 d-flex align-items-center gap-5 mb-5'>
                <Bar options={options2} data={data} />;
            </div>
        </div>
        </div>
        
        </div>
    );
}

export default Analytics;
