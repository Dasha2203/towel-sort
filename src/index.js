
// You should implement your task here.
function towelSort(matrix) {
  if (!matrix?.length) return []

  let res = []

  matrix.forEach((subArr, idx) => {
    if (idx % 2) {
      res = [...res, subArr.reverse()]
    } else {
      res = [...res, subArr]
    }
  })

  return res.flat()
}

module.exports = towelSort