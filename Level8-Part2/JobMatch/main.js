// Create a matchmaking system that helps discover jobs for devs based on a number of factors.
// the function will take a candidate and job.




function match(candidate, job) {
    if (!job.maxSalary || !candidate.minSalary) throw TypeError('Missing salary')
    return job.maxSalary >= (candidate.minSalary * .9)
  }

  const candidate1 = {minSalary: 190000}
  const job1 = {maxSalary: 171000}
  
  console.log(match(candidate1, job1)) // Output: true
  

  const candidate2 = {minSalary: 190000}
  const job2 = {maxSalary: 160000}
  
  console.log(match(candidate2, job2)) // Output: false