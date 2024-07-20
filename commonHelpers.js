import{S as L,a as w,i as d}from"./assets/vendor-c493984e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h=new L(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),i={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more-button")};function f(){i.loader.classList.remove("is-hidden")}function u(){i.loader.classList.add("is-hidden")}function m(){i.loadMoreBtn.classList.remove("is-hidden")}function l(){i.loadMoreBtn.classList.add("is-hidden")}function g(r){return r.map(({webformatURL:a,largeImageURL:n,tags:s,likes:e,views:t,comments:c,downloads:b})=>`
    <li class="gallery-card">
        <a class="gallery-link" href="${n}">
          <img
            class="gallery-image"
            src="${a}" 
            alt="${s}" 
            width="360"
            height="152" 
          />
        </a>
        <div class="discribe-box">
          <ul class="discribe-list">
            <li class="discribe-item">
              <h2 class="discribe-title">Likes</h2>
              <p class="discribe-text">${e}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Views</h2>
              <p class="discribe-text">${t}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Comments</h2>
              <p class="discribe-text">${c}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Downloads</h2>
              <p class="discribe-text">${b}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}function M(){const r=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:Math.ceil(r*2),left:Math.ceil(r*2),behavior:"smooth"})}const o={key:"44868701-a6c2bf036a020cab1604664f3",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15,maxPage:0};async function p(){return(await w.get("https://pixabay.com/api/",{params:o})).data}u();l();i.searchForm.addEventListener("submit",v);async function v(r){r.preventDefault(),i.gallery.innerHTML="";const a=r.currentTarget;if(o.q=a.elements.searchtext.value.trim(),!o.q){P(),l();return}f();try{const{totalHits:n,hits:s}=await p();u(),o.maxPage=Math.ceil(n/o.per_page),i.gallery.insertAdjacentHTML("beforeend",g(s)),h.refresh(),s.length>0&&s.length!==n?(m(),i.loadMoreBtn.addEventListener("click",y)):s.length===0&&x()}catch{}finally{i.searchForm.reset()}}async function y(){o.page+=1,l(),f();try{const{hits:r}=await p();m(),u(),i.gallery.insertAdjacentHTML("beforeend",g(r)),h.refresh(),M()}catch{}finally{o.page===o.maxPage&&(l(),q(),i.loadMoreBtn.removeEventListener("click",y))}}function x(){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}function P(){d.warning({title:"Caution",message:"Please write your request in the input field!",position:"topRight"})}function q(){d.info({message:"We're sorry, but you've reached the end of search results.",position:"center"})}
//# sourceMappingURL=commonHelpers.js.map
