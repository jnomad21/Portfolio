document.querySelector("#video").playbackRate = .7;
let targetMonth = document.querySelector("#monthInput");
let targetDay = document.querySelector("#dayInput");
let targetYear = document.querySelector("#yearInput");
const grabDiv = document.querySelector("#result");

function getTgtDate(){
let targetDate = `${targetMonth.value}/${targetDay.value}/${targetYear.value}`

return targetDate
}

let todayDate = new Date()
let todayDay = todayDate.getDate();
let todayMonth = todayDate.getMonth()+1; 
let todayYear = todayDate.getFullYear();
if(todayDay<10) 
{
    todayDay='0'+todayDay;
} 

if(todayMonth<10) 
{
    todayMonth='0'+todayMonth;
} 
const today = `${todayMonth}/${todayDay}/${todayYear}`

const numberOfDaysBetween = function (today, getTgtDate) {
    const date1 = new Date(today);
    const date2 = new Date(getTgtDate);
    const oneDay = 1000 * 60 * 60 * 24;
    const diffInTime = date2.getTime() - date1.getTime();
    const daysBetween = Math.round(diffInTime / oneDay);
    return daysBetween;
}
const addDays = document.createElement('p')
function respondToDateSubmit (){
    
    addDays.setAttribute('id',"target-date-result")
    addDays.innerText = numberOfDaysBetween(today, getTgtDate())
    grabDiv.append(addDays)
    targetDay.value =""
    targetMonth.value=""
    targetYear.value=""
}
function clearInputs(){
    grabDiv.remove(addDays)
}
const btn = document.querySelector("button")
btn.addEventListener('click', function(e){
respondToDateSubmit();

})
