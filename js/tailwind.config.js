tailwind.config = {
    content:[
        "./*.{html,php}",
        "./**/*.{html,php}",
        
    ],
    darkMode: ['class', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                clifford: '#da373d',
            }
        }
    },
};