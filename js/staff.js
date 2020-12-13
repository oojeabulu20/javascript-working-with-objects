(function(){
    console.info("Hello JS");
})();

var myObject = { name: "Ose"};
var myObject = { name : "Ose", email: "myemail@company.com"};
console.dir(myObject);

var oseDetails = {
    name : 'Ose',
    age : 21,
    qualifications: {
    gsce : true,
    alevels : true,
    degree : false
    }
 }
console.dir(oseDetails);

var bobDetails = {
    name : 'Bob',
    age : 21,
    getInfo : function(){
    return this.name
    }
}
console.info(bobDetails.getInfo);

var qualifications = [
    {
    subject : "Maths",
    grade : "A"
    },
    {
    subject : "English",
    grade : "B"
    },
    {
    subject : "French",
    grade : "C"
    },
    {
    subject : "Physics",
    grade : "B"
    }
    ];

qualifications.forEach(function(element) {
    console.dir(element);
});

qualifications.forEach(function(element) {
    console.info(element.subject);
    console.info(element.grade);
    });

/*var staff =
    [
    {
    name : "Ose Ojeabulu",
    email : "o.ojeabulu@busy.com"
    },
    {
    name : "Jane Johnson",
    email : "j.johnson@busy.com"
    },
    {
    name : "Ethan Hawkson",
    email : "e.hawkson@busy.com"
    },
    {
    name : "Julie Grant",
    email : "j.grant@busy.com"
    }
   ] */

var staff = [];
document.getElementById('addStaffForm').addEventListener('submit',
function(ev){
ev.preventDefault();
let newStaffName = document.getElementById('staffName').value;
let newStaffEmail= document.getElementById('staffEmail').value;
staff.push({name: newStaffName, email: newStaffEmail});
console.dir(staff)
})

var rebuildList = function(){
    staff.forEach(function(element) {
    var newStaffRow = document.createElement("tr");
    var newStaffName = document.createElement("td");
    newStaffName.innerHTML = element.name;
    var newStaffEmail = document.createElement("td");
    newStaffEmail.innerHTML = element.email;
    newStaffRow.appendChild(newStaffName);
    newStaffRow.appendChild(newStaffEmail);
    document.getElementById('staffTable').appendChild(newStaffRow);
     });
    }

staff.forEach(function(element) {
    var newStaffRow = document.createElement("tr");
    var newStaffName = document.createElement("td");
    newStaffName.innerHTML = element.name;
    var newStaffEmail = document.createElement("td");
    newStaffEmail.innerHTML = element.email;
    newStaffRow.appendChild(newStaffName);
    newStaffRow.appendChild(newStaffEmail);
    document.getElementById('staffTable').appendChild(newStaffRow);
    }); 

    localStorage.setItem('staffList', JSON.stringify(staff));

    var staff = JSON.parse(localStorage.getItem('staffList'));
    if(staff === null){
    staff = [];
    }

    document.getElementById('staffTable').innerHTML = "";

/*localStorage.setItem("count", 1);
if(localStorage.getItem("count") === null){
    localStorage.setItem("count", 1);
    }else{
    localStorage.setItem("count", parseInt(localStorage.getItem("count"))+1);
    }*/