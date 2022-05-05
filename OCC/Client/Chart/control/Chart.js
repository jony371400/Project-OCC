const labels_Bar = [
    'X Axis',
    'Z Axis',
    'L1',
    'L2',
    'R1',
    'R2'
];

const data_Bar = {
    labels: labels_Bar,
    datasets: [{
        label: 'Bar Legend',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: [
            'rgba(255, 255, 255, 0.1)',
            'rgba(255, 255, 255, 0.2)',
            'rgba(255, 255, 255, 0.4)',
            'rgba(255, 255, 255, 0.6)',
            'rgba(255, 255, 255, 0.8)',
            'rgba(255, 255, 255, 1.0)'
        ],
        borderColor: [

            'rgba(0, 0, 0, 0.1)',
            'rgba(0, 0, 0, 0.2)',
            'rgba(0, 0, 0, 0.4)',
            'rgba(0, 0, 0, 0.6)',
            'rgba(0, 0, 0, 0.8)',
            'rgba(0, 0, 0, 1.0)'
        ],
        borderWidth: 2,

    }]
}

const config_Bar = {
    type: 'bar',
    data: data_Bar,
    options: {
        scales: {
            y: {
               ticks:{
                   color:'white',
               }
            },
            x: {
                ticks:{
                    color:'white',
                }
             },
        },
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'white',
                    font: 300
                }
            },
            title: {
                display: true,
                text: 'Control Status',
                color: 'white'
            },
        }
    }
}

const labels_line = [
    '0000',
    '0400',
    '0800',
    '1200',
    '1600',
    '2400'
];

const data_line = {
    labels: labels_line,
    datasets: [{
        label: 'Line Legend',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [100, 85, 70, 60, 20, 10],
    }]
};

const config_line = {
    type: 'line',
    data: data_line,
    options:
    {
        onClick: (e) => {
            const canvasPosition = getRelativePosition(e, chart);

            // Substitute the appropriate scale IDs
            const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
            const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
        },
        scales: {
            y: {
               ticks:{
                   color:'white',
               }
            },
            x: {
                ticks:{
                    color:'white',
                }
             },
        },
        plugins: {
            legend: {
                display: false,
                labels: {
                    color: 'white',
                    font: 300
                }
            },
            title: {
                display: true,
                text: 'Battery',
                color: 'white'
            },
        }
    }
};

const myChart_Bar = new Chart(
    document.getElementById('BarChart'),
    config_Bar
);

const myChart_Line = new Chart(
    document.getElementById('LineChart'),
    config_line
);