const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021',],
    datasets: [
      {
        label: "Global Land-Ocean Temperature Index (in °C)",
        data: ['0.72', '0.61', '0.65', '0.68', '0.75', '0.9', '1.02', '0.2', '0.85', '0.98', '1.02', '0.85',],
        backgroundColor: 'black',
        hoverRadius: 6,
        tension: 0.2,
      }
    ]
  },
  options: {
    aspectRatio: 2.5
  }
});