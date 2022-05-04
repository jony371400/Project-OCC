const labels_Bar = [
    'LS50',
    'LS100',
    'LS250',
    'TM50',
    'TM100',
    'TM250'
];

const data_Bar = {
    labels: labels_Bar,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
        ],
        borderWidth: 1
    }]
    // datasets: [{
    //     barPercentage: 0.5,
    //     barThickness: 6,
    //     maxBarThickness: 8,
    //     minBarLength: 2,
    //     data: [10, 20, 30, 40, 50, 60, 70]
    // }]
}

const config_Bar = {
    type: 'bar',
    data: data_Bar,
    options: {
        scales: {
            xAxis: {
                // beginAtZero: true,
                color:'white'
            },
            yAxis: {
                // beginAtZero: true,
                color:'white'
            }
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
                text: 'JoyStick Status',
                color: 'white'
            }
        }
    }
}

const labels_line = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data_line = {
    labels: labels_line,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
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