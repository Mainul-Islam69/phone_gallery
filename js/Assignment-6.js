const allPhone = () => {
    const searchValue = document.getElementById('input');
    const allValue = searchValue.value;

    if (allValue == '') {
        alert("Page Not Found")
    }
    searchValue.value = '';
    const url = `https://openapi.programming-hero.com/api/phones?search=${allValue}`;

    fetch(url)
        .then(res => res.json())
        .then(data => showPhone(data.data))
    searchValue.value = '';
}
const showPhone = (phones) => {

    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';
    searchResult.textContent = '';

    for (const phone of phones) {
        // console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card h-100">
                     <img class="w-50 " src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h3>Name : ${phone.phone_name} </h3>
                    <h3>Brand: ${phone.brand} </h3>                        
                    </div>
                    <button onclick="details('${phone.slug}')" class="btn btn-success w-50">Details</button>
         </div>
        `;
        searchResult.appendChild(div);
        document.getElementById('phone-details').textContent = '';


    }
}
const details = (id) => {
    // console.log(id);
    const url = (`  https://openapi.programming-hero.com/api/phone/${id}`);
    // console.log(url);



    fetch(url)
        .then(res => res.json())
        .then(data => displyPhoneDetails(data.data))

}
const displyPhoneDetails = (phone) => {
    // console.log(phone);

    const pahoneDetails = document.getElementById('phone-details');
    pahoneDetails.textContent = ''
    const div = document.createElement('div');
    div.classList.add('card');
    div.classList.add('card-details');
    div.innerHTML = `
                <img class="w-25 mx-auto" src="${phone.image}" class="card-img-top" alt="...">
                        <div class="card-body mx-auto">
                            <h3>Name :${phone.name} </h3>
                            <p> ${phone.releaseDate != '' ? phone.releaseDate : 'not found'}
                           </p> 
                            
                           
                        <p>stroage:${phone.mainFeatures.storage}</p> 
                        <p>displaySize":${phone.mainFeatures.displaySize}</p> 
                        <p>chipset:${phone.mainFeatures.chipSet}</p> 
                        <p>memory:${phone.mainFeatures.memory}</p> 
                        </div>
                        `;
    pahoneDetails.appendChild(div)
    // <h4>Feature :</h4>
}