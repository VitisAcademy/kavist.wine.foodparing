function sortMakeAnswer(){shuffle(contentSort);let e=document.querySelector(".sort__task");for(let t=0;t<contentSort.length;t++)e.insertAdjacentHTML("beforeend",`<div class="sort__answer hidden" checker="${contentSort[t][0]}">${contentSort[t][1]}</div>`);e.firstElementChild.classList.remove("hidden"),window.setTimeout(sortDrag,500)}function sortDrag(){let e=document.querySelector(".sort__task").children;for(let o=0;o<e.length;o++){let r=new Draggabilly(e[o],{containment:".sort__wrapper"});function t(){let t=e[o].getAttribute("checker");return r.position.y<-80?(e[o].classList.add("hidden"),9!==o&&e[o+1].classList.remove("hidden"),sortChecker(0==t)):r.position.y>80?(e[o].classList.add("hidden"),9!==o&&e[o+1].classList.remove("hidden"),sortChecker(1==t)):r.setPosition(0,0)}r.on("pointerUp",t)}}function sortChecker(e){let t=document.querySelector(".sort__wrapper");if(e){function o(){t.classList.remove("sortGreen")}t.classList.add("sortGreen"),userSort+=1,window.setTimeout(o,500)}else{function o(){t.classList.remove("sortWrong")}t.classList.add("sortWrong"),window.setTimeout(o,500)}}