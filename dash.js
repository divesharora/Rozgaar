
var name = document.querySelector(".profile_info h4").textContent;
var flag =name.localeCompare('admin');

if (flag != 0)
{
    document.querySelector(".add").style.display='none';
}

document.querySelector(".add").addEventListener('click', function(){
    document.querySelector(".add").style.color="#f8bd7f";
    document.querySelector(".add:hover").style.background="transparent";
})

