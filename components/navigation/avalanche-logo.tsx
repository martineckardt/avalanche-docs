const avalancheLogoSVG = `<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" viewBox="0 0 220 190" enable-background="new 0 0 220 190" xml:space="preserve">
<path fill="#010000" opacity="0" stroke="none" 
	d="M106.000000,191.000000 
	C70.687920,191.000000 35.875835,191.000000 1.031875,191.000000 
	C1.031875,127.726570 1.031875,64.453117 1.031875,1.089830 
	C74.228607,1.089830 147.457367,1.089830 220.843063,1.089830 
	C220.843063,64.333038 220.843063,127.666473 220.843063,191.000000 
	C182.786728,191.000000 144.643356,191.000000 106.000000,191.000000 
M108.753487,23.066143 
	C106.781303,24.703455 104.299789,26.001934 102.939713,28.046438 
	C99.810646,32.750118 97.235901,37.821735 94.420807,42.735210 
	C71.899803,82.043488 49.344860,121.332367 26.880989,160.673264 
	C23.042721,167.395203 25.895014,172.155457 33.583733,172.183975 
	C48.081749,172.237732 62.580860,172.111847 77.077980,172.237946 
	C83.770172,172.296158 88.432472,169.499405 91.727638,163.708237 
	C107.212326,136.494400 122.784348,109.330147 138.378067,82.178566 
	C141.392197,76.930382 141.523560,71.750351 138.545532,66.532860 
	C131.114777,53.514198 123.769547,40.442513 116.039948,27.602837 
	C114.786873,25.521351 111.741776,24.518684 108.753487,23.066143 
M189.977249,151.515366 
	C182.832336,139.327515 175.755188,127.099236 168.514145,114.968781 
	C164.857819,108.843597 159.019684,108.509308 155.552734,114.306282 
	C146.170135,129.994598 136.920776,145.764069 127.775551,161.592056 
	C124.725456,166.870987 127.530586,172.066513 133.547867,172.121841 
	C152.337845,172.294647 171.131317,172.293900 189.921402,172.129471 
	C196.006195,172.076218 198.644424,167.142075 195.809311,161.653442 
	C194.133530,158.409164 192.156281,155.320618 189.977249,151.515366 
z"/>
<path fill="#FD3648" opacity="1.000000" stroke="none" 
	d="
M109.139252,23.041748 
	C111.741776,24.518684 114.786873,25.521351 116.039948,27.602837 
	C123.769547,40.442513 131.114777,53.514198 138.545532,66.532860 
	C141.523560,71.750351 141.392197,76.930382 138.378067,82.178566 
	C122.784348,109.330147 107.212326,136.494400 91.727638,163.708237 
	C88.432472,169.499405 83.770172,172.296158 77.077980,172.237946 
	C62.580860,172.111847 48.081749,172.237732 33.583733,172.183975 
	C25.895014,172.155457 23.042721,167.395203 26.880989,160.673264 
	C49.344860,121.332367 71.899803,82.043488 94.420807,42.735210 
	C97.235901,37.821735 99.810646,32.750118 102.939713,28.046438 
	C104.299789,26.001934 106.781303,24.703455 109.139252,23.041748 
z"/>
<path fill="#FC3648" opacity="1.000000" stroke="none" 
	d="
M190.145935,151.838699 
	C192.156281,155.320618 194.133530,158.409164 195.809311,161.653442 
	C198.644424,167.142075 196.006195,172.076218 189.921402,172.129471 
	C171.131317,172.293900 152.337845,172.294647 133.547867,172.121841 
	C127.530586,172.066513 124.725456,166.870987 127.775551,161.592056 
	C136.920776,145.764069 146.170135,129.994598 155.552734,114.306282 
	C159.019684,108.509308 164.857819,108.843597 168.514145,114.968781 
	C175.755188,127.099236 182.832336,139.327515 190.145935,151.838699 
z"/>
</svg>`

export const AvalancheLogo = () => <img width="80" height="80" src={`data:image/svg+xml;utf8,${encodeURIComponent(avalancheLogoSVG)}`} className="size-7" alt="logo" />;