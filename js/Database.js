'use strict'
;(function () {
  let database = {
    idCounter: 4,
    idCommentCounter: 4,
    problems: [
        {
        id: 0,
        title: 'Как в правильно задать условие на кол-во скрытых элементов с rate:hidden?',
        content: 'Как в правильно задать условие на кол-во скрытых элементов с rate:hidden?',
        points: 3,
        viewsNumber: 10,
        badges: ['JSON', 'JS'],
        comments: [
            {
                id: 1,
                points: 5,
                content: 'Необходимо отслеживать количество элементов через length, а так же перенести часть действий внутрь функции отслеживания нажатия кнопки'
            }
        ]
        },
        {
            id: 1,
            title: 'Вывести всех людей в консоль, вывести средний возраст людей и имя человека с самой большой зарплатой в списке',
            content: 'Не могу понять, что вообще делать.',
            points: 3,
            viewsNumber: 10,
            badges: ['PHP', 'JS'],
            comments: [
                {
                    id: 2,
                    points: 2,
                    content: `var personWithMaxSalary = massive.reduce((res, item) => (item.summ > res.summ)? item : res);
                    console.log(personWithMaxSalary.name, "makes the most money.");
                    циклы в многомерном массиве
                    
                    Многомерность тут проявляется не очень сильно.
                    
                    for (var i = 0; i < massive.length; i++) {
                    var item = massive[i];
                    console.log(item.name, item.date, item.summ);
                    }`
                }
            ]
        },
        {
            id: 2,
            title: 'Как превратить обычный меню в “бургер” меню',
            content: `var chislo = prompt('Введите ко-во массивов');
            var massive = [];
            
                for (let i=0; i < chislo; i++) {
                    massive.push({
                        date: (new Date(Math.floor(Math.random() * (d2 - d1) + d1))).toDateString(),
                        summ: Math.floor(Math.random() * (500 - 0 + 1)) + 0,
                        name: pn[Math.floor(Math.random() * pn.length)]
                    });
                }
                console.table(massive);
            Не могу понять, как написать циклы в многомерном массиве. Если брать просто массивы через строку, то все ок.
            
            А как именно тут получить - "имя человека с самой большой зарплатой в списке"?
            Не могу понять, что вообще делать. `,
            points: 3,
            viewsNumber: 10,
            badges: ['PHP', 'JS'],
            comments: [
                {
                    id: 3,
                    points: 0,
                    content: `var personWithMaxSalary = massive.reduce((res, item) => (item.summ > res.summ)? item : res);
                    console.log(personWithMaxSalary.name, "makes the most money.");
                    циклы в многомерном массиве
                    
                    Многомерность тут проявляется не очень сильно.
                    
                    for (var i = 0; i < massive.length; i++) {
                    var item = massive[i];
                    console.log(item.name, item.date, item.summ);
                    }`
                }
            ]
        },
        {
            id: 3,
            title: 'Несколько условий для цикличного вывода данных из таблицы',
            content: `var chislo = prompt('Введите ко-во массивов');
            var massive = [];
            
                for (let i=0; i < chislo; i++) {
                    massive.push({
                        date: (new Date(Math.floor(Math.random() * (d2 - d1) + d1))).toDateString(),
                        summ: Math.floor(Math.random() * (500 - 0 + 1)) + 0,
                        name: pn[Math.floor(Math.random() * pn.length)]
                    });
                }
                console.table(massive);
            Не могу понять, как написать циклы в многомерном массиве. Если брать просто массивы через строку, то все ок.
            
            А как именно тут получить - "имя человека с самой большой зарплатой в списке"?
            Не могу понять, что вообще делать. `,
            points: 3,
            viewsNumber: 10,
            badges: ['JS'],
            comments: [
                {
                    id: 4,
                    points: 3,
                    content: `var personWithMaxSalary = massive.reduce((res, item) => (item.summ > res.summ)? item : res);
                    console.log(personWithMaxSalary.name, "makes the most money.");
                    циклы в многомерном массиве
                    
                    Многомерность тут проявляется не очень сильно.
                    
                    for (var i = 0; i < massive.length; i++) {
                    var item = massive[i];
                    console.log(item.name, item.date, item.summ);
                    }`
                }
            ]
        }
    ]
  }
  load()
  save()
  const Database = {}

  Database.getProblems = function getProblems () {
      return JSON.parse(JSON.stringify(database.problems))
  }

  Database.getProblemByid = function getProblemByid (problemId) {
    for (const problem of database.problems) {
        if (problem.id === problemId) {
            return JSON.parse(JSON.stringify(problem))
        }
    }
    return null
  }

  Database.commentPointsPlus = function commentPointsPlus (commentId) {
    for (const problem of database.problems) {
        for (const comment of problem.comments) {
            if (comment.id === commentId) {
                comment.points++
                save()
                return true
            }
        }
    }
    return false
  }

  Database.commentPointsMinus = function commentPointsMinus (commentId) {
    for (const problem of database.problems) {
        for (const comment of problem.comments) {
            if (comment.id === commentId) {
                comment.points--
                save()
                return true
            }
        }
    }
    return false
  }

  Database.addProblem = function addProblem (title, content, badges = []) {
      const problem = {
        id: database.idCounter,
        title: title,
        content: content,
        points: 0,
        badges: badges,
        viewsNumber: 0,
        comments: []
      }
      database.problems.push(problem)

      database.idCounter++
      save()

      return problem.id
  }

  Database.addComment = function addComment (problemId, commentContent) {
    for (const problem of database.problems) {
        if (problem.id === problemId) {
            const comment = {
                id: database.idCommentCounter,
                content: commentContent,
                points: 0
            }

            database.idCommentCounter++
            problem.comments.push(comment)
            save()
            return true
        }
    }
    return false
  }

  window.Database = Database

  function save () {
      localStorage.setItem('db', JSON.stringify(database))
  }

  function load () {
    const jsonString = localStorage.getItem('db')
    if(jsonString) {
        database = JSON.parse(jsonString)
    }
}
})();