function transformArrayToObject(arrayOfObjects) {
  // Initialize an empty object to accumulate our results
  const result = {}

  // Iterate over each object in the array
  arrayOfObjects.forEach((obj) => {
    // For each key in the object
    Object.keys(obj).forEach((key) => {
      // If the result object doesn't have an array for this key, create it
      if (!result[key]) {
        result[key] = []
      }
      // Append the current value to the appropriate array
      result[key].push(obj[key])
    })
  })

  return result
}

export function buildChartData(arrayData) {
  const chart = transformArrayToObject(arrayData)

  return {
    labels: chart['date'],
    datasets: [
      {
        label: 'Daily Index',
        data: chart['volume'],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true
      }
    ]
  }
}
