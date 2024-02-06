let availableKeywords =[
    "<li><a href ='mamaotis.html'>mama otis</a></li>",
    "<li><a href ='comedy.html'>comedy</a></li>",
    "<li><a href ='popcaan.html'>popcaan</a></li>",
    "<li><a href ='popsmoke.html'>popsmoke videos</a></li>",
    "<li><a href ='popcaan.html'>popcaan lyrics</a></li>",
    "<li><a href ='popcaan.html'>popcaan head bad</a></li>",
    "<li><a href ='popcaan.html'>popcaan mamakita</a></li>",
    "<li><a href ='popcaan.html'>popcaan silence</a></li>",
    "<li><a href ='popsmoke.html'>popsmoke dior</a></li>",
    "<li><a href ='popsmoke.html'>popsomke moodswings</a></li>",
    "<li><a href ='popsmoke.html'>popsmoke woo</a></li>",
    "<li><a href ='postmalone.html'>postmalone rockstar</a></li>",
    "<li><a href ='postmalone.html'>postmalone ft 21savage </a></li>",
    "<li><a href ='postmalone.html'>postmalone psycho</a></li>",
    "<li><a href ='postmalone.html'>poloG rapster</a></li>",
    "<li><a href ='vybz.html'>vybzkartel all songs</a></li>",
    "<li><a href ='vybz.html'>vybzkartel wine to the top</a></li>",
    "<li><a href ='vybz.html'>vybzkartel summertime</a></li>",
    "<li><a href ='vybz.html'>vybzkartel ft popcaan head bad</a></li>",
    "<li><a href ='vybz.html'>vybzkartel gone to soon lyrics</a></li>",
    "<li><a href ='vybz.html'>vybzkartel all of your exes</a></li>",
    "<li><a href ='qq.html'>qq one drop</a></li>",
    "<li><a href ='qq.html'>qq dip and come back</a></li>",
    "<li><a href ='qq.html'>qq venomous</a></li>",
    "<li><a href ='spice.html'>spice clean</a></li>",
    "<li><a href ='spice.html'>spice under fire</a></li>",
    "<li><a href ='spice.html'>spice all songs</a></li>",
    "<li><a href ='ardee.html'>ardee flowers</a></li>",
    "<li><a href ='ardee.html'>ardee oliver twist</a></li>",
    "<li><a href ='ardee.html'>ardee all songs</a></li>",
    "<li><a href ='ardee.html'>ardee jiggy</a></li>",
    "<li><a href ='ardee.html'>give you flowers</a></li>",
    "<li><a href ='adenekule.html'>it is what its is by adenekule</a></li>",
    "<li><a href ='adenekule.html'>adenekule all songs</a></li>",
    "<li><a href ='adenekule.html'>okay by adenekule</a></li>",
    "<li><a href ='blaiz.html'>blaizfyah ft Dj glad buble wine</a></li>",
    "<li><a href ='blaiz.html'>blaiz all lyrics</a></li>",
    "<li><a href ='blaiz.html'>blaiz bad</a></li>",
    "<li><a href ='blaiz.html'>blaiz no matta lyrics</a></li>",
    "<li><a href ='blaiz.html'>low by blaiz fayah</a></li>",
    "<li><a href ='blaiz.html'>buble wine</a></li>",
    "<li><a href ='aryastar.html'>rush by Aryastar</a></li>",
    "<li><a href ='aryatar.html'>bloody samaritan lyrics</a></li>",
    "<li><a href ='aryastar.html'>sability</a></li>",
    "<li><a href ='burnaboy.html'>Burnaboy ft Ed sheeran its plenty</a></li>",
    "<li><a href ='burnaboy.html'>burnaboy on the low</a></li>",
    "<li><a href ='burnaboy.html'>Burna boy tested and approved lyrics</a></li>",
    "<li><a href ='khaligraph.html'>khaligraph jones all songs</a></li>",
    "<li><a href ='khaligraph.html'>mbona by khaligraph jones</a></li>",
    "<li><a href ='khaligraph.html'>Tuma kitu by khaligraph jones</a></li>",
    "<li><a href ='khaligraph.html'>hiroshima by khaligraph jones ft Dax</a></li>",
    "<li><a href ='khaligraph.html'> khaligraph jones ndovu ni kuu</a></li>",
    "<li><a href ='khaligraph.html'>khaligraph jones champez</a></li>",
    "<li><a href ='khaligraph.html'>khaligraph jones all video songs</a></li>",
    "<li><a href ='meyer.html'>mejja all songs</a></li>",
    "<li><a href ='meyer.html'>mejja usiniharibie mood</a></li>",
    "<li><a href ='meyer.html'>Mejja ft exray punguza ego</a></li>",
    "<li><a href ='meyer.html'>mejja landlord</a></li>",
    "<li><a href ='meyer.html'>mejja siskii</a></li>",
    "<li><a href ='meyer.html'>mejja kamote</a></li>",
    "<li><a href ='meyer.html'>mejja all music video</a></li>",
    "<li><a href ='meyer.html'>mejja x willis laburu KAlAlE</a></li>",
    "<li><a href ='meyer.html'>maandy ft Mejja ni wetu </a></li>",






    "<li><a href ='demarco.html'>demarco fallen soldier lyrics</a></li>",
    "<li><a href ='demarco.html'>demarco all songs</a></li>",
    "<li><a href ='demarco.html'>shaku wine by demarco</a></li>",
    "<li><a href ='demarco.html'>bad gyal anthem by demarco</a></li>",
    "<li><a href ='demarco.html'>backaz by demarco</a></li>",
    "<li><a href ='username.html'>expendbles 4</a></li>",
    "<li><a href ='username.html'>afro cinema</a></li>",
    "<li><a href ='username.html'>johnte</a></li>",
    
];

const resultsBox =document.querySelector(".result-box");
const  inputBox = document.getElementById("input-box");


inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML ='';
    } 

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<a onclick=selectInput(this)>" + list + "</a>";
    });
    resultsBox.innerHTML = "<ul>" +content.join('') + "</ul>";

}


function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}
