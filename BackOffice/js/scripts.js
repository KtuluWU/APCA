console.log("Bienvenue chez APCA!");

$(document).ready(function () {
    $('#consultation_res_icon').hover(function () {    // Animation de l'aide de Résultats de Recherche
        $('.consultation-res-tip').toggleClass('consultation-res-open-tip');
    })



    /************************************** Exemple à enlever **************************************/
    $(".consultation-res-line span[id^='page_']").each(function () {
        $(this).click(function () {
            $('.consultation-res-line *').removeClass('active');
            $(this).addClass('active');
        })
    })

    $(".consultation-res-marks span[id^='page_']").each(function () {
        $(this).click(function () {
            $('.consultation-res-marks *').removeClass('active');
            $(this).addClass('active');
        })
    })
    /***********************************************************************************************/


    /************************* Résultats consultation "JUMPS" *************************/
    $("img[id^='visualisation_']").each(function () {
        $(this).click(function () {
            window.open('./visualisation.html', '_blank');
        })
    })
    $("img[id^='correction_']").each(function () {
        $(this).click(function () {
            window.open('./correction.html', '_blank');
        })
    })


    /************************* sidebar *************************/
    $("#accueil_page").click(function () {
        window.location.href = "./index.html";
    })
    $("#consultation_page").click(function () {
        window.location.href = "./consultation.html";
    })
    $("#fiches_en_erreur_page").click(function () {
        window.location.href = "./fiches_en_erreur.html";
    })
    $("#extraction_page").click(function () {
        window.location.href = "./extraction.html";
    })
    $("#admin_page").click(function () {
        window.location.href = "./admin.html";
    })
})