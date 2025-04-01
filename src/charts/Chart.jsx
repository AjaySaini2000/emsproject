import React from 'react'
import CanvasJSReact from '@canvasjs/react-charts';


var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Chart = () => {
  
    const options2 = {
        // title: {
        //     text: "Basic Column Chart"
        // },
        data: [
        {
            // Change type to "doughnut", "line", "splineArea", etc.
            type: "column",
            dataPoints: [
                { label: "Apple",  y: 10  },
                { label: "Orange", y: 15  },
                { label: "Banana", y: 25  },
                { label: "Mango",  y: 30  },
                { label: "Grape",  y: 28  }
            ]
        }
        ]
    }
  return (
    
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <div >
            <h3 className='text-center mb-2 text-red-500 font-Roboto'>Revenue</h3>
            <CanvasJSChart options = {options2 } containerProps={{ width: '100%', height: '240px' }} /></div>
        <div>
        <h3 className='text-center mb-2 text-red-500 font-Roboto'>Revenue</h3>

            <CanvasJSChart options = {options2 } containerProps={{ width: '100%', height: '240px' }} /></div>
        <div>
        <h3 className='text-center mb-2 text-red-500 font-Roboto'>Revenue</h3>

            <CanvasJSChart options = {options2 } containerProps={{ width: '100%', height: '240px' }} /></div>
        <div>
        <h3 className='text-center mb-2 text-red-500 font-Roboto'>Revenue</h3>

            <CanvasJSChart options = {options2 } containerProps={{ width: '100%', height: '240px' }} /></div>
        </div>
  )
}

export default Chart