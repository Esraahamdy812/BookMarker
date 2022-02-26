var siteName = document.getElementById("bookmarkName");
var siteUrl = document.getElementById("WebsiteUrl");
var siteContainer;
//if local storage contains old data ,start from this data
if (localStorage.getItem('sites') != null) {
    siteContainer = JSON.parse(localStorage.getItem('sites'));
    // i want to make data disable when i open the browser
    // the problem is data exists in local storage but not appear on the web page after opening
    //the solution : we should call displaySites()
    displaySites();
} else {
    siteContainer = [];
    
}

function addSite() {
    if (validate()) {
        
    
    //اسحب الداتا من اليوزر بشكل مؤقت عشان اخزنها في الارراي
    var site = {
        name: siteName.value,
        uurl:siteUrl.value
    }
    siteContainer.push(site);
    //add sites to local storage to take it from local storage and save it on the browser after closing it 
    //setItem() requires string parameters so i used json to convert my array of objects to string
    localStorage.setItem('sites', JSON.stringify( siteContainer ));

    //to clear inputs after clicking on submit
    clearInputs();
    //to display
        displaySites();
    } else {
        alert("all inputs are required !")
    }
}
function displaySites() {
    var cartoona = '';
    for (let i = 0; i < siteContainer.length; i++) {
        cartoona += `<tr>
        <td>${siteContainer[i].name}</td>
        <td> <a style="text-decoration:none" class="btn btn-outline-success ms-5" href="${siteContainer[i].uurl}" role="button" target="_blank">Visit</a> </td>
        <td> <button onclick="deleteSite(${i})" class="btn btn-outline-danger ms-5">Delete</button> </td>
        </tr>`;
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}
function clearInputs() {
    //to make inputs empty
     siteName.value = "";
    siteUrl.value = "";
}
function deleteSite(index) {
    //to delete self item
    siteContainer.splice(index, 1);
    displaySites();
}
function validate() {
    if (siteName.value != "" && siteUrl.value != "")
    {
        return true;
    }
    else {
        return false;
    }
}
function search(term) {
    var cartoona = "";
    for (let i = 0; i < siteContainer.length; i++) {
        if (siteContainer[i].name.toLowerCase().includes(term.toLowerCase())) {
            cartoona += `<tr>
            <td>${siteContainer[i].name}</td>
            <td> <a style="text-decoration:none" class="btn btn-outline-success ms-5" href="${siteContainer[i].uurl}" role="button" target="_blank">Visit</a> </td>
            <td> <button onclick="deleteSite(${i})" class="btn btn-outline-danger ms-5">Delete</button> </td>
            </tr>`;
        }
    }
    document.getElementById("tableBody").innerHTML = cartoona;
}