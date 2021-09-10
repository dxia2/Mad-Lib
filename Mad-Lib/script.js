//listens for button click
document.getElementById("madLibButton").addEventListener("click", madLib)

function madLib() {
    //input
    let schoolSubject = document.getElementById("schoolSubject").value;
    let color = document.getElementById("color").value;
    let noun = document.getElementById("noun").value;

    //select parts in html by id and fill them in
    document.getElementById("schoolSubjectOutput").innerHTML = schoolSubject;
    document.getElementById("colorOutput").innerHTML = color;
    document.getElementById("nounOutput").innerHTML = noun;
}