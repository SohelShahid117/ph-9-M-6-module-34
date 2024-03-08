// alert("hi")

//34-1 Load Data Using Phone Hunter API
// 34-2 Display Phones Dynamically On Each Card
// 34-3 Implement Search Functionality And Display Search Result
// 34-4 Recap Search And Show Conditional Show All Button
// 34-5 Show And Hide Loading Spinner While Loading API Data
// 34-6 (Optional) Implement Show All Button To Display All Data
// 34-7 Dynamic API Data Load For Phone Show Details Button
// 34-8 Display Show Details With Nested Object Data
// 34-9 Module Summary And Practice With AI Universe HUB

const loadPhone = async (searchTexttt,isShowAll) => {
  // const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTexttt}`);
  const data = await res.json();
  console.log(data);
  // console.log(data.data);
  const phones = data.data
  displayPhones(phones,isShowAll);

  // console.log(phones);
  // for(phn of phones){
  //     // console.log(phn)
  //     // console.log(phn.phone_name);
  //     // displayPhones(phn)
  // }
}


const displayPhones = (phones,isShowAll) => {
  // console.log(phones);
  // console.log(phones.length);

  const phoneContainer = document.getElementById('phone-container');

  //to clear previous content after calling the search function 
  phoneContainer.textContent = ' ';

  console.log(phones.length);
  if(phones.length===0){
    alert('please write the serach item properly')
  }
  // diplay only first 8 phone & show all btn
  const showAllBtnContainer = document.getElementById('show-all-btn-container');
  console.log(showAllBtnContainer);

  if(phones.length>8 && !isShowAll){
    showAllBtnContainer.classList.remove('hidden');
  }else{
    showAllBtnContainer.classList.add('hidden');
  }
  console.log('is show all ?',isShowAll)
  if(!isShowAll){
    phones = phones.slice(0, 8);
    console.log(phones)
  }
  
  phones.forEach((phnnn) => {
    console.log(phnnn);
    const phnCard = document.createElement('div');
    phnCard.classList = ` card bg-gray-100 shadow-xl p-10 m-4`
    phnCard.innerHTML = `
            <figure class="px-10 pt-10">
                <img src="${phnnn.image}" alt="Shoes" class="rounded-xl" />
            </figure>

            <div class="card-body items-center text-center">
                <h2 class="card-title">${phnnn.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>

                <div class="card-actions">
                  <button onclick='handleShowDetails("${phnnn.slug}")' class="btn  btn-primary">Show Details</button>
                </div>
            </div>
        `
    phoneContainer.appendChild(phnCard);
  });
  loadingSpinnerToggle(false);
}

const handleSearch = (isShowAll) => {
  loadingSpinnerToggle(true);
  // console.log("handle search");
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText,isShowAll);
  // loadPhone();
}

const handleSearch2 = () => {
  loadingSpinnerToggle(true);
  // console.log("handle search");
  const searchField2 = document.getElementById('search-field2');
  // console.log(searchField2);
  const searchText2 = searchField2.value;
  console.log(searchText2);
  loadPhone(searchText2);
  // loadPhone();
}

//loading spinner
const loadingSpinnerToggle = (ldngSpnr) =>{
  const loadingSpinner = document.getElementById('loading-spinner');
  if(ldngSpnr){
    loadingSpinner.classList.remove('hidden');
  }else{
    loadingSpinner.classList.add('hidden');
  }
  console.log(loadingSpinner);
}

//handle show all
const handleShowAll = () => {
  // alert('angta lagche');
  handleSearch(true);
  //handleSearch2(true);
}

const handleShowDetails =async (id) =>{
  // alert('hi');
  console.log(id);
  //load single phone data
  // https://openapi.programming-hero.com/api/phone/${id}

  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  console.log(data);
  const phn = data.data;
  showPhoneDetails(phn);
}

const showPhoneDetails = (phnData) =>{
  const phoneName = document.getElementById('phone-name');
  phoneName.innerText = `${phnData.name}`

  const showPhoneDetailContainer = document.getElementById('show-phone-detail-container');
  console.log(showPhoneDetailContainer);

  showPhoneDetailContainer.innerHTML = `
  <img src='${phnData.image}'>
  <p><span>Memory:</span>${phnData?.mainFeatures?.memory}</p>
  <p><span>Display Size:</span>${phnData?.mainFeatures?.displaySize}</p>
  <p><span>Storage:</span>${phnData?.mainFeatures?.storage}</p>
  <p><span>Slug:</span>${phnData?.slug}</p>
  <p><span>Brand:</span>${phnData?.brand}</p>
  <p><span>Name:</span>${phnData?.name}</p>
  <p><span>GPS:</span>${phnData?.others?.GPS || 'no GPS available'}</p>
  <p><span>USB:</span>${phnData?.others?.USB || 'no USB available'}</p>
  <p><span>WLAN:</span>${phnData?.others?.WLAN}</p>
  <p class="py-4">Press ESC key or click the button below to close</p>
  <div class="modal-action text-center">
    <form method="dialog">
      <!-- if there is a button in form, it will close the modal -->
      <div class='text-center'>
        <button class="btn">Close</button>
      </div>
    </form>
  </div>
  
  `
  show_details_modal.showModal()
  // alert('hlo')
  // alert(phnData);
  console.log(phnData);
}