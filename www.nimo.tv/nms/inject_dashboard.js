let client_type = document.getElementById('client_type');
let bet_amount = document.getElementById('bet_amount');
let num_per_send = document.getElementById('num_per_send');
let pivot_table = document.getElementById('pivot_table');
let add_pivot = document.querySelector('.add_pivot');
let num_days_result = document.getElementById('num_days_result');
let pivot_arr = [];

function add_new_pivot(pivot_info){
    var row = pivot_table.insertRow();

    let time_start_td = document.createElement('td');
    let time_start = document.createElement('input');
    time_start.setAttribute('type','time');
    time_start.setAttribute('step','1');
    time_start.value = pivot_info[0];
    time_start.className = 'time_start';
    time_start.addEventListener('input', function(){
        pivot_info[0] = time_start.value;
        localStorage.time_pivot = JSON.stringify(pivot_arr);
    });
    time_start_td.appendChild(time_start);
    
    let send_period_td = document.createElement('td');
    let send_period = document.createElement('input');
    send_period.setAttribute('type','number');
    send_period.value = pivot_info[1];
    send_period.className = 'send_period';
    send_period.addEventListener('input', function(){
        pivot_info[1] = parseInt(send_period.value);
        localStorage.time_pivot = JSON.stringify(pivot_arr);
    });
    send_period_td.appendChild(send_period);
    
    let button_delete_td = document.createElement('td');
    let button_delete = document.createElement('button');
    button_delete.textContent = '➖';
    button_delete.className = 'delete_pivot';
    button_delete_td.appendChild(button_delete);
    button_delete.onclick = function(){
        row.remove();
        pivot_arr = pivot_arr.filter(item => item !== pivot_info)
        localStorage.time_pivot = JSON.stringify(pivot_arr);
    }

    row.appendChild(time_start_td);
    row.appendChild(send_period_td);
    row.appendChild(button_delete_td);
    
    pivot_table.appendChild(row);
    return ;
}


function init(){
    //run_inject.style.backgroundColor = 'greenyelow';
    localStorage.run_inject = true;
    num_days_result.value = 1;
    if (!localStorage.bet_amount) localStorage.bet_amount = 1;
    if (!localStorage.client_type) localStorage.client_type = 500;
    if (!localStorage.num_per_send) localStorage.num_per_send = 1;
    if(!localStorage.time_pivot) {
        let new_time_pivot = [["21:00:00", 1000]]
        localStorage.time_pivot = JSON.stringify(new_time_pivot);
    }

    bet_amount.value = parseInt(localStorage.bet_amount);
    client_type.value = parseInt(localStorage.client_type);
    num_per_send.value = parseInt(localStorage.num_per_send);
    pivot_arr = JSON.parse(localStorage.time_pivot)
    console.log(pivot_arr);
    for(let i=0;i<pivot_arr.length;++i)
        add_new_pivot(pivot_arr[i])
}
init();



add_pivot.onclick = function(){
    let new_pivot = ["21:00:00",1000];
    pivot_arr.push(new_pivot);
    add_new_pivot(new_pivot);
    localStorage.time_pivot = JSON.stringify(pivot_arr);
}

bet_amount.addEventListener('input',()=>{
    localStorage.bet_amount = bet_amount.value;
});

client_type.addEventListener('input',()=>{
    localStorage.client_type = client_type.value;
})

num_per_send.addEventListener('input',()=>{
    localStorage.num_per_send = num_per_send.value;
})
