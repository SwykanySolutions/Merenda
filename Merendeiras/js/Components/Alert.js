document.querySelectorAll('[data-dismiss-target]').forEach((trigger) => {
    const alert = document.querySelector(trigger.getAttribute("data-dismiss-target"));
    if (!alert.classList.contains("hidden")) {
        alert.classList.add("hidden");
    }
    alert.show = () => {        
        if (alert.classList.contains("hidden")) {
            if (alert.classList.contains("ease-in")) {
                alert.classList.remove("transition-opacity", "duration-300", "ease-in", "opacity-100");
            }
            if (alert.classList.contains("ease-out")) {
                alert.classList.remove("transition-opacity", "duration-300", "ease-out", "opacity-0");
            }
            alert.classList.add("transition-opacity", "duration-300", "ease-in", "opacity-100");
            setTimeout(()=> { alert.classList.remove("hidden") }, 300);
        }
        alert.dispatchEvent(new Event("show"));
    }

    alert.hide = () => {        
        if (!alert.classList.contains("hidden")) {
            if (alert.classList.contains("ease-in")) {
                alert.classList.remove("transition-opacity", "duration-300", "ease-in", "opacity-100");
            }
            if (alert.classList.contains("ease-out")) {
                alert.classList.remove("transition-opacity", "duration-300", "ease-out", "opacity-0");
            }
            alert.classList.add("transition-opacity", "duration-300", "ease-out");
            setTimeout(()=> { alert.classList.add("hidden") }, 300);
        }
        alert.dispatchEvent(new Event("hide"));
    }

    alert.toggle = () => {
        if (alert.classList.contains("hidden")) {
            alert.show();
        } else {
            alert.hide();
        }
        alert.dispatchEvent(new Event("toggle"));
    }

    alert.isHidden = () => {
        if (alert.classList.contains("hidden")) {
            return true;
        } else {
            return false;
        }
    }

    alert.isVisible = () => {
        if (!alert.classList.contains("hidden")) {
            return true;
        } else {
            return false;
        }
    }

    trigger.addEventListener("click", () => {
        alert.hide();
    });
});