import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { useSelector } from "react-redux";

const NoData = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.m};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    font-style:italic;
    color: ${({ theme }) => theme.colors.purple};
`


const ChartBar = () => {

    const currencies = useSelector(state => state.wallet?.currencies);
    const [chartData, setChartData] = useState(false);


    const sortByValue = (arr) => {

        const sumCurrencyValue = arr.reduce((acc, currentValue) => {
            if (acc.hasOwnProperty(currentValue.currencyCode)) {
                acc[currentValue.currencyCode] += +currentValue.currencyValue;
            } else {
                acc[currentValue.currencyCode] = +currentValue.currencyValue;
            }
            return acc;
        },{})

        const sortCurrencies = Object.keys(sumCurrencyValue).sort((a, b) => {
            return sumCurrencyValue[b] - sumCurrencyValue[a];
        }).map(item => {
            return {
                [item]: sumCurrencyValue[item]
            }
        });

        setChartData(Object.assign({}, ...sortCurrencies));

    };

    useEffect(() => {
        sortByValue(currencies)
    }, [currencies])

    const data = {
        labels: Object.entries(chartData).slice(0, 5),
        datasets: [{
            data: Object.values(chartData).slice(0, 5),
            backgroundColor: ['#213058', '#f4ae3f', '#213058', '#f4ae3f', '#213058', '#f4ae3f', ],
            borderRadius: 20,
            borderSkipped: false,
            barThickness: 20,
        }],
    }

    const options = {
        plugins: {
            legend: { display: false },
        },
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    drawBorder: false,
                    display: false,
                },
                ticks: {
                    font: {
                        size: 10,
                    },
                },
            },
            y: {
                ticks: {
                    display: false,
                },
                grid: {
                    drawBorder: false,
                    display: false,
                }
            }
        }
    }
    return (
        <>
            {currencies.length > 0 ? <Bar data={ data } options={ options }/>:<NoData>No data to display.</NoData>}
        </>
    )
}

export default ChartBar;