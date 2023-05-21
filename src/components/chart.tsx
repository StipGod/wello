import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useEffect } from 'react';
import { Stack,Text } from '@chakra-ui/react';
import { render } from 'react-dom';
const chartData:any = [
    // { name: 'Item 1', value: 10 },
    // { name: 'Item 2', value: 20 },
    // { name: 'Item 3', value: 15 },
    // Add more data items as needed
  ];
  const formatter = (value:any) => {
    if (value >= 1000000) {
      return `${Math.round(value / 1000000)}M`;
    } else if (value >= 1000) {
      return `${Math.round(value / 1000)}K`;
    }
    return value;
  };
  const renderCustomBarLabel = ({ payload, x, y, width, height, value }:any) => {

    return <text fontSize={9} x={x + width / 2} y={y} fill="#666" textAnchor="middle" dy={-6}>{`value: ${formatter(value)}`}</text>;
  };
  const ChartComponent = ({analytics}:any) => {
    console.log(analytics)
    const [data,setData] = useState([]);
    const[counterData, setCounterData] = useState([])
    useEffect(()=>{
        analytics.map((el:any)=>{
            // console.log(el.title)
            // el.title = el?.title?.replace(" ","\n")
            // console.log(el.title)
            if(el.title)
            chartData.push({name:el.title, midValue: el.minPrice + el.maxPrice / 2, counter:el.counter});
        })
        setData(chartData);
    },[])
    return (
        <Stack p={5} spacing={5}>
        <Text>
            Value per listing
        </Text>
        <BarChart  width={900} height={300} data={data}>
            <XAxis dataKey="name" stroke="#8884d8"  interval={0}  fontSize={7} height={30}/>
            <YAxis tickFormatter={formatter } />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar name='Mid Value in COP' dataKey="midValue"  fill="#8884d8" barSize={30} label={renderCustomBarLabel}/>
        </BarChart>
        <Text>
            Cart additions per listing
        </Text>
        <BarChart width={900} height={200} data ={data}>
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey ="name"stroke="#8884d8"  interval={0}  fontSize={7} height={30}/>
            <YAxis tickFormatter={formatter} domain={[0, 'dataMax + 2']} allowDataOverflow={true}/>{/*sirve para que el dominio del maximo no sea el maximo elemento en sí*/}
            <Tooltip />
            <Legend/>
            <Bar name='#Added to Cart' dataKey={'counter'} fill="#8884d8"label={renderCustomBarLabel} barSize={30}/>
        </BarChart>

        </Stack>
    );
  };
  
  export default ChartComponent;
    