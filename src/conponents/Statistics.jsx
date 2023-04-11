import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, SubTitle } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend, Title,SubTitle );

const Statistics = () => {

    const data = {
        type: 'doughnut',
        labels: ['Assignment 1', 'Assignment 2', 'Assignment 3', 'Assignment 4', 'Assignment 5', 'Assignment 6', 'Assignment 7', 'Assignment 8'],
        data: [57, 60, 60, 60, 55, 60, 60, 60],
        datasets: [
          {
            label: 'Marks',
            data: [57, 60, 60, 60, 55, 60, 60, 60],
            backgroundColor: [
              'rgba(232, 37, 138, 0.8)',
              'rgba(210, 238, 26, 0.8)',
              'rgba(43, 123, 221, 0.8)',
              'rgba(26, 206, 238, 0.8)',
              'rgba(238, 28, 26, 0.8)',
              'rgba(26, 238, 41, 0.8)',
              'rgba(238, 178, 26, 0.8)',
              'rgba(138, 26, 238, 0.8)',
            ],
          },
        ],
        options: {
            plugins: {
                legend: {
                    display: false,
                    position : 'right',
                    labels: {
                        color: '',
                        padding : {
                            top : 10
                        },
                    }
                },
                tooltips : {
                    enabled : true,
                },
                title: {
                    display: true,
                    text: 'Assignment Mark Chart',
                    position : 'bottom',
                    padding : {
                        top: 30,
                        bottom : 10
                    },
                    font : {
                        weight: 'bold',
                        size : 20
                    }
                },
            },
        },  
    };

    const plugins = [{
        beforeDraw: function(chart) {
         var width = chart.width,
             height = chart.height,
             ctx = chart.ctx;
             ctx.restore();
            //  ctx.textBaseline = "top";
            //  ctx.textAlign = 'center';
            ctx.font = '20px sans-serif';
            // ctx.fillStyle = 'blue';
            // ctx.textAlign = 'left';
             var text = "98.33%",
             textX = Math.round((width - ctx.measureText(text).width) / 2),
             textY = height / 2.5;
             ctx.fillText(text, textX, textY);
             ctx.fillText('Avg mark', Math.round((width - ctx.measureText(text).width) / 2.1), height / 2.1);
             ctx.save();
        } 
      }]
    
    return (
        <div>
            <h1 className='bg-gray-100 px-5 md:px-28 text-2xl font-bold text-center py-10'>Assignment Data Statistics</h1>
            <div className='mx-auto h-96 w-96 mt-10'>         
                {/* <Pie data={data}  /> */}
                <Doughnut type="doughnut" data={data} options={data.options}  plugins={plugins} />
            </div>
        </div>
    );
};

export default Statistics;