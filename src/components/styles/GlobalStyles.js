import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
	:root{
		--text-primary: 'Ibarra Real Nova', serif;
		--text-secondary: 'Jost', sans-serif;
	}

	@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;500;600;700&display=swap');
	
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	body{
		font-family: var(--text-secondary);
		background: #FAFAFA;
	}
	.link-active{
		color: #64B6A5 !important;
		font-weight: 600 !important;
	}
`

export default GlobalStyles;