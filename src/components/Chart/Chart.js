import ChartBar from './ChartBar'
import './Chart.css'


const Chart = props => {
    const valueArray = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxval = Math.max(...valueArray)

    return (
        <div className="chart">

            {props.dataPoints.map(dataPoint => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={maxval}
                    label={dataPoint.label} />
            )
            )
            }

        </div>
    )


};

export default Chart