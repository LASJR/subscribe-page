module.exports = {
	purge: {
		enabled: true,
		content: ["*.html"],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
					main: ["'IBM Plex Sans'"],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("daisyui")],
		daisyui: {
    themes: [
      {
        'mytheme': {
          'primary': '#AA8066',
          'primary-focus': '#AA8066',
          'primary-content': '#ffffff',
          'secondary': '#68593C',
          'secondary-focus': '#68593C',
          'secondary-content': '#ffffff',
          'accent': '#EFDBB2',
          'accent-focus': '#EFDBB2',
          'accent-content': '#31261D',
          'neutral': '#31261D',
          'neutral-focus': '#31261D',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#2094f3',
          'success': '#009485',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
};

