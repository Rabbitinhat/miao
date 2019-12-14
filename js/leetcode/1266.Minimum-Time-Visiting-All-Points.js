/**
 * @param {number[][]} points
 * @return {number}
 */
 var minTimeToVisitAllPoints = function(points) {
    let now = points[0]
    let count = 0
    for(let i=1; i<points.length; i++){
      count += Math.max(Math.abs(now[0] - points[i][0]), Math.abs(now[1] - points[i][1]))
      now = points[i]
    }
    return count
};

console.log(minTimeToVisitAllPoints([[3, 2], [-2, 2]]))