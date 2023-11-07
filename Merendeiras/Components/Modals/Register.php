<div id="alert-error-registro" class="flex hidden items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800" role="alert">
    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div class="ml-3 text-sm font-medium">
      Não foi possível fazer o registro tente novamente.
    </div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-error-registro" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
    </button>
</div>
<div id="alert-sucess-registro" class="flex hidden items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800" role="alert">
    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
    </svg>
    <div class="ml-3 text-sm font-medium">
      Registro efetuado com sucesso.
    </div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"  data-dismiss-target="#alert-sucess-registro" aria-label="Close">
      <span class="sr-only">Dismiss</span>
      <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
      </svg>
    </button>
</div>
<!-- Main modal -->
<div id="registration-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <!-- <h3 class="text-xl w-full text-center font-semibold text-gray-900 dark:text-white">
                    Registro
                </h3> -->
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="registration-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="px-6 py-6 lg:px-8 overflow-y-auto max-h-[700px]">
                <img src="/Merenda/Public/logo-etec-form.png" alt="Logo-Login-Etec" class=" w-[12rem] h-[6rem]">
                <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white text-center mt-5">Faça seu registro abaixo</h3>
                <form class="space-y-6 " id="register-aluno" action="#">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-3">
                            <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Primeiro nome</label>
                            <input type="text" autocomplete="given-name" name="nome" id="nome" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="John Stuart" required>
                            <span id="infoNome"></span>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="sobrenome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Segundo nome</label>
                            <input type="text" name="sobrenome" autocomplete="family-name" id="sobrenome" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Little Silva" required>
                            <span id="infoSobrenome"></span>
                        </div>
                        
                        <div class="sm:col-span-4">
                            <label for="data-de-nascimento" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data de nascimento</label>
                            <input type="date" min="1900-01-01" name="data-de-nascimento" autocomplete="bday" id="data-de-nascimento" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nome@etec.sp.gov.br" required>
                            <span id="infoDataDeNascimento"></span>
                        </div>
                        
                        <div class="sm:col-span-6">
                            <label for="user" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                            <div class="flex">
                                <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-700 dark:text-gray-400 dark:border-gray-600">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                    </svg>
                                </span>
                                <input type="text" id="user" name="user" autocomplete="username" class="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bonnie Green">
                            </div>
                            <span id="infoUser"></span>
                        </div>

                        <div class="sm:col-span-6">
                            <label for="select-curso" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecione um curso</label>
                            <select id="select-curso" name="curso" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected disabled >Selecione um curso para prosseguir</option>
                                <option value="Ensino-Medio-Ciencias">Ensino Médio - Ciências da Natureza e suas Tecnologias</option>
                                <option value="Ensino-Medio-Matematica">Ensino Médio - Matemática e suas Tecnologias</option>
                                <option value="Ensino-Medio-Adminstracao">Ensino Médio com Habilitação Profissional de Técnico em Administração - (M-Tec - N)</option>
                            </select>
                            <span id="info-select-curso"></span>
                        </div>
                        
                        <div class="sm:col-span-4">
                            <label for="ra" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RA</label>
                            <input type="text" name="ra" id="ra" oninput="validarRA(this);" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="ex. 142334-3" required>
                            <span id="infoRA" class="hidden"></span>
                        </div>
                        <div class="sm:col-span-6">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nome@etec.sp.gov.br" required>
                            <span id="infoEmail"></span>
                        </div>
                        <div class="sm:col-span-6">
                            <label for="confirm-email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirme seu email</label>
                            <input type="email" name="confirm-email" id="confirm-email" autocomplete="confirm-email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="nome@etec.sp.gov.br" required>
                            <span id="infoConfirmEmail"></span>
                        </div>
                        <div class="sm:col-span-6">
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                            <input type="password" autocomplete="current-password" name="password" id="register-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                            <span id="info-senha" class="hidden"></span>
                            <div id="component-nivel-senha" class="hidden w-[50%] bg-gray-200 rounded-full h-1.5 dark:bg-gray-800">
                                <div id="nivel-senha" class="h-1.5 rounded-full"></div>
                            </div>
                        </div>
                        <div class="sm:col-span-6">
                            <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirme sua senha</label>
                            <input type="password" autocomplete="current-password" name="confirm-password" id="confirm-register-password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                            <span id="infoConfimPassword"></span>
                        </div>
                        <div class="sm:col-span-6">
                            <div class="flex items-center">
                                <input id="terms-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="terms-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" id="link-terms" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                            </div>
                        </div>
                    </div>
                    <a href="" data-modal-toggle="terms-modal" data-modal-target="terms-modal" data-modal-hide="registration-modal"></a>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registre-se</button>
                    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Ja é registrado? <a href="#" id="close-registration" data-modal-hide="registration-modal" data-modal-toggle="authentication-modal" class="text-blue-700 hover:underline dark:text-blue-500">Faça seu login aqui</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div> 