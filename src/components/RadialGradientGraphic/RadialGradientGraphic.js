import React from "react";
import ReactApexChart from 'react-apexcharts'

const RadialGradientGraphic = (props) => {
    return (
        <ReactApexChart
            type={'radialBar'}
            height={200}
            width={200}
            series={[props.value / 5 * 100]}
            options={{
                chart: {
                    height: 350,
                    type: 'radialBar',
                    toolbar: {
                        show: true
                    }
                },
                plotOptions: {
                    radialBar: {
                        startAngle: -135,
                        endAngle: 225,
                        hollow: {
                            margin: 0,
                            size: '70%',
                            background: '#fff',
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: 'front',
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.24
                            }
                        },

                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: -10,
                                show: true,
                                color: '#888',
                                fontSize: '17px'
                            },
                            value: {
                                color: '#111',
                                fontSize: '25px',
                                show: true,
                                formatter: function(val) {
                                    return val / 20;
                                },
                            }
                        }
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        type: 'horizontal',
                        shadeIntensity: 0.5,
                        gradientToColors: ['#D83D45'],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100]
                    }
                },
                stroke: {
                    lineCap: 'round'
                },
                labels: [props.name],
            }}
        />
    )
}

export default RadialGradientGraphic