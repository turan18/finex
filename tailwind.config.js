module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors : {
        special : "#0d2538",
        sidebar : '#0d0f28',
        sidebar_hover: "#14173d",
        spark : '#2B2D3E',
        spark_up : '#4CAF50',
        spark_down : '#F44336',
        timeline : '#121539'
      },
      spacing: {
        '12' : '12%',
        '14' : '14%',
        '16' : '16%',
        '18' : '18%', 
        '20' : '20%',
        '44' : '44%',
        '56' : '56%',
        '90' : '90%',
        '92' : '92%',
        '95' : '95%'
      },
      backgroundImage: {
        'landing': "linear-gradient(225deg, #0d2538 0%, #211b51 100%);",
      },
      height: {
        '500' : '500px',
        '60' : '60%'
        
      },
      gridTemplateColumns: {
        'split' : 'grid-template-columns: 1.5fr 1fr;'
      }
    },
  },
  plugins: [],
}


