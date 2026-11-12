module.exports={
        content:['./*.{html,tsx,ts}','./components/**/*.{tsx,ts}','./pages/**/*.{tsx,ts}'],theme: {
          extend: {
            colors: {
            // Neutros quentes (substituem o azul-ardósia padrão de template)
            slate: { 50: '#faf8f5', 100: '#f4f1ec', 200: '#e7e2da', 300: '#d6d0c6', 400: '#a8a196', 500: '#78716a', 600: '#57524b', 700: '#433f3a', 800: '#2a2724', 900: '#1c1a17', 950: '#0f0e0c' },
            // Paleta vermelha da logomarca ADP: remapeia todas as classes blue-* do projeto
            blue: { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#e5383b', 600: '#d61f26', 700: '#c4161c', 800: '#a11218', 900: '#7f1d1d', 950: '#450a0a' },
              adp: {
                yellow: '#ffc629',
                cream: '#faf6ef',
                navy: '#1c1917',
                blue: '#c4161c',
                blueHover: '#a11218',
                blueLight: '#fef2f2',
                orange: '#b45309',
                orangeHover: '#92400e',
                red: '#b91c1c',
                green: '#15803d',
                greenHover: '#166534',
                surface: '#faf6ef',
                border: '#e7dfd2',
                gray: '#57534e',
                dark: '#1c1917'
              }
            },
            fontFamily: {
              sans: ['Barlow', 'system-ui', '-apple-system', 'sans-serif'],
              display: ['"Barlow Condensed"', 'Barlow', 'system-ui', 'sans-serif'],
              heading: ['"Barlow Condensed"', 'Barlow', 'system-ui', 'sans-serif'],
            }
          }
        }
      }