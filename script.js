// 1. Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).



// Table
const listTable = document.getElementById("listTable")
// submit
const submit = document.getElementById("submit")
// function
function addRow() {
    // Inputai
    let inputName = document.getElementById("inputName").value.split(" ")

    function capitalizeWords(inputName) {
        return inputName.map(word => {
            const firstLetter = word.charAt(0).toUpperCase()
        const rest = word.slice(1).toLowerCase()
    
        return firstLetter + rest;
        })
    }
    console.log(capitalizeWords(inputName))

    let table = document.getElementById("listTable")
    
    let row = table.insertRow(-1)
    
    let c1 = row.insertCell(0)
    let c2 = row.insertCell(1)
    
    row.appendChild(c1)
    row.appendChild(c2)


    c1.innerText = capitalizeWords(inputName)[0].trim(" ")
    c2.innerText = capitalizeWords(inputName)[1].trim(" ")

    

    console.log(inputName)
}

// Submit on click
submit.addEventListener("click", function(){
    addRow()
    
})




// 2. Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis). Per konstruktorių, sukuriams objektas ir jis atvaizduojamas po forma (CSS rašykite CSS'e) kaip atvaizduota nuotraukoje apačioje. Paspaudus ant automobilio bloko - turi alert išmesti kainą (pavyzdys nuotrauka su automobiliais)