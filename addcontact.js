//Add Contact
let viewTUrl= `https://newaccount1624350882828.freshdesk.com/api/v2/contacts`
let key = `CS3fbhfEJ91slXtBpyNs`
const saveContactBtn=document.querySelector('#save-btn')
saveContactBtn.addEventListener("click", (e) => {
  e.preventDefault();
    
    let contactFullName = document.getElementById("contact-name");
    let contactEmail = document.getElementById("contact-email");
    let contactPhone = document.getElementById("contact-phone");
    let contactTitle = document.getElementById("contact-title");

    let newObject = {
      active: false,
address: null,
description: null,
id: null,
language: "en",
mobile: null,
time_zone: "Eastern Time (US & Canada)",
twitter_id: null,
custom_fields: {},
facebook_id: null,
created_at: "2021-06-22T08:34:53Z",
updated_at: "2021-06-22T08:34:53Z",
csat_rating: null,
preferred_source: null,
company_id: null,
      name: contactFullName.value,
      email: contactEmail.value,
      phone: contactPhone.value,
      job_title: contactTitle.value,
    };
    console.log(newObject);
    try {
      fetch(viewTUrl, {
        method: 'POST',
        headers: {
            'Authorization':'BASIC ' + btoa(key),
          "Content-Type": "application/json",
        },
        body:JSON.stringify(newObject)
      }).then((REQ)=> REQ.json)
      .then((res)=> console.log(res))
      alert("contact saved");
      
    } catch (err) {
      alert(err);
    }
  });
