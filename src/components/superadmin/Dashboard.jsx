import React, { useEffect, useState } from 'react'
import Chart from '../../charts/Chart'


const Dashboard = () => {
    

    return (
        <div className='dashboard'>
        <h2 className='mb-2 text-gray-500 font-semibold tracking-wide'>Dashboard</h2>
        <div className='charts'>
            <Chart />

        </div>
    </div>
    )
}

export default Dashboard