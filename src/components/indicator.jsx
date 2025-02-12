const Indicator = () => {
	return (
		<div className="row">
			<div className="column">
				<h1 className="mdc-typography--headline1">Cyber Risiko Indikator</h1>
				<h3 className="mdc-typography--headline2">
					Abgestimmt auf Ihre Region und Branche
				</h3>
			</div>
			<div className="column">
				<div id="indicator">
					<svg
						width="61"
						height="121"
						viewBox="0 0 61 121"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M5.28042 121C2.32184 121 -0.0848607 118.616 0.00229491 115.678C1.29316 72.1719 18.3578 32.5984 45.7121 2.40455C47.6745 0.238221 51.0373 0.1467 53.1833 2.13425L58.4356 6.999C60.6188 9.02131 60.7095 12.4203 58.7195 14.6306C34.4053 41.6347 19.2071 76.9076 17.9283 115.678C17.8314 118.615 15.4423 121 12.4837 121H5.28042Z"
							fill="#04BF55"
						/>
					</svg>
					<svg
						width="116"
						height="59"
						viewBox="0 0 116 59"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M110.531 17.7169C113.407 17.5455 115.704 15.2029 115.704 12.3287V5.23138C115.704 2.24911 113.238 -0.15568 110.253 0.00787717C68.8982 2.27361 31.3174 18.6712 2.28252 44.4414C-0.00870156 46.4753 0.0108088 50.0222 2.25414 52.1087L7.50951 56.997C9.55597 58.9007 12.7248 58.8904 14.8262 57.0469C40.6792 34.368 73.9453 19.8968 110.531 17.7169Z"
							fill="#FFBF01"
						/>
					</svg>
					<svg
						width="116"
						height="59"
						viewBox="0 0 116 59"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M101.234 57.0477C103.336 58.8908 106.503 58.9004 108.549 56.9957L113.746 52.1574C115.989 50.0688 116.009 46.5187 113.717 44.4829C84.6824 18.6891 47.1021 2.27622 5.74741 0.00788817C2.76193 -0.155861 0.296143 2.25119 0.296143 5.23625V12.3331C0.296143 15.2115 2.5952 17.557 5.4732 17.7265C42.0762 19.8833 75.3624 34.3539 101.234 57.0477Z"
							fill="#FE7501"
						/>
					</svg>
					<svg
						width="60"
						height="121"
						viewBox="0 0 60 121"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M42.4286 115.678C42.5244 118.615 44.8821 121 47.8016 121H54.7894C57.7088 121 60.0838 118.616 59.9978 115.678C58.7238 72.1716 41.8844 32.5985 14.8912 2.40468C12.9543 0.237993 9.63591 0.146828 7.51857 2.13437L2.40108 6.9374C0.246035 8.96041 0.157225 12.3608 2.12267 14.5708C26.1468 41.5827 41.1659 76.8792 42.4286 115.678Z"
							fill="#D92323"
						/>
					</svg>
				</div>
				<select id="branchen" className="drop">
					<option>Gesundheitsbranche</option>
					<option>Finanzbranche</option>
					<option>Landwirtschaft</option>
				</select>
				<select id="regionen" className="drop">
					<option>Deutschschweiz</option>
					<option>Tessin</option>
					<option>Romandie</option>
				</select>
			</div>
		</div>
	);
};

export { Indicator };
