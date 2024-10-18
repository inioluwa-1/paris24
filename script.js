var allAthletes = JSON.parse(localStorage.getItem('allAthletes')) || [];

function register() {
    var athleteInput = document.getElementById("athlete")
    var genderInput = document.getElementById("gender")
    var sportInput = document.getElementById("sport")
    var countryInput = document.getElementById("country")
    var errorMsg = document.getElementById("errorMsg")
    var show = document.getElementById("show")
    
    var athlete = athleteInput.value;
    var gender = genderInput.value;
    var sport = sportInput.value;
    var country = countryInput.value;

    if (athlete === '' || gender === '' || sport === '' || country === '') {
        errorMsg.style.display = 'block'
    } else {
        errorMsg.style.display = 'none'

        athleteInput.value = '';
        genderInput.value = '';
        sportInput.value = '';
        countryInput.value = '';
        var person = {
            athlete,
            gender,
            sport,
            country
        };

        allAthletes.push(person);
        saveLocalStorage();
        workings();
        console.log(allAthletes);
    }
}

function saveLocalStorage() {
    localStorage.setItem('allAthletes', JSON.stringify(allAthletes));
}

function workings(){
    var ind = allAthletes.length - 1
    console.log(ind)
    var show = document.getElementById("show");
    show.innerHTML = `
        <tr class="fw-bold">

            <td>NAME</td>
            <td>GENDER</td>
            <td>SPORT</td>
            <td>COUNTRY</td>
            <td>ACTIONS</td>
        </tr>
        `;

            show.innerHTML += `
                    <tr>
  
                        <td>${allAthletes[ind].athlete}</td>
                        <td>${allAthletes[ind].gender}</td>
                        <td>${allAthletes[ind].sport}</td>
                        <td>${allAthletes[ind].country}</td>

                        <td class="d-flex gap-2">
                            <button class="btn btn-danger" onclick='deleteitem(${ind})'>Delete</button>
                            <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="editmodal(${ind})">Edit</button>
                        </td>
                    </tr>
            `;
        }
    

function deleteitem(index) {
    console.log(index);
    var confamu = confirm("Are you sure you want to delete")
    if (confamu == true) {
        allAthletes.splice(index, 1);
        saveLocalStorage();
        workings();
    } 
}

function editmodal(index) {
    var selectedAthlete = allAthletes[index];
    var athleteEdit = document.getElementById("athleteEdit");
    var genderEdit = document.getElementById("genderEdit");
    var sportEdit = document.getElementById("sportEdit");
    var countryEdit = document.getElementById("countryEdit");

    athleteEdit.value = selectedAthlete.athlete;
    genderEdit.value = selectedAthlete.gender;
    sportEdit.value = selectedAthlete.sport;
    countryEdit.value = selectedAthlete.country;
    document.getElementById("editIndex").value = index;
}

function editItem() {
    var athleteEdit = document.getElementById("athleteEdit");
    var genderEdit = document.getElementById("genderEdit");
    var sportEdit = document.getElementById("sportEdit");
    var countryEdit = document.getElementById("countryEdit");
    var editIndex = document.getElementById("editIndex").value;


    allAthletes[editIndex].athlete = athleteEdit.value;
    allAthletes[editIndex].gender = genderEdit.value;
    allAthletes[editIndex].sport = sportEdit.value;
    allAthletes[editIndex].country = countryEdit.value;

    saveLocalStorage()
    workings();
}
