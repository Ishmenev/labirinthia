const source = "src"; // Название папки с исходными файлами

// Экспортируем пути для gulpfile.js
module.exports = {

 
  addModule: {
    template: source + "/components/_template/*.*",
    result: source + "/components/"
  },


};