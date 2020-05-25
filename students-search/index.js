document.addEventListener('DOMContentLoaded', () => {
    const buttonQA = document.querySelector('.button-QA');
    const buttonJS = document.querySelector('.button-JS');
    const buttonJava = document.querySelector('.button-Java');
    const buttonPython = document.querySelector('.button-Python');



    const createStudent = (studentData) => {
        const { competitions, competitionType, date, id, average } = studentData;

        const infoStudent = document.createElement("tr");
        infoStudent.className = 'student-info';
        const averageFunc = () => {
            var average = 0;
            for (let i = 0; i < studentData.competitions.length; i++) {
                average += studentData.competitions[i];

            }
            average = Math.round(average / 7);

            return average;
        };


        infoStudent.innerHTML = `
                                    <td><a href="">${id}</a></td>
                                    <td>${averageFunc()}</td>
                                    <td>${competitions[0]}</td>
                                    <td>${competitions[1]}</td>
                                    <td>${competitions[2]}</td>
                                    <td>${competitions[3]}</td>
                                    <td>${competitions[4]}</td>
                                    <td>${competitions[5]}</td>
                                    <td>${competitions[6]}</td>
                                    <td>${date}</td>
        `;

        return infoStudent;
    };

    const handleButtonClick = () => {
        fetch('http://goiteens.club/hse/back/students.php')
            .then(data => data.json())
            .then(data => {

                const tableStudent = document.querySelector('.table');

                for (let i = 0; i < data.length; i++) {
                    const infoStudent = {
                        ...data[i],

                    };


                    const newStudent = createStudent(infoStudent);
                    tableStudent.append(newStudent);
                }

            })
    };
    const handleButtonQAClick = () => {
        fetch('http://goiteens.club/hse/back/students.php')
            .then(data => data.json())
            .then(data => {

                const tableStudent = document.querySelector('.table');

                for (let i = 0; i < data.length; i++) {
                    const infoStudent = {
                        ...data[i],

                    };
                    if (infoStudent.competitionType === "QA") {
                        const newStudent = createStudent(infoStudent);
                        tableStudent.append(newStudent);
                    };
                };

            })
    };
    const handleButtonJSClick = () => {
        fetch('http://goiteens.club/hse/back/students.php')
            .then(data => data.json())
            .then(data => {

                const tableStudent = document.querySelector('.table');

                for (let i = 0; i < data.length; i++) {
                    const infoStudent = {
                        ...data[i],

                    };
                    if (infoStudent.competitionType === "JS") {
                        const newStudent = createStudent(infoStudent);
                        tableStudent.append(newStudent);
                    };
                };

            })
    };
    const handleButtonJavaClick = () => {
        fetch('http://goiteens.club/hse/back/students.php')
            .then(data => data.json())
            .then(data => {

                const tableStudent = document.querySelector('.table');

                for (let i = 0; i < data.length; i++) {
                    const infoStudent = {
                        ...data[i],

                    };
                    if (infoStudent.competitionType === "Java") {
                        const newStudent = createStudent(infoStudent);
                        tableStudent.append(newStudent);
                    };
                };

            })
    };
    const handleButtonPythonClick = () => {
        fetch('http://goiteens.club/hse/back/students.php')
            .then(data => data.json())
            .then(data => {

                const tableStudent = document.querySelector('.table');

                for (let i = 0; i < data.length; i++) {
                    const infoStudent = {
                        ...data[i],

                    };
                    if (infoStudent.competitionType === "Python") {
                        const newStudent = createStudent(infoStudent);
                        tableStudent.append(newStudent);
                    };
                };

            })
    };




    buttonQA.addEventListener('click', handleButtonQAClick);
    buttonJS.addEventListener('click', handleButtonJSClick);
    buttonJava.addEventListener('click', handleButtonJavaClick);
    buttonPython.addEventListener('click', handleButtonPythonClick);
    //handleButtonClick();

});