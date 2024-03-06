// alert("hi")

//34-1 Load Data Using Phone Hunter API
// 34-2 Display Phones Dynamically On Each Card
// 34-3 Implement Search Functionality And Display Search Result
// 34-4 Recap Search And Show Conditional Show All Button

const loadPhone = async (searchTexttt) => {
  // const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchTexttt}`);
  const data = await res.json();
  console.log(data);
  // console.log(data.data);
  const phones = data.data
  displayPhones(phones);

  // console.log(phones);
  // for(phn of phones){
  //     // console.log(phn)
  //     // console.log(phn.phone_name);
  //     // displayPhones(phn)
  // }
}


const displayPhones = (phones) => {
  // console.log(phones);
  // console.log(phones.length);

  const phoneContainer = document.getElementById('phone-container');

  //to clear previous content after calling the search function 
  phoneContainer.textContent = ' ';

  console.log(phones.length);
  phones = phones.slice(0, 8);
  console.log(phones)
  // const showAllBtnContainer = document.getElementById('show-all-btn-container');
  // console.log(showAllBtnContainer);
  // if (phones.length > 5) {
  //   showAllBtnContainer.classList.remove("hidden");
  // }


  // // diplay only first 10 phone
  // phones = phones.slice(0, 5);
  // console.log(phones)


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
                  <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        `
    phoneContainer.appendChild(phnCard);
  })
}

const handleSearch = () => {
  // console.log("handle search");
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log(searchText);
  loadPhone(searchText);
  // loadPhone();
}

const handleSearch2 = () => {
  // console.log("handle search");
  const searchField2 = document.getElementById('search-field2');
  // console.log(searchField2);
  const searchText2 = searchField2.value;
  console.log(searchText2);
  loadPhone(searchText2);
  // loadPhone();
}