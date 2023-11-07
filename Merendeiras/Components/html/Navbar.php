
<nav class="bg-red-300 border-gray-200 dark:bg-red-900">
    <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
        <a href="/Merenda/Merendeiras/" class="flex items-center">
            <img src="/Merenda/Public/Imgs/eteclogo.png" class="h-8 mr-3 dark:invert" alt="Flowbite Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Merenda <span class="text-[1rem]">Merendeiras</span></span>
        </a>
        <div class="flex items-center md:order-2">
            <?php 
                session_start();
                if(!isset($_SESSION["user"])){ ?>
                    <a href="#" data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Login</a>
                    <a href="#" data-modal-target="registration-modal" data-modal-toggle="registration-modal" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Registre-se</a>
                <?php } ?>
            <button data-collapse-toggle="mega-menu-icons" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mega-menu-icons" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
        <div id="mega-menu-icons" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                
                <li>
                    <a href="/Merenda/" title="Home" class="block py-2 pl-3 pr-4 <?php echo ($page === "home") ? "item-navbar-active" : "item-navbar"; ?>" aria-current="page">
                        <svg class="w-6 h-6 <?php echo ($page === "home") ? "item-navbar-active" : "item-navbar"; ?>" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8v10a1 1 0 0 0 1 1h4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5h4a1 1 0 0 0 1-1V8M1 10l9-9 9 9"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="/Merenda/Cardapio/" title="Cardápio" class="block py-2 pl-3 pr-4 <?php echo ($page === "cardapio") ? "item-navbar-active" : "item-navbar"; ?>" aria-current="page">
                        <svg  title="Cardápio" class="w-6 h-6 <?php echo ($page === "cardapio") ? "item-navbar-active" : "item-navbar"; ?>" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" class="bi bi-book" viewBox="0 0 20 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16.5c0-1-8-2.7-9-2V1.8c1-1 9 .707 9 1.706M10 16.5V3.506M10 16.5c0-1 8-2.7 9-2V1.8c-1-1-9 .707-9 1.706"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="/Merenda/Sobre/" title="Sobre nós" class="block py-2 pl-3 pr-4 <?php echo ($page === "sobre") ? "item-navbar-active" : "item-navbar"; ?>" aria-current="page">
                        <svg title="Sobre nós" class="w-6 h-6 <?php echo ($page === "sobre") ? "item-navbar-active" : "item-navbar"; ?>" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18"  aria-hidden="true">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 3a3 3 0 1 1-1.614 5.53M15 12a4 4 0 0 1 4 4v1h-3.348M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0ZM5 11h3a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="/Merenda/Agenda/" title="Agenda" class="block py-2 pl-3 pr-4 <?php echo ($page === "agenda") ? "item-navbar-active" : "item-navbar"; ?>" aria-current="page">
                        <svg title="Agenda" class="w-6 h-6 <?php echo ($page === "agenda") ? "item-navbar-active" : "item-navbar"; ?>" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none" viewBox="0 0 18 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>