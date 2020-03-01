const problemId = Location.getId()
const problem = Database.getProblemByid(problemId)
const BadgeTemplate = '<a href="#" class="badge badge-dark">%BADGE_LABLE%</a>'

if(!problem) {
    throw Error('Problem is not drfined')
}
document.querySelector('[data-titleplace]').textContent = problem.title
document.querySelector('[data-contentplace]').textContent = problem.content
document.querySelector('[data-badgesplace]').append(
    ...problem.badges.map(badge => {
        const divElement = document.createElement('div')
        divElement.innerHTML = BadgeTemplate.replace('%BADGE_LABLE%', badge)
        return divElement.firstElementChild
    })
)

document.querySelector('[data-comentsnumberplace]').textContent = problem.comments.length

document.querySelector('[data-commentplace]').append(
    ...problem.comments.sort((a, b) => b.points - a.points ).map(comment => {
        const commentHTML = CommentView.getHTML(comment)

        commentHTML.querySelector('[data-plus]')
            .addEventListener('click', function (event) {
                event.preventDefault()
                const result = Database.commentPointsPlus(comment.id)
                if (result) {
                    const commentElem = commentHTML.querySelector('[data-pointsplace]')
                    const points = parseInt(commentElem.textContent)
                    commentElem.textContent = points + 1
                }
        })

        commentHTML.querySelector('[data-minus]')
            .addEventListener('click', function (event) {
                event.preventDefault()
                const result = Database.commentPointsMinus(comment.id)
                if (result) {
                    const commentElem = commentHTML.querySelector('[data-pointsplace]')
                    const points = parseInt(commentElem.textContent)
                    commentElem.textContent = points - 1
                }
        })

        return commentHTML
    }))

   
    // document.querySelector('[data-commentplace]')
    document.querySelector('[data-addcommentbutton]')
        .addEventListener('click', function (event) {
            event.preventDefault()
            const commentContent = document.querySelector('#exampleFormControlTextarea1').value
            const result = Database.addComment(problemId, commentContent)
            
            if (result) {
                location.reload()
            }
    })
    