const problemId = Location.getId()
const problem = Database.getProblemById(problemId)

if(!problem) {
    trow Error('Problem')
}
console.log(problem)