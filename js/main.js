new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September"],
      datasets: [{ 
          data: [952,1124,106,106,1070,111,133,1221,783,248],
          label: "Shawn",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [282,1200,411, 1204,635,809,947,1402,300,567],
          label: "Ray",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [700,500,178,1920,203,276,408,2401,675,734],
          label: "Clark",
          borderColor: "#3cba9f",
          fill: false
        }, { 
          data: [240,2000,103,1426,240,380,2040,167,1508,784],
          label: "Aaron",
          borderColor: "#e8c3b9",
          fill: false
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      title: {
        display: true,
        text: "User Summary",
        fontFamily: 'Poppins',
        fontColor: 'white',
        fontSize: '16'
      },
      legend: {
          labels: {
              fontColor: 'white',
              fontFamily: 'Poppins'
          }
      },
      scales: {
          yAxes: [{
            ticks: {
                fontColor: 'white',
                fontFamily: 'Poppins'
            }
          }],
          xAxes: [{
            ticks: {
                fontColor: 'white',
                fontFamily: 'Poppins'
            }
          }]
      }
    }
  });