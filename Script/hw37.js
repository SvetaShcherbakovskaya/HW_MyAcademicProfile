const root = ReactDOM.createRoot(document.getElementById("root"));

// Данные студента — замените на свои
const title = "Мой учебный профиль";
const studentName = "Света";
const studentAge = 32;
const studentCity = "Нетания";
const courseName = "Fullstack Development";
const totalLessons = 110;
const completedLessons = 37;

// Компонент получает данные через props
const Student = ({
                     title,
                     name,
                     age,
                     city,
                     course,
                     totalLessons,
                     completedLessons
                 }) => {
    // Вычисляем количество оставшихся занятий
    const remainingLessons = totalLessons - completedLessons;

    return (
        <div className="profile">
            <h1>{title}</h1>

            <p><strong>Имя:</strong> {studentName}</p>
            <p><strong>Возраст:</strong> {studentAge}</p>
            <p><strong>Город:</strong> {city}</p>
            <p><strong>Курс:</strong> {course}</p>
            <p><strong>Всего занятий:</strong> {totalLessons}</p>
            <p><strong>Пройдено занятий:</strong> {completedLessons}</p>
            <p><strong>Осталось занятий:</strong> {remainingLessons}</p>
        </div>
    );
};

// Передаём значения переменных в компонент
root.render(
    <Student
        title={title}
        name={studentName}
        age={studentAge}
        city={studentCity}
        course={courseName}
        totalLessons={totalLessons}
        completedLessons={completedLessons}
    />
);