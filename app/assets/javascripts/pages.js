
// function getData() {
//   var employeesDiv = document.getElementById('employees');

//   $.get('https://data.cityofchicago.org/resource/xzkq-xp2w.json', function(employees) {

//     var htmlString = "";

//     for (var i = 0; i < employees.length; i++) {
//       var employee = employees[i];
//       htmlString += '<div class="employee" onclick="changeEmployee(this)">'
//       htmlString += '<div class="employee">'
//       htmlString += '<h2>' + employee.name + '</h2>';
//       htmlString += '<p>Job Title: ' + employee.job_titles + '</p>';
//       htmlString += '<p>Department: ' + employee.department + '</p>';
//       htmlString += '<p>Salary: ' + employee.annual_salary + '</p>';
//       htmlString += '</div>'
//       htmlString += '</br>';
//     }
//     employeesDiv.innerHTML = htmlString;

//   });

// }

// function changeEmployee(employeeDiv) {
//   if (employeeDiv.style.color === 'lightgray') {
//     employeeDiv.style.color = '';
//   } else {
//     employeeDiv.style.color = 'lightgray';
//   }
// }

function getData() {
  var salaryDiv = document.getElementById('salary');


$.get('https://data.cityofchicago.org/resource/tt4n-kn4t.json', function(salaries) {
  console.log(salaries);
  var htmlString = "";

  for (var i = 0; i < salaries.length; i++) {
    var salary = salaries[i];
    htmlString += '<div class="salary" onclick="changeSalary(this)">'
    htmlString += '<h2> $' + salary.annual_salary + '</h2>';
    htmlString += '<p> Department: ' + salary.department + '</p>';
    htmlString += '<p> Job Title: ' + salary.job_titles + '</p>';
    htmlString += '</br>';
    htmlString += '</div>';
  }
    salaryDiv.innerHTML = htmlString;
  });
}

function changeSalary(salaryDiv) {
    if (salaryDiv.style.color === 'lightblue') {
      salaryDiv.style.color = '';
    } else {
      salaryDiv.style.color = 'lightblue';
  }
}

function showFire() {
  var salaries = document.getElementsByClassName('salary');

  for (var i = 0; i < salaries.length; i++) {
    var salary = salaries[i];
    if (salary.innerHTML.indexOf('FIRE') !== -1) {
      salary.classList.remove('hidden');
    } else {
      salary.classList.add('hidden');
    }
  }
}