/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navcolour':'#231f32',
        'pinktheme':'#ff1493',
        'bluetheme':'#89cff0',
        'red':'#ff0000',
        'greentheme':'#32a852',
        'yellowtheme':'#ffff00'
      },

      backgroundImage: {
        'hero_pattern': "url('/src/images/medium-shot-woman-getting-breakfast.jpg')",
        'team_work':"url('/src/images/team_4540467 (1).png')",
        
      },

      fontFamily: {
        //'sans': ['Proxima Nova'],
        'cursive':['Lucida Handwriting'],
        'malanya':['malanya'],
      }
    },
    
  },
  plugins: [require('flowbite/plugin')],
}

