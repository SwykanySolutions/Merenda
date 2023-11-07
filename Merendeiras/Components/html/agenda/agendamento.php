<div class="w-full flex justify-center hidden" id="form-merendas" >
    <form id="form-confirmar-merenda" class="space-y-6 w-[35%]" action="" method="post">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-6">
                <label for="data-de-hoje" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data de hoje</label>
                <input type="date" name="data-de-hoje" id="data-de-hoje" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required disabled/>
            </div>
            <div class="sm:col-span-3">
                <div class="flex items-center">
                    <input id="vai-comer" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="vai-comer" name="vai-comer" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vai comer?</label>
                </div>
            </div>
            <div class="sm:col-span-6">
                <div class="flex justify-center">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Informar</button>
                </div>
            </div>
        </div>
    </form>
</div>
