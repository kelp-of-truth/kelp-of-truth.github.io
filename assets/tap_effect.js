window.addEventListener("load", () => {
  document.head.innerHTML += `
  <style>
    .particle {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 50px;
        height: 50px;
        z-index:9999999;
        /* border: 1px solid #000; */
        pointer-events: none;
      }
      .particle .pulse {
        position: absolute;
        top: 25px;
        left: 25px;
        border: 3px solid #00ffff80;
        outline: 2px solid #00ffff;
        box-shadow: 0px 0px 5px #fff;
        height: 0px;
        width: 0px;
        padding: 0px;
        opacity: 1;
        rotate: 0deg;
        transition: padding 400ms ease-out, margin 400ms ease-out,
          opacity 600ms ease-out, rotate 800ms linear;
      }
      .particle .dust {
        margin-top: 0px;
        margin-left: 0px;
        position: absolute;
        width: 8px;
        height: 8px;
        background-color: #00ffff;
        opacity: 1;
        rotate: 0deg;
        transition: margin 400ms ease-out, opacity 600ms ease-out,
          rotate 800ms ease-in;
      }
      </style>
      `;
});
document.addEventListener("touchstart", (e) => {
  for (let idx of e.touches) {
    var particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = `${idx.pageX - 25}px`;
    particle.style.top = `${idx.pageY - 25}px`;
    particle.ariaLabel = 800;
    particle.innerHTML = `
    <div class="pulse"></div>
    <div class="dust" style="left: 21px;top: 21px;" ariaLabel=${Math.floor(
      Math.random() * 72
    )}></div>
    <div class="dust" style="left: 21px;top: 21px;" ariaLabel=${
      Math.floor(Math.random() * 72) + 72
    }></div>
    <div class="dust" style="left: 21px;top: 21px;" ariaLabel=${
      Math.floor(Math.random() * 72) + 144
    }></div>
    <div class="dust" style="left: 21px;top: 21px;" ariaLabel=${
      Math.floor(Math.random() * 72) + 216
    }></div>
    <div class="dust" style="left: 21px;top: 21px;" ariaLabel=${
      Math.floor(Math.random() * 72) + 288
    }></div>
  `;
    document.body.appendChild(particle);
    setTimeout(() => {
      particle.querySelector(".pulse").style.padding = "15px";
      particle.querySelector(".pulse").style.margin = "-15px";
      particle.querySelector(".pulse").style.opacity = "0";
      for (let idx2 of particle.querySelectorAll(".dust")) {
        idx2.style.rotate = `${idx2.getAttribute("ariaLabel")}deg`;
        idx2.style.marginLeft = `${
          Math.cos((idx2.getAttribute("ariaLabel") / 180) * Math.PI) * 30
        }px`;
        idx2.style.marginTop = `${
          -1 * Math.sin((idx2.getAttribute("ariaLabel") / 180) * Math.PI) * 30
        }px`;
        idx2.style.opacity = "0";
      }
    }, 1);
  }
});
if (navigator.maxTouchPoints === 0) {
  document.addEventListener("mousedown", (e) => {
    var particle = document.createElement("div");
    particle.classList.add("particle");
    particle.style.left = `${e.pageX - 25}px`;
    particle.style.top = `${e.pageY - 25}px`;
    particle.ariaLabel = 800;
    particle.innerHTML = `
    <div class="pulse"></div>
    <div class="dust" style="left: 21px;top: 21px;" ariaLabel=${Math.floor(
      Math.random() * 72
    )}></div>
    <div class="dust" style="left: 21px;top: 21px;" ariaLabel=${
      Math.floor(Math.random() * 72) + 72
    }></div>
    <div class="dust" style="left: 21px;top: 21px;" ariaLabel=${
      Math.floor(Math.random() * 72) + 144
    }></div>
    <div class="dust" style="left: 21px;top: 21px;" ariaLabel=${
      Math.floor(Math.random() * 72) + 216
    }></div>
    <div class="dust" style="left: 21px;top: 21px;" ariaLabel=${
      Math.floor(Math.random() * 72) + 288
    }></div>
  `;
    document.body.appendChild(particle);
    setTimeout(() => {
      particle.querySelector(".pulse").style.padding = "15px";
      particle.querySelector(".pulse").style.margin = "-15px";
      particle.querySelector(".pulse").style.opacity = "0";
      // particle.querySelector(".pulse").style.rotate = "90deg";
      for (let idx of particle.querySelectorAll(".dust")) {
        idx.style.rotate = `${idx.getAttribute("ariaLabel")}deg`;
        idx.style.marginLeft = `${
          Math.cos((idx.getAttribute("ariaLabel") / 180) * Math.PI) * 30
        }px`;
        idx.style.marginTop = `${
          -1 * Math.sin((idx.getAttribute("ariaLabel") / 180) * Math.PI) * 30
        }px`;
        idx.style.opacity = "0";
      }
    }, 1);
  });
}

setInterval(() => {
  for (let idx of document.querySelectorAll(".particle")) {
    idx.ariaLabel = idx.ariaLabel - 10;
    if (idx.ariaLabel <= 0) {
      idx.remove();
    }
  }
}, 10);
