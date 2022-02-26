var siteName = document.getElementById("bookmarkName");
var siteUrl = document.getElementById("WebsiteUrl");
var siteContainer;
if (localStorage.getItem('sites') != null) {
    siteContainer = JSON.parse(localStorage.getItem('sites'));
    displaySites();
} else {
    siteContainer = [];
    
}

function addSite() {
    if (validate()) {
    var site = {
        name: siteName.value,
        uurl:siteUrl.value
    }
    siteContainer.push(site);
    localStorage.setItem('sites', JSON.stringify( siteContainer ));
    clearInputs();
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
    siteName.value = "";
    siteUrl.value = "";
}
function deleteSite(index) {
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