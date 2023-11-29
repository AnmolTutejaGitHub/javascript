//unsplash API
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");



const accesskey="YOUR_API_KEY";
let keyword="";
let page=1;


async function searchImages(){
    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    const response= await fetch(url);
    const data= await response.json();

    if(page === 1){
        searchResult.innerHTML ="";
    }

    //console.log(data)
    const results=data.results;

    results.map((result)=>{
        const image = document.createElement("img")
        image.src=result.urls.small

        const imagelink=document.createElement("a");
        imagelink.href=result.links.html;
        imagelink.target="_blank";

        imagelink.appendChild(image) ; //image will be inside this a tag 


        searchResult.appendChild(imagelink);
    })
    showMoreBtn.style.display="block";
}


searchForm.addEventListener("submit",(e)=>{
    e.preventDefault()
    page=1; //so whenever your call this function page will become one 
    searchImages();
})


//to load more images we need to load them from page 2 , 3 so on...
showMoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();

})



