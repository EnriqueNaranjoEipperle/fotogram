let myImage = [
    { number: 1, filename: "ai.jpg", name: "AI Technology" }, 
    { number: 2, filename: "autumm-3.jpg", name: "Autumn Scene 3" },
    { number: 3, filename: "autumn-1.jpg", name: "Autumn Scene 1" },
    { number: 4, filename: "autumn-2.jpg", name: "Autumn Scene 2" },
    { number: 5, filename: "autumn.jpg", name: "Autumn Forest" },
    { number: 6, filename: "benches.jpg", name: "Benches in the Park" },
    { number: 7, filename: "fall.jpg", name: "Fall Foliage" },
    { number: 8, filename: "light-.jpg", name: "Lighting" },
    { number: 9, filename: "nature-1.jpg", name: "Nature View 1" },
    { number: 10, filename: "nature-2.jpg", name: "Nature View 2" },
    { number: 11, filename: "pumpkinjpg.jpg", name: "Pumpkin Patch" },
    { number: 12, filename: "river.jpg", name: "River Stream" },
    { number: 13, filename: "road-1.jpg", name: "Road to Nowhere 1" },
    { number: 14, filename: "road-2.jpg", name: "Road to Nowhere 2" },
    { number: 15, filename: "trees-1.jpg", name: "Forest Trees 1" },
    { number: 16, filename: "trees-2.jpg", name: "Forest Trees 2" },
    { number: 17, filename: "trees-3.jpg", name: "Forest Trees 3" },
    { number: 18, filename: "trees-4.jpg", name: "Forest Trees 4" },
    { number: 19, filename: "waterfall.jpg", name: "Waterfall" }
];




function picturesLoad(){
    let fotosladen = document.getElementById('album');
   // document.getElementById('bigPicture').classList.add('d-none');
    
    for (let index = 0; index < myImage.length; index++) {  
        
        fotosladen.innerHTML += `<img id="image-${index}" 
        class="image" onclick="pictures(${index})" 
        src="./img/${myImage[index].filename}">`;
    }
 }
 function pictures(index) {
    let foto = myImage[index].filename;
    let contentRef = document.getElementById('album');
    let contentFilter = document.getElementById('bigPicture');

    let namePicture = myImage[index].name;
    let picNumber = index +1;
    let totalPics = myImage.length;

    contentRef.classList.add('transparent');
    contentFilter.classList.remove('d-none');

    contentFilter.innerHTML = `

    <div class="flex-title">
        <img src="./img/out.jpg" class="out-main" onclick="picturesOut()"></img>
        <h2 class="title-main">${namePicture}</h2>  
    </div>
    <div >
      <img class="bigPicture" src="./img/${foto}"></img>
    </div>

    <div class="flex-arrow">
    <img class="arrow-l" src="./img/arrow-l.jpg" onclick="backPictures(${index})"></img>

      
      <div class="number-flex">
         <div class="number-minus">${picNumber}</div>
         <div class="the-slash">/</div>
         <div class="number-plus">${totalPics}</div>
      </div>
      
      <img class="arrow"  src="./img/arrow.jpg"  onclick="nextPictures(${index})"></img>
    </div>
    `;
}

function backPictures(index) {
    let newIndex = index -1;

    if (index == 0) {
        newIndex = myImage.length -1;
    } 
    pictures(newIndex);
}


function nextPictures(index) {
   let newIndex = index +1;

    if (newIndex == myImage.length) {
      newIndex = 0;
    } 
    pictures(newIndex);
}


function picturesOut() {
   let contentOut = document.getElementById('bigPicture');
   contentOut.classList.add('d-none'); 

    document.getElementById('album').classList.remove('d-none')
    document.getElementById('album').classList.remove('transparent')
}
