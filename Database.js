'use strict'
;(function () {
  let database = {
    idCounter: 3,
    problems: [
        {
        id: 1,
        title: 'Как в правильно задать условие на кол-во скрытых элементов с rate:hidden?',
        content: `3


Есть перечень элементов с классом rate. Все таких элементов 24, но выводятся они по 8. При клике на кнопку "показать еще" открываются еще 8 с помощью slideDown.

Мне нужно измерять количество скрытых элементов rate при помощи rate:hidden, и если их 0, то убирать кнопку "показать еще".

Простыми словами, есть список товаров которые открываются при клике на кнопку "ещё". Нужно чтобы в конце списка кнопка "ещё" исчезала.

Совсем не знаю как правильно задать такое условие. Или нужно функцию какую то прописывать?

$(document).ready(function () {

    $('.rate').slice(0, 8).show();

    $(function (e) {
        if ($('.rate:hidden').length == 0) {
            $('.more-button').css("display", "none");
            $('.allert').css("display", "block");
        } else {
            $('.more-button').on('click', function (e) {
                e.preventDefault();
                $('.rate:hidden').slice(0, 8).slideDown();
            });
        };
    });

}); `,
        points: 3,
        viewsNumber: 10,
        badges: [''],
        comments: [
            {
                id: 1,
                content: `2

                Необходимо отслеживать количество элементов через length, а так же перенести часть действий внутрь функции отслеживания нажатия кнопки:
                
                    $(document).ready(function(){
                        $('.rate').hide();
                        $('.rate').slice(0, 8).show();
                        $('.allert').hide();
                
                
                <button class="more-button">Тык</button>`
            }
        ]
        },
        {
            id: 1,
            title: 'Вывести всех людей в консоль, вывести средний возраст людей и имя человека с самой большой зарплатой в списке',
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
            badges: [''],
            comments: [
                {
                    id: 2,
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
  const Database = {}

  Database.getProblems = function getProblems () {
      return JSON.parse(JSON.stringify(database.problems))
  }

  Database.addProblem = function addProblem (title, content) {
      database.problems.push({
          id: database.idCounter,
          title: title,
          content: content,
          points: 0,
          comments: []
      })
      database.idCounter++
      save()
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