const data = {
    labels: [
        'Humidity',
        'PH',
        'Temperature',
        'Health',
        'PM2.5'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [20, 7, 37, 10, 12],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
        ],

        borderColor: 'black',
        borderWidth: 3,
        hoverBorderColor: 'white'
    }]
};

const config = {
    type: 'polarArea',
    data: data,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                // text : 'YO',
                display: true,
                labels: {
                    color: 'white',
                    font: {
                        size: 24
                    }
                }
            },
            title: {
                display: true,
                text: 'Env Detect',
                color: 'white',
                font: {
                    size: 30
                }
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('PolarChart'),
    config
);