const data = {
    labels: [
        'LS50',
        'LS100',
        'LS250',
        'TM50',
        'TM100',
        'TM250'
    ],

    datasets: [{
        label: 'My First Dataset',
        data: [90, 18, 70, 30, 21,67],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
            'rgb(126, 54, 135)'
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
        plugins: {
            legend: {
                text : 'YO',
                display: true,
                labels: {
                    color: 'white',
                    font:300
                }
            },
            title: {
                display: true,
                text: 'AMR Battery',
                color:'white'
            }
        }
    }
};

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);