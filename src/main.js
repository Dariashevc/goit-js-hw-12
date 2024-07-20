import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { lightbox, refs, renderPictures, showLoader, hideLoader, showButton, hideButton, scrollGalerryCard } from "./js/render-functions";
import { searchParams, getPictures } from "./js/pixabay-api";


hideLoader();
hideButton();

refs.searchForm.addEventListener("submit", handlerSearch);

async function handlerSearch(event) {
    event.preventDefault();

    refs.gallery.innerHTML = "";
    
    const form = event.currentTarget;
    searchParams.q = form.elements.searchtext.value.trim();

    if (!searchParams.q) {
        noRequestError();
        hideButton();
        return;
    }

    showLoader();

    try {
        const { totalHits, hits } = await getPictures();

        hideLoader();
        searchParams.maxPage = Math.ceil(totalHits / searchParams.per_page);
        refs.gallery.insertAdjacentHTML("beforeend", renderPictures(hits));
        lightbox.refresh();

        if (hits.length > 0 && hits.length !== totalHits) {
            showButton();
            refs.loadMoreBtn.addEventListener("click", handlerLoadMore);
        } else if (hits.length === 0) {
            noImagesError();
        }
    } catch (error) {
        noImagesError;
    } finally {
        refs.searchForm.reset();
    }
}

async function handlerLoadMore() {
    searchParams.page += 1;
    hideButton();
    showLoader();

    try {
        const { hits } = await getPictures(); 

        showButton();
        hideLoader();

        refs.gallery.insertAdjacentHTML("beforeend", renderPictures(hits));
        lightbox.refresh();
        scrollGalerryCard();
    } catch (error) {
        noImagesError;
    } finally {
        if (searchParams.page === searchParams.maxPage) {
            hideButton();
            endSearchMessage();
            refs.loadMoreBtn.removeEventListener("click", handlerLoadMore);
        }
    }
}

function noImagesError() {
    iziToast.error({
        title: "Error",
        message: "Sorry, there are no images matching your search query. Please try again!",
        position: "center",
    });
}

function noRequestError() {
    iziToast.warning({
        title: "Caution",
        message: "Please write your request in the input field!",
        position: "topRight",
    });
}

function endSearchMessage() {
    iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: "center",
    });
}
