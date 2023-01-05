/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './Components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                mildWhite: '#f7f6f4',
            },
        },
        screens: {
            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }
            '1xl': '1380px',

            '2xl': '1512px',
            // => @media (min-width: 1536px) { ... }
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
