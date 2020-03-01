
document.querySelector('[data-addproblem]')
    .addEventListener('click', function (event) {
        event.preventDefault()

        const title = document.querySelector('[data-titleplace]').value
        const content = document.querySelector('[data-contentplace]').value
        const badges = document.querySelector('[data-badges]').value.split(',').map(x => x.trim())
        
        const problemId = Database.addProblem(title, content, badges)
        location.replace('./inner.html?id=' + problemId)
    })