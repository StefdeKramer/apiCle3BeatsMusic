window.addEventListener('load', init);

var bpm;
//var categroy = 'joggen';

function init(){
    getTheSound();
}
/* functie om wanneer er op de knoppen geklikt word het te late spelen */
function getTheSound(){
    document.getElementById('Joggen').addEventListener('click', playSomeSound);
    document.getElementById('Wandelen').addEventListener('click', playSomeSound);
    document.getElementById('Hardlopen').addEventListener('click', playSomeSound);
    document.getElementById('nummer').addEventListener('click', playSomeSound);

}
/* functie om verschillende versies van muziek te spelen met op gebied van verschillende beats */
function playSomeSound(event)
{
    //class = bepaalde category
    var categorie = event.srcElement.id;

    console.log(categorie);

    if(categorie == 'Joggen')
    {
    bpm = { from : 100, to : 110};
        /**
         * Created by Rik on 22-3-2016.
         */
            $.ajax({
                url: "led.php",
                dataType:"JSON"
            })

    }
    else if(categorie === 'Wandelen')
    {
        bpm = { from : 70, to : 90};
    }
    else
    {
        bpm = { from : 115, to : 130};
    }


    SC.get('/tracks', {
            bpm: bpm
        },
            function (tracks) {
            //console.log(tracks);
            var random = Math.floor(Math.random() * 49);
            SC.oEmbed(tracks[random].uri, {auto_play: true}, document.getElementById('target'));
                playlist(tracks);
        });
}



/* gemaakt door soundcloud zelf om muziek te laten spelen uit hun database */
window.onload = function () {
    SC.initialize({
            client_id: 'd74af833ef8e0dcbd2da445320ccc0a3'
    });

    var menuLinks = document.getElementsByClassName('genre');
    for (var i = 0; i < menuLinks.length; i++) {
            var menuLink = menuLinks[i];
            menuLink.onclick = function (e) {
                e.preventDefault();
                playSomeSound(menuLinks.innerHTML);
            }
        }
};

function playlist(tracks)
{
    //toon hier de playlist van alle songs in de array.
            console.log(tracks);
            $.each(tracks, function(index, val ){
            console.log(val.title);
        });
}


