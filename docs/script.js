document.addEventListener('DOMContentLoaded', function() {
    // Chart.js implementation for Results
    const ctx = document.getElementById('resultsChart');
    if (ctx) {
        Chart.defaults.color = '#000000';
        Chart.defaults.font.family = '"Times New Roman", Times, serif';
        Chart.defaults.font.size = 14;
        
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Base Rate', 'Baseline', 'RF Model'],
                datasets: [{
                    label: 'Precision@100 (%)',
                    data: [51.1, 39.0, 57.0],
                    backgroundColor: [
                        '#dddddd', // Base Rate (light grey)
                        '#aaaaaa', // Baseline (grey)
                        '#000000'  // RF Model (black)
                    ],
                    borderColor: '#000000',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false // We only have one metric, no need for legend
                    },
                    tooltip: {
                        backgroundColor: '#ffffff',
                        titleColor: '#000000',
                        bodyColor: '#000000',
                        borderColor: '#000000',
                        borderWidth: 1,
                        padding: 10,
                        displayColors: false,
                        callbacks: {
                            label: function(context) {
                                return `Precision@100: ${context.parsed.y}%`;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        grid: {
                            color: '#dddddd'
                        },
                        ticks: {
                            callback: function(value) {
                                return value + '%';
                            }
                        },
                        title: {
                            display: true,
                            text: 'Precision@100',
                            color: '#000000',
                            font: {
                                weight: 'bold'
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                weight: 'bold'
                            }
                        }
                    }
                },
                animation: {
                    duration: 1000
                }
            }
        });
    }
});
