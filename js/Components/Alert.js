class Alert {
    /**
     * @typedef {HTMLElement | null} AlertElement
     * @type AlertElement
     */
    target;
    
    /**
     * @typedef { 0|75|100|150|200|300|500|700|1000 } DurationProperty
     * 
     * 
     * @typedef { "transition-none" | "transition-all" | "transition" | "transition-colors" | "transition-opacity" | "transition-shadow" | "transition-transform" } Trasitionroperty
     * 
     * 
     * @typedef { "ease-linear" | "ease-in" | "ease-out" | "ease-in-out" } TimingProperty
     * Defina a classe de utilitário da função de tempo de transição do Tailwind CSS. O valor padrão é atenuação.
     * 
     * @typedef { { transition_hide : Trasitionroperty; duration_hide : DurationProperty; timing_hide : TimingProperty; transition_show : Trasitionroperty; duration_show : DurationProperty; timing_show : TimingProperty; onHide : Function, onShow : Function } | null } OptionsObject
     * Objeto de parametros e funções(callbacks) para contrução ou reaproveitamento de um Alert (AlertElement)
     * 
     * @type OptionsObject
     */
    options;

    /**
     * @typedef { Function | null } onHideCallback
     * Função (callback) quer será chamada após o fim da ocultação do alerta acaso não for nulo.
     * 
     * @type onHideCallback
     */
    onHide;

    /**
     * @typedef { Function | null } onShowCallback
     * Função (callback) que será chamada após o fim da exibição do alerta acaso não for nulo.
     * 
     * @type onShowCallback
     */
    onShow;

    /**
     * Contrutor do objeto Alert no qual mostra um alerta e pode ser exibido ou ocultado
     * 
     * @param {AlertElement} target 
     * @param {OptionsObject} options 
     */
    constructor(target,  options){
        if (target != null ) {
            this.target = target;
        } else {
            this.target = document.createElement("div");
        }
        if (options != null) {
            this.options = options;
            this.onHide = options.onHide;
            this.onShow = options.onShow;
        } else {
            this.options = {  transition_hide: target.getAttribute("data-alert-transition-hide"), duration_hide: target.getAttribute("data-alert-duration-hide"), timing_hide: target.getAttribute("data-alert-timing-hide"),transition_show: target.getAttribute("data-alert-transition-show"), duration_show: target.getAttribute("data-alert-duration-show"), timing_show: target.getAttribute("data-alert-timing-show"), onHide: null, onShow: null  };
            this.onHide = null;
            this.onShow = null;
        }
    }
    
    /**
     * Método que realiza a ocultação do alerta (Hide)
     * 
     * @returns void
     */
    Hide(){
        try {
            if (this.options != null) {
                this.target.classList.add(this.options.timing_hide, `duration-${this.options.duration_hide}`, `${this.options.transition_hide}`);
            } else {
                this.target.classList.add("transition-opacity", "duration-300", "ease-out");
            }
                setTimeout(()=> { this.target.classList.add("hidden") }, (this.options != null) ? this.options.duration_hide : 300);
                if (this.onHide != null){
                    this.onHide();
                }
            return;
        } catch (error) {
            console.error(error);
            return;
        }
    }

    /**
     * Método que realiza a exibição do alerta (Show)
     * 
     * @returns void
     */
    Show(){
        try {
            if (this.options != null) {
                this.target.classList.add(this.options.timing_show, `duration-${this.options.duration_show}`, `${this.options.transition_show}`);
            } else {
                this.target.classList.add("transition-opacity", "duration-300", "ease-in");
            }
            setTimeout(()=> { this.target.classList.remove("hidden") }, (this.options != null) ? this.options.duration_show : 300);
            if (this.onShow != null) {
                this.onShow();
            }
            return;
        } catch (error) {
            console.error(error);
            return;
        }
    }
}