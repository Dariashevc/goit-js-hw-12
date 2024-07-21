import{S as w,a as M,i as u}from"./assets/vendor-c493984e.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f=new w(".gallery a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt"}),i={searchForm:document.querySelector(".js-search-form"),gallery:document.querySelector(".js-gallery"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more-button")};function m(){i.loader.classList.remove("is-hidden")}function h(){i.loader.classList.add("is-hidden")}function g(){i.loadMoreBtn.classList.remove("is-hidden")}function l(){i.loadMoreBtn.classList.add("is-hidden")}function p(r){return r.map(({webformatURL:a,largeImageURL:n,tags:s,likes:e,views:t,comments:c,downloads:L})=>`
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
              <p class="discribe-text">${L}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("")}function v(){const r=document.querySelector(".gallery-card").getBoundingClientRect().height;window.scrollBy({top:Math.ceil(r*2),left:Math.ceil(r*2),behavior:"smooth"})}const o={key:"44868701-a6c2bf036a020cab1604664f3",q:"",imageType:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:15,maxPage:0};async function y(){return(await M.get("https://pixabay.com/api/",{params:o})).data}h();l();i.searchForm.addEventListener("submit",x);async function x(r){r.preventDefault(),i.gallery.innerHTML="";const n=r.currentTarget.elements.searchtext.value.trim();if(!n){P(),l();return}o.page=1,o.q=n,m();try{const{totalHits:s,hits:e}=await y();h(),o.maxPage=Math.ceil(s/o.per_page),i.gallery.insertAdjacentHTML("beforeend",p(e)),f.refresh(),e.length>0&&e.length!==s?(g(),i.loadMoreBtn.addEventListener("click",b)):e.length===0&&d()}catch{d()}finally{i.searchForm.reset()}}async function b(){o.page+=1,l(),m();try{const{hits:r}=await y();g(),h(),i.gallery.insertAdjacentHTML("beforeend",p(r)),f.refresh(),v()}catch{d()}finally{o.page===o.maxPage&&(l(),q(),i.loadMoreBtn.removeEventListener("click",b))}}function d(){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"})}function P(){u.warning({title:"Caution",message:"Please write your request in the input field!",position:"topRight"})}function q(){u.info({message:"We're sorry, but you've reached the end of search results.",position:"center"})}
//# sourceMappingURL=commonHelpers.js.map
