<template>
  <div class="dashboard-container">
    <DashboardHeader></DashboardHeader>
    <div class="chart-container animate__animated animate__bounceInUp animate__delay-1s">
      <h1 style="text-align: center;">Stress Level Report (Using Vue.js & Chart.js)</h1>
      <canvas id="myChart" class="animate__animated animate__bounceIn animate__delay-2s"></canvas>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import DashboardHeader from './DashboardHeader.vue'
  import Footer from './Footer.vue'
  import axios from 'axios'

  export default {
    data () {
      return {
        //
      }
    },
    async mounted () {
      //Await fecth data
      await this.getStressData()
    },
    methods: {
      getStressData(){
        //HTTPRequest
        axios.get('https://private-anon-4bbc60941c-widyaimersif.apiary-mock.com/dashboard')
        .then((res) => {
            const results = res.data;
            console.log(results);
            let colorValue = '';
            const tmpDataCollection = [];
            //Get stress data value using map
            results.map((result, index) => {
              if(result.gender == 'male') {
                colorValue = 'rgb(122, 84, 255)';
              }
              else {
                colorValue = 'rgb(255, 159, 120)';
              }
              const getData = []
              getData[index] = {
                label: result.name,
                data: [
                    parseInt(result.stress[0].stresslevel.slice(0, -3)),
                    parseInt(result.stress[1].stresslevel.slice(0, -3)),
                    parseInt(result.stress[2].stresslevel.slice(0, -3)),
                    parseInt(result.stress[3].stresslevel.slice(0, -3)),
                    parseInt(result.stress[4].stresslevel.slice(0, -3)),
                ],
                borderColor: colorValue,
                backgroundColor: colorValue,
                fill: false,
                cubicInterpolationMode: 'monotone',
                tension: 0.4
              }
              tmpDataCollection.push(getData[index]); 
            })
            //Filling the chart with stress data
            const fillChartData = () => {
              const dataCollection = tmpDataCollection;
              const ctx = document.getElementById('myChart').getContext('2d');
              const myChart = new Chart(ctx, {
                  type: 'line',
                  data: {
                      labels: ["01.00", "06.00", "12.00", "18.00", "24.00"],
                      datasets: dataCollection
                  },
                  //Customize chart
                  options: {
                    responsive: true,
                    scales: {
                      y: {
                        title: {
                          display: true,
                          text: 'BPM',
                        }
                      }
                    },
                    plugins: {
                      legend: {
                        labels: {
                          usePointStyle: true,
                          pointStyle: 'circle',
                          font: {
                              size: 12
                          },
                          padding: 16,
                          boxHeight: 6,
                          boxWidth: 6,
                          position: 'left'
                        },
                      }
                    }
                  },
              });
            }
            fillChartData();
        })
        .catch((err) => {
          console.log(err.message);
        })
      },
    },
    components: {
      DashboardHeader,
      Footer,
    }
  }
</script>