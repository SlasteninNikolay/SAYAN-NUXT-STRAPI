/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
        colors: {
            // Primary (#2a3928)
            primary: {
                50:  '#f3f6f3',
                100: '#dde6dd',
                200: '#bacdb9',
                300: '#97b495',
                400: '#749b71',
                500: '#2a3928', // основной primary
                600: '#223021',
                700: '#19261a',
                800: '#111c13',
                900: '#090f0a',
                DEFAULT: '#2a3928',
            },

            // Secondary
            secondary: {
                50:  '#faf8f1',
                100: '#eee8d3',
                200: '#ded0a7',
                300: '#cfb87b',
                400: '#c1a04f',
                500: '#bdad83', // основной secondary
                600: '#958965',
                700: '#6d6548',
                800: '#45412b',
                900: '#221e12',
                DEFAULT: '#bdad83',
            },

            // Accent
            accent: {
                50:  '#f6f1ef',
                100: '#ecdcd8',
                200: '#dcb8b0',
                300: '#cb9389',
                400: '#bb6e62',
                500: '#8c5a50', // основной accent
                600: '#714840',
                700: '#563630',
                800: '#3a241f',
                900: '#1f120f',
                DEFAULT: '#8c5a50',
            },


        },
        fontFamily: {
            // Основные категории
            sans: ['Intro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            display: ['Intro', 'ui-sans-serif', 'system-ui', 'sans-serif'],

            // Семантические названия
            heading: ['Intro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            body: ['Intro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            accent: ['Intro', 'ui-sans-serif', 'system-ui', 'sans-serif'],

            // Прямые названия
            aeroport: ['Aeroport', 'ui-sans-serif'],
            intro: ['Intro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        },
        container: {
            center: true,
            padding: '1rem',
        },
    },
  },
  plugins: [],
}

