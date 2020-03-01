'use strict'
;(function () {
  
  const Location = {}

  Location.getId = function getId () {
      if (!location.search) {
          return false
      }

      const array = location.search.slice(1).split('=')
      const index = array.indexOf('id')

      array.push(-1)

      if (index === -1) {
        return false
      }

      return parseInt(array[index + 1])
  }

  window.Location = Location


})();