class Modal {
    
    /**
     * @typedef {HTMLElement} ModalComponent
     * 
     * @type ModalComponent
     */
    target;
    
    /**
     * @typedef { Function | null } onHideComponent 
     * Set a callback function when the modal has been hidden.
     * 
     * @type onHideComponent 
     */
    onHide;

    /**
     * @typedef { Function | null } onShowComponent
     * Set a callback function when the modal has been shown.
     * 
     * @type onShowComponent
     */
    onShow;

    /**
     * @typedef { Function | null } onToggleComponet
     * Set a callback function when the modal visibility has been toggled.
     * 
     * @type onToggleComponet
     */
    onToggle;

    /**
     * @typedef { HTMLElement } backdropElement
     * 
     * @type backdropElement
     */
    #backdropComponent;


    /**
     * 
     * @param {placement} placement 
     * @param {HTMLElement} component 
     */
    #ajustPlacement(placement, component) {
        if (!component.classList.contains("flex")) {
            component.classList.add("flex");
        }

        const array = placement.split("-");

        for (let i = 0; i < array.length; i++) {
            if (i === 0) {
                if (array[i].includes("top")) {
                    component.classList.add("items-start");
                } else if(array[i].includes("center")) {
                    component.classList.add("items-center");
                } else if(array[i].includes("bottom")) {
                    component.classList.add("items-end");
                }
            } else {
                if (array[i].includes("left")) {
                    component.classList.add("justify-start");
                } else if(array[i].includes("center")) {
                    component.classList.add("justify-center");
                } else if(array[i].includes("right")) {
                    component.classList.add("justify-end");
                }
            }
            
        }
    }

    #ajustclassesmodal() {
        if (this.target.classList.contains("top-0")) {
            this.target.classList.remove("top-0");
        }
        if (this.target.classList.contains("left-0")) {
            this.target.classList.remove("left-0");
        }
        if (this.target.classList.contains("right-0")) {
            this.target.classList.remove("right-0");
        }
    }

    /**
     * 
     * @param {string[]} backdropClasses 
     * @param {string} backdrop
     */
    #CreateBackdropComponent(backdropClasses, backdrop) {
        this.#backdropComponent = document.createElement("div");
        for (let i = 0; i < backdropClasses.length; i++) {
            this.#backdropComponent.classList.add(backdropClasses[i]);
        }
        this.#backdropComponent.setAttribute("swks-modal-backdrop-component", "");
        if (backdrop.includes("dynamic")) {
            this.#backdropComponent.addEventListener("click", () => {
                this.hide();
            });
        }
    }

    /**
     * @typedef {('top-left'|'top-center'|'top-right'|'center-left'|'center-center'|'center-right'|'bottom-left'|'bottom-center'|'bottom-right')} placement
     * Set the position of the modal element relative to the document body by choosing one of the values from the list.
     * For example: 'top-left' or 'bottom-right'.
     *
     * @typedef {('static'|'dynamic')} backdrop
     * Choose between 'static' or 'dynamic' to prevent closing the modal when clicking outside.
     *
     * @typedef {String} backdropClasses
     * Set a string of Tailwind CSS classes for the backdrop element (e.g., 'bg-blue-500 dark:bg-blue-400').
     *
     * @typedef {Function | null} onHide Set a callback function when the modal has been hidden.
     * 
     * @typedef {Function | null} onShow Set a callback function when the modal has been shown.
     * 
     * @typedef {Function | null} onToggle Set a callback function when the modal visibility has been toggled.
     * 
     * 
     * @param {HTMLElement} component - The modal component.
     * @param {{ placement: placement, backdrop: backdrop, backdropClasses: backdropClasses, onHide: onHide, onShow: onShow, onToggle: onToggle } | null} options - The configuration options.
     */
    constructor(component, options){
        this.target = component;
        this.#ajustclassesmodal();
        if (!component.classList.contains("flex")) {
            component.classList.toggle("flex");
        }
        if (options != null) {
            this.#ajustPlacement(options.placement, component);
            this.onHide = options.onHide;
            this.onShow = options.onShow;
            this.onToggle = options.onToggle;
            this.#CreateBackdropComponent(options.backdropClasses.split(" "), options.backdrop);
        } else {
            if (component.getAttribute("[swks-modal-placement]") != null) {
                this.#ajustPlacement(component.getAttribute("[swks-modal-placement]"), component);
            } else {
                this.#ajustPlacement("center-center", component);
            }

            this.onHide = null;
            this.onShow = null;
            this.onToggle = null;
            const arraybackdropclasses = ["bg-gray-900", "bg-opacity-50", "dark:bg-opacity-80", "fixed", "inset-0", "z-40"];
            if (component.getAttribute("[swks-modal-placement]") != null) {
                this.#CreateBackdropComponent(arraybackdropclasses, component.getAttribute("[swks-modal-backdrop]"));
            } else {
                this.#CreateBackdropComponent(arraybackdropclasses, "static");
            }
            
        }
        if (!this.target.classList.contains("hidden")) {
            this.target.classList.add("hidden");
        }
    }

    #ClearClassList() {
        if (this.target.classList.contains("ease-out")) {
            this.target.classList.remove("transition-opacity", "duration-300", "ease-out", "opacity-0");
        }
        if (this.target.classList.contains("ease-in")) {
            this.target.classList.remove("transition-opacity", "duration-300", "ease-in", "opacity-100");
        }
    }

    show(){
        try {
            if (this.target.classList.contains("hidden")) {
                document.body.classList.add("overflow-hidden");
                this.#ClearClassList();
                document.body.appendChild(this.#backdropComponent);
                this.target.classList.add("transition-opacity", "duration-300", "ease-in", "opacity-100");
                setTimeout(()=>{this.target.classList.remove("hidden")}, 300);
            }
            // Modal exibido com sucesso
            if (this.onShow != null) {
                this.onShow();
            }
            return;
        } catch (error) {
            console.error(error);
            return;
        }
        
    }

    hide(){
        try {
            if (!this.target.classList.contains("hidden")) {
                document.body.classList.remove("overflow-hidden");
                this.#ClearClassList();
                const backdrop = document.querySelector("[swks-modal-backdrop-component]");
                if (backdrop.parentNode){
                    backdrop.parentNode.removeChild(backdrop);
                }
                this.target.classList.add("transition-opacity", "duration-300", "ease-out", "opacity-0");
                setTimeout(()=>{this.target.classList.add("hidden")}, 300);
            }
            // Modal exibido com sucesso
            if (this.onHide != null) {
                this.onHide();
            }
            return;
        } catch (error) {
            console.error(error);
            return;
        }
    }

    toggle(){
        try {
            if (this.isHidden()) {
                this.show();
            } else {
                this.hide();
            }
            if (this.onToggle != null) {
                this.onToggle();
            }
        } catch (error) {
            console.error(error)
            return;
        }
    }

    isHidden(){
        if (!this.target.classList.contains("hidden")) {
            return false;
        } else {
            return true;
        }
    }

    isVisible(){
        if (!this.target.classList.contains("hidden")) {
            return true;
        } else {
            return false;
        }
    }
}

document.querySelectorAll("[swks-modal-toggle]").forEach((trigger) => {
    const modal_id = trigger.getAttribute("swks-modal-toggle");
    const target = document.getElementById(modal_id);
    const modal = new Modal(target);
    trigger.addEventListener("click", () => {
       modal.toggle();
    });
});

document.querySelectorAll("[swks-modal-hide]").forEach((trigger) => {
    const modal_id = trigger.getAttribute("swks-modal-hide");
    const target = document.getElementById(modal_id);
    const modal = new Modal(target);
    trigger.addEventListener("click", () => {
        modal.hide();
    });
});

document.querySelectorAll("[swks-modal-show]").forEach((trigger) => {
    const modal_id = trigger.getAttribute("swks-modal-show");
    const target = document.getElementById(modal_id);
    const modal = new Modal(target);
    trigger.addEventListener("click", () => {
        modal.show();
    });
});

document.querySelectorAll("[data-modal-hide]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
        const backdrop = document.querySelector("[swks-modal-backdrop-component]");
        if (backdrop!= null) {
            backdrop.parentNode.removeChild(backdrop);
        }
    })
})

document.querySelectorAll("[swks-modal-hide]").forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
        const backdrop = document.querySelector("[swks-modal-backdrop-component]");
        if (backdrop!= null) {
            backdrop.parentNode.removeChild(backdrop);
        }
    })
})