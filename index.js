import{a as P,S as q,i as c}from"./assets/vendor-lDhL-8I6.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const w="22970342-054b8243005dd74f99097cd8f",b="https://pixabay.com/api/",M=15;async function g(e,i=1){try{const r=await P.get(b,{params:{key:w,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:M,page:i}});return{images:r.data.hits,totalHits:r.data.totalHits}}catch(r){throw console.error("Error fetching images:",r),new Error("Failed to fetch images. Please try again later.")}}function d(e,i){const r=i.map(({webformatURL:t,largeImageURL:a,tags:n,likes:p,views:y,comments:h,downloads:L})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${a}">
            <img
              class="gallery-image"
              src="${t}"
              alt="${n}"
            />
            <ul class="gallery-info">
              <li class="gallery-info-item">Likes <span class="descr-span">${p}</span></li>
              <li class="gallery-info-item">Views <span class="descr-span">${y}</span></li>
              <li class="gallery-info-item">Comments <span class="descr-span">${h}</span></li>
              <li class="gallery-info-item">Downloads <span class="descr-span">${L}</span></li>
            </ul> 
          </a>
        </li>   
      `).join("");console.log(r),e.insertAdjacentHTML("beforeend",r),new q(".gallery-item a",{captionDelay:250,scrollZoom:!1}).refresh()}function E(e){e.innerHTML=""}function f(e){e.classList.remove("hidden")}function u(e){e.classList.add("hidden")}function m(e){e.style.display="block"}function S(e){e.style.display="none"}const s={form:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")},o={query:"",page:0,totalPage:0};s.form.addEventListener("submit",v);s.loadMoreBtn.addEventListener("click",R);async function v(e){e.preventDefault();const i=e.currentTarget;if(o.query=i.elements.search_text.value.trim(),!o.query){c.warning({title:"Warning",message:"Please enter a value",position:"topRight"});return}o.page=1,E(s.gallery),f(s.loader),S(s.loadMoreBtn);try{const{images:r,totalHits:l}=await g(o.query,o.page);o.totalPage=Math.ceil(l/15),r.length===0?c.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):(d(s.gallery,r),o.page<o.totalPage&&m(s.loadMoreBtn))}catch{c.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}finally{u(s.loader)}}async function R(){o.page+=1,f(s.loader),m(s.loadMoreBtn);try{const{images:e}=await g(o.query,o.page);d(s.gallery,e),o.page>=o.totalPage&&c.warning({title:"Warning",message:"No more images to load.",position:"topRight"})}catch{c.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}finally{u(s.loader)}}
//# sourceMappingURL=index.js.map
