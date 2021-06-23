let viewTUrl= `https://newaccount1624350882828.freshdesk.com/api/v2/contacts`
let key = `CS3fbhfEJ91slXtBpyNs`

const clickContactList = document.querySelector('#btn-contacts');
clickContactList.addEventListener('click', ()=>{fetch(viewTUrl , {
    method: 'GET',
    headers: {
        'Authorization':'BASIC ' + btoa(key)}        
    }
)
.then((data) => data.json())
.then((txt) => {

    console.log(txt)
    let output= `
    
    <thead> <tr><th>Name</th>
    <th>Title</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Facebook ID</th>
</tr>
</thead>`;
txt.forEach(element => {
output += `<tr>
<td>${element.name}</td>
<td>${element.job_title}</td>
<td>${element.email}</td>
<td>${element.phone}</td>
<td>${element.facebook_id}</td>
</tr>
`
document.getElementById('output').innerHTML= output;



});
})

});


let viewUrl= `https://newaccount1624350882828.freshdesk.com/api/v2/tickets`
let key2 = `CS3fbhfEJ91slXtBpyNs`
const clickTicketlist = document.querySelector('#btn-tickets');
clickTicketlist.addEventListener('click', ()=> {fetch(viewUrl,{
    method: 'GET',
    headers: {
        'Authorization':'BASIC ' + btoa(key2),
        'Content-Type': 'application/json',
    }        
    }).then((req)=> req.json())
.then((datat)=> {
    console.log(datat);

})

})
