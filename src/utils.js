const checkTheTime = (jobPostDateProp) => {

    const milisecondsInDay = 86400000
    const currentDate = new Date()
    const jobPostDate = new Date(jobPostDateProp)
    const timeDifferenceInDays = ( Math.floor(currentDate/milisecondsInDay)-Math.floor(jobPostDate/milisecondsInDay))
    

    if (timeDifferenceInDays < 1) {
        return "Today"
      } else if (timeDifferenceInDays === 1) {
        return "One day ago"
      } else if (timeDifferenceInDays < 7) {
        return Math.floor(timeDifferenceInDays) + " days ago"
      } else if (timeDifferenceInDays === 7) {
        return "One week ago"
      } else if (timeDifferenceInDays < 30.4) {
        return Math.floor(timeDifferenceInDays / 7) + "weeks ago"
      } else if (timeDifferenceInDays === 30.4) {
        return "One month ago"
      } else if (timeDifferenceInDays > 30.4) {
        return Math.floor(timeDifferenceInDays / 30.4) + " months ago"
      } 
}
export default checkTheTime
 