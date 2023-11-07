document.querySelectorAll("[data-modal-target]").forEach((trigger) => {
    const id_modal = trigger.getAttribute("data-modal-target");
    const modal = document.getElementById(id_modal);
    if (!modal.classList.contains("flex")) {
        modal.classList.add("flex");
    }
    if (!(modal.classList.contains("items-start") || modal.classList.contains("items-center") || modal.classList.contains("items-end") || modal.classList.contains("justify-start") || modal.classList.contains("justify-center") || modal.classList.contains("justify-end"))) {
        const placement = modal.getAttribute("data-modal-placement");
        if (placement == null) {
            modal.setAttribute("data-modal-placement", "center-center");
            modal.classList.add("items-center", "justify-center");
        } else {
            const array = placement.split("-");
            for (let i = 0; i < array.length; i++) {
                if (i == 0) {
                    if (array[i].includes("top")) {
                        modal.classList.add("items-start");
                    } else if (array[i].includes("center")) {
                        modal.classList.add("items-center");
                    } else if (array[i].includes("bottom")) {
                        modal.classList.add("items-end");
                    }
                } else {
                    if (array[i].includes("left")) {
                        modal.classList.add("justify-start");
                    } else if (array[i].includes("center")) {
                        modal.classList.add("justify-center")
                    } else if (array[i].includes("right")) {
                        modal.classList.add("justify-end");
                    }
                }
            }
        }
    }
    
    modal.show = () => {
        if (modal.classList.contains("hidden")) {
            document.body.classList.add("overflow-hidden");
            if (document.querySelector("[modal-backdrop]") == null) {
                const backdrop = document.createElement("div");
                backdrop.setAttribute("modal-backdrop", "");
                backdrop.className = "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40";
                document.body.appendChild(backdrop);
            }
            modal.classList.remove("hidden");
            modal.dispatchEvent(new Event("show"));
        }
    }

    modal.hide = () => {
        if (!modal.classList.contains("hidden")) {
            document.body.classList.remove("overflow-hidden");
            const backdrop = document.querySelector("[modal-backdrop]");
            if (backdrop && backdrop.parentNode) {
                backdrop.parentNode.removeChild(backdrop);
            }
            modal.classList.add("hidden");
            modal.dispatchEvent(new Event("hide"));
        }
    }

    modal.toggle = () => {
        if (modal.classList.contains("hidden")) {
            modal.show();
        } else {
            modal.hide();
        }
        modal.dispatchEvent(new Event("toggle"));
    }

    modal.isHidden = () => {
        if (modal.classList.contains("hidden")) {
            return true;
        } else {
            return false;
        }
    }

    modal.isVisible = () => {
        if (!modal.classList.contains("hidden")) {
            return true;
        } else {
            return false;
        }
    }
});