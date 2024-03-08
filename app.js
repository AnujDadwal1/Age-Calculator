const result = document.querySelector(".result");
function calculateAge(){
    const birthdayInput = document.getElementById("birthday");
    const birthday = new Date(birthdayInput.value);
    const curntdate = new Date();
    const ageinms = curntdate - birthday;
    const ageins = ageinms/1000;
    const ageinmin = ageins/60; 
    const ageinh = ageinmin/60; 
    const ageind = ageinh/24; 
    const ageinm = ageind/30.44; 
    const ageiny = ageinm/12; 
    const age={
        year : Math.floor(ageiny),
        Months : Math.floor(ageinm % 12),
       Days: Math.floor(ageind %30.44),
    };
    result.innerHTML = `Your age is ${age.year} years, ${age.Months} Months and ${age.Days} Days.`
}
const button = document.querySelector('button');
button.addEventListener('click',calculateAge);