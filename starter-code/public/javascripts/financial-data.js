
const startDate = document.getElementById('start-date');
const endDate = document.getElementById('end-date');

const coinApi = axios.create({
  baseURL: `https://api.coindesk.com/v1/bpi/historical/close.json`
})

function getCoinInfo() {
  axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate.value}&end=${endDate.value}`)
        .then(response => {

        createChart(Object.keys(response.data.bpi), Object.values(response.data.bpi))

        })
        .catch(err => {
        console.log(err);
})
}

const coinBtn = document.createElement('button');
coinBtn.setAttribute('id', 'coin-btn');
coinBtn.innerText = 'Get Coin Prices';
const div = document.createElement('div');

div.appendChild(coinBtn);
document.getElementById('main').appendChild(div);

document.getElementById("coin-btn").onclick = function (){
 getCoinInfo('')
};

//startDate.addEventListener('change', getCoinInfo);
endDate.addEventListener('change', getCoinInfo)


function createChart(xValues, yValues) {
  
  const ctx = document.getElementById("myChart").getContext('2d');
  const myChart = new Chart(ctx, {
        type: 'line',
      data: {
        labels: xValues,
        datasets: [{
        label: 'Price of Bitcoin',
          data: yValues,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
        yAxes: [{
        ticks: {
        beginAtZero: true
            }
          }]
        }
      }
    });
}