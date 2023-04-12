let bet_amount = document.getElementById('bet_amount');
let num_per_send = document.getElementById('num_per_send');


function init(){
    //run_inject.style.backgroundColor = 'greenyelow';
    localStorage.run_inject = true;
    if (!localStorage.bet_amount) localStorage.bet_amount = 1;
    if (!localStorage.num_per_send) localStorage.num_per_send = 1;
    if(!localStorage.time_pivot) {
        let new_time_pivot = [{time:"21:00:00", period:1000}]
        localStorage.time_pivot = JSON.stringify(new_time_pivot);
    }

    bet_amount.value = parseInt(localStorage.bet_amount);
    num_per_send.value = parseInt(localStorage.num_per_send);
    let time_pivot = JSON.parse(localStorage.time_pivot);
}
init();



bet_amount.addEventListener('input',()=>{
    localStorage.bet_amount = bet_amount.value;
});
num_per_send.addEventListener('input',()=>{
    localStorage.num_per_send = num_per_send.value;
})