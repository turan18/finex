module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors : {
        special : "#0d2538",
        thing : "red"
      },
      spacing: {
        '12' : '12%',
        '16' : '16%',
        '18' : '18%', 
        '20' : '20%'
      },
      backgroundImage: {
        'landing': "linear-gradient(225deg, #0d2538 0%, #211b51 100%);",
      },
      height: {
        '500' : '500px',
        '60' : '60%'
        
      }
    },
  },
  plugins: [],
}


