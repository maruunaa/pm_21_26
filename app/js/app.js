



const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['', '', '', '', '', '','','',''],
      datasets: [{
        legend: {display: false},
        data: [10, 3, 15, 18, 22, 11,13,10,16],
        backgroundColor:"#63e599",
        borderWidth: 0.1,
        barPercentage: 0.2,
        barThickness: 8,
      }]
    },
    options: {
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          grid: {
            display: false // Вимкнення сітки по осі Y
          },
          
        },
        
          x: {
            display: false,
            grid: {
              display: false // Вимкнення сітки по осі X
            },
            barSpacing: 0.1,
            barPercentage: 0.1,
            categoryPercentage: 0.1,
            tickWidth: 2,
          },
          
      },
      plugins: {
        legend: {
            display: false,
        }
      }
    }
  });
  
  const ctxy = document.getElementById('Grahp3');

  new Chart(ctxy, {
    type: 'bar',
    data: {
      labels: ['', '', '', '', '', '','','','',''],
      datasets: [{
        legend: {display: false},
        data: [410, 320,80, 210, 230, 360, 420,530,450,600],
        backgroundColor:"#ff6464",
        borderWidth: 0.1,
        barPercentage: 0.2,
        barThickness: 8,
      }]
    },
    options: {
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          grid: {
            display: false // Вимкнення сітки по осі Y
          },
          
        },
        
          x: {
            display: false,
            grid: {             
              display: false // Вимкнення сітки по осі X
            },
            barSpacing: 0.1,
            barPercentage: 0.1,
            categoryPercentage: 0.1,
            tickWidth: 2,
          },
          
      },
      plugins: {
        legend: {
            display: false,
        }
      }
    }
  });

  const xValues = ["Italy", "France", "Spain"];
  const yValues = [33,33,33];
  const barColors = [
    "#2597a5",
    "#cdcdcb",
    "#0e747f"
  ];
  
  new Chart("Graph2", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        legend: {display: false},
        backgroundColor: barColors,
        data: yValues
      }]
    },
    options: {
      plugins: {
        legend: {
            display: false,
        }
      } 
    } 
  });

  const ctxz = document.getElementById('Graph4');

  new Chart(ctxz, {
    type: 'line',
    data: {
      labels: ['', '', '', '', '', '','','',''],
      datasets: [{
        legend: {display: false},
        data: [10, 3, 15, 18, 22, 11,13,10,16],
        backgroundColor:"#ff6464",
        borderWidth: 2,
        borderColor: '#ff6464',
        tension: 0.1,
        pointRadius: [3, 0, 0, 0, 0,0,0,0, 3],
      }]
    },
    options: {
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          grid: {
            display: false // Вимкнення сітки по осі Y
          },
          
        },
        
          x: {
            display: false,
            grid: {
              display: false // Вимкнення сітки по осі X
            },
            categoryPercentage: 0.1,
            tickWidth: 2,
          },
          
      },
      plugins: {
        legend: {
            display: false,
        }
      }
    }
  });
  
  const ctxm = document.getElementById('Graph5');

  new Chart(ctxm, {
    type: 'bar',
    data: {
      labels: ['', '', '', '', '', '','','',''],
      datasets: [{
        legend: {display: false},
        data: [10, 3, 15, 18, 22, 11,13,10,16],
        backgroundColor:"#63afe5",
        borderWidth: 0.1,
        barPercentage: 0.2,
        barThickness: 8,
      }]
    },
    options: {
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          grid: {
            display: false // Вимкнення сітки по осі Y
          },
          
        },
        
          x: {
            display: false,
            grid: {
              display: false // Вимкнення сітки по осі X
            },
            barSpacing: 0.1,
            barPercentage: 0.1,
            categoryPercentage: 0.1,
            tickWidth: 2,
          },
          
      },
      plugins: {
        legend: {
            display: false,
        }
      }
    }
  });
  
  const ctxk = document.getElementById('Graph6');

  new Chart(ctxk, {
    type: 'line',
    data: {
      labels: ['', '', '', '', '', '','','',''],
      datasets: [{
        legend: {display: false},
        data: [0, 20, 7, 25, 25, 40,38,0],
        backgroundColor:"rgba(97, 255, 163, 0.5)",
        borderWidth: 1,
        borderColor: '#61ffa3',
        tension: 0.1,
        pointBackgroundColor: '#ff6464',
        pointRadius: [2, 0,  0, 0,0,2,0, 2],
        
        fill: true,
      },
      {
        legend: {display: false},
        data: [0, 20, 8, 45, 22, 5,33],
        backgroundColor:"rgba(70, 215, 213, 0.5)",
        borderWidth: 1,
        borderColor: '#46d7d5',
        tension: 0.1,
        pointRadius: [2, 0, 0, 0, 2,0, 0],
        pointBackgroundColor: '#ff6464',
        fill: true,

      }]
    },
    options: {
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          grid: {
            display: false // Вимкнення сітки по осі Y
          },
          
        },
        
          x: {
            display: false,
            grid: {
              display: false // Вимкнення сітки по осі X
            },
            categoryPercentage: 0.1,
            tickWidth: 2,
          },
          
      },
      plugins: {
        legend: {
            display: false,
        }
      }
    }
  });


  const bg = document.getElementById('BigGraph');

  new Chart(bg, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
      datasets: [{
        legend: {display: false},
        data: [1, 2, 0.7, 0.8,1,1,2.5,0.5,1.8,1,4,0.4,0.7,1,0.7,0.9],
        backgroundColor:"rgba(113, 161, 255, 0.5)",
        borderWidth: 1,
        borderColor: 'rgba(113, 161, 255, 1)',
        tension: 0.6, 
        pointRadius: 0,
        fill: true,
        borderRadius: 10,
      },
      {
        legend: {display: false},
        data: [1,2,1.3,1.5,0.5,0.7,0.4,1,0.3,1.8,1,0.5,0.7,0.5,1.5,0.5,3,1,0.7,1,0.8],
        backgroundColor:"rgba(76, 118, 132, 0.5)",
        borderWidth: 1,
        borderColor: '#4c7684',
        tension: 0.6,
        pointRadius: 0,
        fill: true,
        borderRadius: 50,

      }]
    },
    options: {
      scales: {
        y: {
          display: true,
          beginAtZero: true,
          grid: {
            display: false // Вимкнення сітки по осі Y
          },
          ticks:{
            callback: (value)=>value+'M',
            stepSize: 1,
          },
          
          
        },
        
          x: {
            display: true,
            grid: {
              display: false // Вимкнення сітки по осі X
            },
            categoryPercentage: 0.1,
            tickWidth: 2,
          },
          
      },
      plugins: {
        legend: {
            display: false,
        }
      }
    }
  });

  const xBrouser = ["Chrome", "Firefox", "Safari"];
  const yProcent = [43,33,23];
  const doughnutColors = [
    "#2597a5",
    "#cdcdcb",
    "#0e747f"
  ];
  
  new Chart("doughnut", {
    type: "doughnut",
    data: {
      labels: xBrouser,
      datasets: [{
        legend: {display: false},
        backgroundColor: doughnutColors,
        data: yProcent,
      }]
    },
    options: {
      plugins: {
        legend: {
            display: false,
        },
      }, 
    },

  });


  const no = document.getElementById('GraphOrders');

  new Chart(no, {
    type: 'line',
    data: {
      labels: ['', '', '', '', '', '','','','','','','','','',''],
      datasets: [{
        legend: {display: false},
        data: [5, 6, 3, 5, 4, 6,5,7,3,12,5,9,6,9,11],
        backgroundColor:"rgba(145, 210, 148, 1)",
        borderWidth: 2,
        borderColor: 'rgba(145, 210, 148, 1)',
        tension: 0.1,
        pointRadius: 4,
        hoverRadius: 4, // Радіус точок при наведенні
        hoverBorderWidth: 16, // Товщина контуру точок при наведенні
        hoverBackgroundColor: 'rgba(145, 210, 148, 1)', // Колір точок при наведенні
        hoverBorderColor: 'rgba(145, 210, 148, 0.5)' // Колір контуру точок при наведенні
      }]
    },
    options: {
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          grid: {
            display: false // Вимкнення сітки по осі Y
          },
          
        },
        
          x: {
            display: false,
            grid: {
              display: false // Вимкнення сітки по осі X
            },
            categoryPercentage: 0.1,
            tickWidth: 2,
          },
          
      },
      plugins: {
        legend: {
            display: false,
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              var label = 'Orders: ' + context.parsed.y;
              return label;
            }
          }
        }
      }
    }
  });

  const tr = document.getElementById('GraphRevenue');

  new Chart(tr, {
    type: 'line',
    data: {
      labels: ['', '', '', '', '', '','','','','','','',''],
      datasets: [{
        legend: {display: false},
        data: [3.006, 2.107, 4.008, 3.759, 1.308, 2.307,2.706,4.425,3.874,3.004,3.903,3.702,2.891],
        backgroundColor:"rgba(255, 73, 74, 1)",
        borderWidth: 2,
        borderColor: 'rgba(255, 73, 74, 1)',
        tension: 0.1,
        pointRadius: 4,
        hoverRadius: 4, // Радіус точок при наведенні
        hoverBorderWidth: 16, // Товщина контуру точок при наведенні
        hoverBackgroundColor: 'rgba(255, 73, 74, 1)', // Колір точок при наведенні
        hoverBorderColor: 'rgba(255, 73, 74, 0.5)' // Колір контуру точок при наведенні
      }]
    },
    options: {
      scales: {
        y: {
          display: false,
          beginAtZero: true,
          grid: {
            display: false // Вимкнення сітки по осі Y
          },
          
        },
        
          x: {
            display: false,
            grid: {
              display: false // Вимкнення сітки по осі X
            },
            categoryPercentage: 0.1,
            tickWidth: 2,
          },
          
      },
      plugins: {
        legend: {
            display: false,
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              var label = '$' + context.parsed.y;
              return label;
            }
          }
        }
      }
    }
  });


  // Функція для встановлення відсотка у прогрес-барі
  function setProgress1(percent) {
    const progressBar = document.getElementById('progressBar1');
    progressBar.style.width = percent + '%';
  }

  // Приклад: встановлення відсотка 75%
  setProgress1(67);
  function setProgress2(percent) {
    const progressBar = document.getElementById('progressBar2');
    progressBar.style.width = percent + '%';
  }
  setProgress2(78);

 
  var minValue = 2000;
  var maxValue = 7000;

// Генеруємо випадкове число в межах від minValue до maxValue (включно)
  var randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;

  Promise.all([
    fetch('https://unpkg.com/world-atlas/countries-50m.json').then((r) => r.json()),
    fetch('/json/map-data.json').then((r) => r.json())
  ]).then(([countriesData, data]) => {
    const countries = ChartGeo.topojson.feature(countriesData, countriesData.objects.countries).features;
    const chart = new Chart(document.getElementById("canvas").getContext("2d"), {
    type: 'bubbleMap',
    data: {
      labels: countries.map((d) => d.properties.name),
      datasets: [{
        outline: countries,
        showOutline: true,
        backgroundColor:"rgba(255, 73, 74, 1)",
        borderWidth: 2,
        borderColor: 'rgba(255, 73, 74, 1)',
        tension: 0.1,
        pointRadius: 4,
        hoverRadius: 4, // Радіус точок при наведенні
        hoverBorderWidth: 16, // Товщина контуру точок при наведенні
        hoverBackgroundColor: 'rgba(255, 73, 74, 1)', // Колір точок при наведенні
        hoverBorderColor: 'rgba(255, 73, 74, 0.5)', // Колір контуру точок при наведенні
        data: data.map((d) => Object.assign(d, {value: 1})),
        fill: true,
      }]
        //data: data.map((d) => ({feature: d, value: 1})),
    },
    options: {
      //showOutline: false,
      //showGraticule: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              var label = '$' + randomValue.toLocaleString();
              return label;
            }
          }
        }
      },
      scales: {
        projection: {
          axis: 'x',
          projection: 'equalEarth'
        }
      }
    }
  });
});