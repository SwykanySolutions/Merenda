// // Função para exibir um modal
// function showModal(modalId) {
//     const modal = document.getElementById(modalId);
//     modal.classList.remove("hidden");
//     modal.setAttribute("aria-hidden", "false");
//     document.body.classList.add("overflow-hidden");

//     const backdrop = modal.getAttribute("data-modal-backdrop");
//     if (backdrop !== "static") {
//         // Adiciona um event listener para fechar o modal ao clicar fora dele
//         modal.addEventListener("click", (e) => {
//             if (e.target === modal) {
//                 hideModal(modalId);
//             }
//         });
//     }
// }

// function showmodal(modalId) {
//     const modal = document.getElementById(modalId);
//     if(!modal.classList.contains("is-active")){
//         modal.classList.add("is-active");
//     }
// }

// // Função para ocultar um modal
// function hideModal(modalId) {
//     const modal = document.getElementById(modalId);
//     modal.classList.add("hidden");
//     modal.setAttribute("aria-hidden", "true");
//     document.body.classList.remove("overflow-hidden");
// }

// // Adiciona event listeners aos botões de toggle dos modais
// document.querySelectorAll("[data-modal-toggle]").forEach((button) => {
//     button.addEventListener("click", (e) => {
//         const modalId = button.getAttribute("data-modal-toggle");
//         console.log(modalId);
//         showModal(modalId);
//     });
// });

// // Adiciona event listeners aos botões de fechamento dos modais
// document.querySelectorAll("[data-modal-hide]").forEach((button) => {
//     button.addEventListener("click", (e) => {
//         const modalId = button.getAttribute("data-modal-hide");
//         hideModal(modalId);
//     });
// });

// document.getElementById("mobile-menu-button").addEventListener("click", () => {
//     document.getElementById("mobile-menu").classList.toggle("hidden");
// });

// document.getElementById("user-menu-button").addEventListener("click", () => {
//     document.getElementById("profile-menu-dropdown").classList.toggle("hidden");
// });