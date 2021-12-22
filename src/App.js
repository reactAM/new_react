import './css/style.css';
import { Logo, Menu } from './components/Header.js';
import Panel from './components/Panel.js';
import Btns from './components/Btns.js';
import Footer from './components/Footer.js';
import { useRef } from 'react';

function App() {
	const frame = useRef(null);
	return (
		<div className="App">
			{/* 전체 레이아웃 */}
			<figure>
				<Logo />
				<Menu />
				<section ref={frame}>
					<Panel />	
				</section>
				<Btns frame={frame} />
				<Footer />
			</figure>
		</div>
	);
}

export default App;
