import{a as P,i as w,S as b}from"./assets/vendor-BfjKTZs6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const q="22970342-054b8243005dd74f99097cd8f",M="https://pixabay.com/api/",S=15;async function d(e,s=1){try{const a=await P.get(M,{params:{key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:S,page:s}});return{images:a.data.hits,totalHits:a.data.totalHits}}catch(a){throw console.error("Error fetching images:",a),new Error("Failed to fetch images. Please try again later.")}}function f(e,s){const a=s.map(({webformatURL:r,largeImageURL:t,tags:n,likes:m,views:p,comments:h,downloads:L})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${t}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${n}"
            />
            <ul class="gallery-info">
              <li class="gallery-info-item">Likes <span class="descr-span">${m}</span></li>
              <li class="gallery-info-item">Views <span class="descr-span">${p}</span></li>
              <li class="gallery-info-item">Comments <span class="descr-span">${h}</span></li>
              <li class="gallery-info-item">Downloads <span class="descr-span">${L}</span></li>
            </ul> 
          </a>
        </li>   
      `).join("");console.log(a),e.insertAdjacentHTML("beforeend",a),new b(".gallery-item a",{captionDelay:250,scrollZoom:!1}).refresh()}function v(e){e.innerHTML=""}function g(e){e.classList.remove("hidden")}function u(e){e.classList.add("hidden")}function y(e){e.style.display="block"}function E(e){e.style.display="none"}function c(e,s){w[s]({title:s.toUpperCase(),message:e,position:"bottomRight"})}const l={form:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-more")},o={query:"",page:0,totalPage:0};l.form.addEventListener("submit",x);l.loadMoreBtn.addEventListener("click",$);async function x(e){e.preventDefault();const s=e.currentTarget;if(o.query=s.elements.search_text.value.trim(),!o.query){c("Please enter a value","warning");return}o.page=1,v(l.gallery),g(l.loader),E(l.loadMoreBtn);try{const{images:a,totalHits:i}=await d(o.query,o.page);o.totalPage=Math.ceil(i/15),a.length===0?c("Sorry, there are no images matching your search query. Please try again!","info"):(f(l.gallery,a),o.page<o.totalPage&&y(l.loadMoreBtn))}catch{c("Failed to fetch images. Please try again later.","error")}finally{u(l.loader)}}async function $(){o.page+=1,g(l.loader),y(l.loadMoreBtn);try{const{images:e}=await d(o.query,o.page);f(l.gallery,e),o.page>=o.totalPage&&c("No more images to load.","warning")}catch{c("Failed to fetch images. Please try again later.","error")}finally{u(l.loader)}}
//# sourceMappingURL=index.js.map
