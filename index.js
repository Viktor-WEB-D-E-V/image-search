import{a as w,i as b,S as q}from"./assets/vendor-BfjKTZs6.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();const M="22970342-054b8243005dd74f99097cd8f",S="https://pixabay.com/api/",B=15;async function d(e,l=1){try{const s=await w.get(S,{params:{key:M,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:B,page:l}});return{images:s.data.hits,totalHits:s.data.totalHits}}catch(s){throw console.error("Error fetching images:",s),new Error("Failed to fetch images. Please try again later.")}}function g(e,l){const s=l.map(({webformatURL:r,largeImageURL:t,tags:n,likes:p,views:h,comments:L,downloads:P})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${n}"
            />
            <ul class="gallery-info">
              <li class="gallery-info-item">Likes <span class="descr-span">${p}</span></li>
              <li class="gallery-info-item">Views <span class="descr-span">${h}</span></li>
              <li class="gallery-info-item">Comments <span class="descr-span">${L}</span></li>
              <li class="gallery-info-item">Downloads <span class="descr-span">${P}</span></li>
            </ul> 
          </a>
        </li>   
      `).join("");e.insertAdjacentHTML("beforeend",s),new q(".gallery-item a",{captionDelay:250,scrollZoom:!1}).refresh()}function v(e){e.innerHTML=""}function u(e){e.classList.remove("hidden")}function f(e){e.classList.add("hidden")}function y(e){e.style.display="block"}function m(e){e.style.display="none"}function c(e,l){b[l]({title:l.toUpperCase(),message:e,position:"bottomRight"})}const o={form:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")},a={query:"",page:0,totalPage:0};function E(){window.scrollBy({top:2*document.querySelector(".gallery-item").getBoundingClientRect().height,behavior:"smooth"})}o.form.addEventListener("submit",x);o.loadMoreBtn.addEventListener("click",$);async function x(e){e.preventDefault();const l=e.currentTarget;if(a.query=l.elements.search_text.value.trim(),!a.query){c("Please enter a value","warning");return}a.page=1,v(o.gallery),u(o.loader),m(o.loadMoreBtn);try{const{images:s,totalHits:i}=await d(a.query,a.page);a.totalPage=Math.ceil(i/15),s.length===0?c("Sorry, there are no images matching your search query. Please try again!","info"):(g(o.gallery,s),a.page<a.totalPage&&y(o.loadMoreBtn))}catch{c("Failed to fetch images. Please try again later.","error")}finally{f(o.loader)}}async function $(){a.page+=1,u(o.loader),y(o.loadMoreBtn);try{const{images:e}=await d(a.query,a.page);g(o.gallery,e),E(),a.page>=a.totalPage&&(c("No more images to load.","warning"),m(o.loadMoreBtn))}catch{c("Failed to fetch images. Please try again later.","error")}finally{f(o.loader)}}
//# sourceMappingURL=index.js.map
