<<<<<<< HEAD
var binaryData,setData=e=>{binaryData=atob(e);loadPdf()};const vw=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),vh=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),elementPdfViewer=(document.head.innerHTML=`<link href="https://cdn.lineicons.com/3.0/lineicons.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
`,document.getElementById("pdf-viewer"));elementPdfViewer.style.fontFamily="font-family: 'consolas',sans-serif !important;";elementPdfViewer.innerHTML='<nav class="navbar navbar-expand-lg navbar-dark bg-dark p-2"> <a class="navbar-brand text-light" href="#">PDF Viewer <span style="font-size: 0.6rem;">by Mihir</span></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon" style="color: white;"></span> </button> <div class="collapse navbar-collapse justify-content-end" id="navbarNav"> <ul class="navbar-nav"> <div class="btn-group" role="group" aria-label="Basic example"> <button class="btn btn-outline-light" type="button" id="pdf-previous-button" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward" viewBox="0 0 16 16"> <path d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm7 1.133L1.696 8 7.5 11.367V4.633zm7.5 0L9.196 8 15 11.367V4.633z"/> </svg> </button> <button class="btn btn-outline-light" type="button" id="pdf-next-button"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-forward" viewBox="0 0 16 16"> <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z"/> </svg> </button> <button class="btn btn-outline-light" type="button" id="pdf-zoom-in-button"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/> <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/> <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/> </svg> </button> <button class="btn btn-outline-light" type="button" id="pdf-zoom-out-button"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-out" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/> <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/> <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/> </svg> </button> </div></ul> </div></nav> <div style="position: relative; display: flex; justify-content: center; height: 100%; max-width:100vw; overflow: scroll; background-color: rgb(98, 98, 98);"> <div class="spinner-border text-light" style="position: absolute; top: 50% ; left: 50%; z-index: 2;" hidden role="status"> </div><div style="margin: auto; overflow:auto; display: flex; align-items: center ;justify-content : center; "> <canvas style="background-color: white;" id="pdf-canvas"></canvas> </div></div></div>';var isMobile=vh<950&&vw<500;isMobile&&(elementPdfViewer.style.width=vw+"px");const elementNextPageButton=document.getElementById("pdf-next-button"),elementPreviousPageButton=document.getElementById("pdf-previous-button"),elementZoomInButton=document.getElementById("pdf-zoom-in-button"),elementZoomOutButton=document.getElementById("pdf-zoom-out-button"),elementCanvas=document.getElementById("pdf-canvas");let pdfDocument=null,scale=1,pageNumber=1,pageIsRendering=!1,pageNumberIsPending=null;const canvas=elementCanvas,canvasContext=canvas.getContext("2d"),pdfjslib=window["pdfjs-dist/build/pdf"];pdfjsLib.GlobalWorkerOptions.workerSrc="https://mozilla.github.io/pdf.js/build/pdf.worker.js";scale=isMobile?.6:1;var loadPdf=function(){pdfjsLib.getDocument({data:binaryData}).promise.then(e=>{pdfDocument=e;renderPage(pageNumber)})};const renderPage=function(e){pageIsRendering=!0;pdfDocument.getPage(e).then(function(e){var t=e.getViewport({scale:scale});canvas.height=t.height;canvas.width=t.width;t={canvasContext:canvasContext,viewport:t};e.render(t).promise.then(function(){pageIsRendering=!1;if(null!==pageNumberIsPending){renderPage(pageNumberIsPending);pageNumberIsPending=null}})})};function addPageToRender(e){pageIsRendering?pageNumberIsPending=e:renderPage(e)}function onPreviousPage(){if(pageNumber<=1)return 1;addPageToRender(--pageNumber)}function onNextPage(){if(pageNumber>=pdfDocument.numPages)return pdfDocument.numPages;addPageToRender(++pageNumber)}function onZoomIn(){if(!(elementCanvas.offsetWidth+.2*elementCanvas.offsetWidth>=elementPdfViewer.offsetWidth)){scale+=.2;renderPage(pageNumber)}}function onZoomOut(){if(!(scale<.7)){scale-=.2;renderPage(pageNumber)}}elementNextPageButton.addEventListener("click",onNextPage);elementPreviousPageButton.addEventListener("click",onPreviousPage);elementZoomInButton.addEventListener("click",onZoomIn);elementZoomOutButton.addEventListener("click",onZoomOut);
=======
// Author : Mihir
// 17/06/2022 2:41 PM

var binaryData,setData=e=>{binaryData=atob(e);loadPdf()};const vw=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),vh=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),elementPdfViewer=document.getElementById("pdf-viewer");elementPdfViewer.style.fontFamily="font-family: 'consolas',sans-serif !important;";elementPdfViewer.innerHTML='<nav class="navbar navbar-expand-lg navbar-dark bg-dark p-2"> <a class="navbar-brand text-light" href="#">PDF Viewer <span style="font-size: 0.6rem;">by Mihir</span></a> <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"> <span class="navbar-toggler-icon" style="color: white;"></span> </button> <div class="collapse navbar-collapse justify-content-end" id="navbarNav"> <ul class="navbar-nav"> <div class="btn-group" role="group" aria-label="Basic example"> <button class="btn btn-outline-light" type="button" id="pdf-previous-button" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward" viewBox="0 0 16 16"> <path d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm7 1.133L1.696 8 7.5 11.367V4.633zm7.5 0L9.196 8 15 11.367V4.633z"/> </svg> </button> <button class="btn btn-outline-light" type="button" id="pdf-next-button"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-forward" viewBox="0 0 16 16"> <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z"/> </svg> </button> <button class="btn btn-outline-light" type="button" id="pdf-zoom-in-button"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/> <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/> <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/> </svg> </button> <button class="btn btn-outline-light" type="button" id="pdf-zoom-out-button"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-zoom-out" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/> <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/> <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/> </svg> </button> </div></ul> </div></nav> <div style="position: relative; display: flex; justify-content: center; height: 100%; max-width:100vw; overflow: scroll; background-color: rgb(98, 98, 98);"> <div class="spinner-border text-light" style="position: absolute; top: 50% ; left: 50%; z-index: 2;" hidden role="status"> </div><div style="margin: auto; overflow:auto; display: flex; align-items: center ;justify-content : center; "> <canvas style="background-color: white;" id="pdf-canvas"></canvas> </div></div></div>';var isMobile=vh<950&&vw<500;isMobile&&(elementPdfViewer.style.width=vw+"px");const elementNextPageButton=document.getElementById("pdf-next-button"),elementPreviousPageButton=document.getElementById("pdf-previous-button"),elementZoomInButton=document.getElementById("pdf-zoom-in-button"),elementZoomOutButton=document.getElementById("pdf-zoom-out-button"),elementCanvas=document.getElementById("pdf-canvas");let pdfDocument=null,scale=1,pageNumber=1,pageIsRendering=!1,pageNumberIsPending=null;const canvas=elementCanvas,canvasContext=canvas.getContext("2d"),pdfjslib=window["pdfjs-dist/build/pdf"];pdfjsLib.GlobalWorkerOptions.workerSrc="https://mozilla.github.io/pdf.js/build/pdf.worker.js";scale=isMobile?.6:1;var loadPdf=function(){pdfjsLib.getDocument({data:binaryData}).promise.then(e=>{pdfDocument=e;renderPage(pageNumber)})};const renderPage=function(e){pageIsRendering=!0;pdfDocument.getPage(e).then(function(e){var t=e.getViewport({scale:scale});canvas.height=t.height;canvas.width=t.width;t={canvasContext:canvasContext,viewport:t};e.render(t).promise.then(function(){pageIsRendering=!1;if(null!==pageNumberIsPending){renderPage(pageNumberIsPending);pageNumberIsPending=null}})})};function addPageToRender(e){pageIsRendering?pageNumberIsPending=e:renderPage(e)}function onPreviousPage(){if(pageNumber<=1)return 1;addPageToRender(--pageNumber)}function onNextPage(){if(pageNumber>=pdfDocument.numPages)return pdfDocument.numPages;addPageToRender(++pageNumber)}function onZoomIn(){if(!(elementCanvas.offsetWidth+.2*elementCanvas.offsetWidth>=elementPdfViewer.offsetWidth)){scale+=.2;renderPage(pageNumber)}}function onZoomOut(){if(!(scale<.7)){scale-=.2;renderPage(pageNumber)}}elementNextPageButton.addEventListener("click",onNextPage);elementPreviousPageButton.addEventListener("click",onPreviousPage);elementZoomInButton.addEventListener("click",onZoomIn);elementZoomOutButton.addEventListener("click",onZoomOut);
>>>>>>> 4eb9f2b99b8d6dde209b540c907d14a948a572d7
