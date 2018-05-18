console.log("Bienvenue chez APCA!");

$(document).ready(function () {
    $('#consultation_res_icon').hover(function () {    // Animation de l'aide de Résultats de Recherche
        $('.consultation-res-tip').toggleClass('consultation-res-open-tip');
    })
})