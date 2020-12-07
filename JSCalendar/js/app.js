const button=document.querySelector('.btn-start');
const container=document.querySelector('.container');
const months=24;
const openDoor=(path, event)=>{
    event.target.paretNode.style.backgroundImage=`url("${path}")`;
    event.target.style.backgroundColor="#333";
}
const createCalendar=()=>{
    console.log('test');
    for(let i=0; i<months; i++){
        const calendarDoor=document.createElement('div')
        calendarDoor.classList.add('img');
        calendarDoor.style.gridArea="door"+(i+1);
        container.appendChild(calendarDoor);

        const calendarDoorText=document.createElement('div')
        calendarDoor.classList.add('text');
        calendarDoorText.innerHTML=i+1;
        calendarDoor.appendChild(calendarDoorText);
        let picNumber=i+1;
        let picPath=`./img/pic${picNumber}`;
        calendarDoorText.addEventListener('click', openDoor.bind(null, picPath));
    }
}
button.addEventListener('click', createCalendar);