// С ниже приведенным объектом решить следующие задачи:
//     1. Создать строку из названий предметов написаных через запятую
//     2. Посчитать общее количество студентов и учителей на всех предметах
//     3. Получить среднее количество студентов на всех пердметах
//     4. Создать массив из объектов предметов
//     5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
    mathematics: {
      students: 200,
      teachers: 6,
    },
    biology: {
      students: 120,
      teachers: 6,
    },
    chemistry: {
      students: 100,
      teachers: 3,
    },
    geography: {
      students: 60,
      teachers: 2,
    },
  };
  
  
  // 1. Создать строку из названий предметов написаных через запятую
  function getStringSubjects(subjects) {
    return Object.keys(subjects).join()
  }
  const items = getStringSubjects(subjects)

  
  
  
  // 2. Посчитать общее количество студентов и учителей на всех предметах
  function getObjectValues(subjects) {
    return Object.values(subjects)
  }
  function getStudentsAndTeacersCount(subjects) {
    const values = Object.values(subjects)
    const allStudens = values.reduce((acc, item) => acc + item.students, 0)
    const allTeachers = values.reduce((acc, item) => acc + item.teachers, 0)
    // return `Всего ${allStudens} студентов и ${allTeachers} учителей`
    return allStudens + allTeachers
  }
    
  
  // 3. Получить среднее количество студентов на всех пердметах
  function getAverageStudentsCount(subjects) {
    const values = getObjectValues(subjects)
    const subjectsLenght = Object.keys(subjects).length
    return values.reduce((acc, item) => acc + item.students, 0) / subjectsLenght
  }
  
  
  // 4. Создать массив из объектов предметов
  const arr = getObjectValues(subjects)
  // console.log(arr);
  
  // 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
  const resultSort = arr.sort((a, b) => a.teachers + b.teachers)
  // console.log(resultSort);

  