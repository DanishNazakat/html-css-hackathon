let headericon = document.getElementsByClassName('headericon');
let navitems = document.getElementsByClassName('navItems');
isFound = false;
function headericonfnc() {
    if(isFound === false){
        navitems[0].style.display = "flex";

        isFound = true;
    }
    else{
        navitems[0].style.display = "none";
        isFound = false;

    }
    
} 
    