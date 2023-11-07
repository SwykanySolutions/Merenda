
/**
 * 
 * @param {string} src 
 * @param {"head"|"body"} location
 */
function INCLUDE(src, location) {
    const script = document.createElement("script");
    script.src = src;
    document[location].appendChild(script);
}

document.addEventListener("DOMContentLoaded", () => {
    
    // Importção de scripts
    INCLUDE("/Merenda/js/Components/Modal.js", "body");
    INCLUDE("/Merenda/js/Components/Alert.js", "body");
    
    document.querySelectorAll(".item-navbar-active").forEach((element) => {
        element.classList.remove("item-navbar-active");
        const active_classes = "text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700".split(" ");
        element.classList.add(...active_classes);
    });
    
    document.querySelectorAll(".item-navbar").forEach((element) => {
        element.classList.remove("item-navbar");
        const classes = "text-gray-900 dark:text-gray-300 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700".split(" ");
        element.classList.add(...classes);
    })
    
});
