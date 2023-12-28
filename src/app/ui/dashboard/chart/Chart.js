'use client'
import styles from "@/app/ui/dashboard/chart/chart.module.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: "Mon",
    visit: 2400,
    click: 2400
  },
  {
    name: "Tues",
    visit: 1398,
    click: 2210
  },
  {
    name: "Wed",
    visit: 9800,
    click: 2290
  },
  {
    name: "Thrus",
    visit: 3908,
    click: 2000
  },
  {
    name: "Fri",
    visit: 4800,
    click: 2181
  },
  {
    name: "Sat",
    visit: 3800,
    click: 2500
  },
  {
    name: "Sun",
    visit: 4300,
    click: 2100
  }
];

const Chart = () => {
  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
