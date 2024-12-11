const downloadBlocks = document.querySelectorAll('.download-block');
downloadBlocks.forEach(block => {
	block.addEventListener('click', () => {
	const fileUrl = block.getAttribute('data-file-url');
	if (fileUrl) {
	const anchor = document.createElement('a');
	anchor.href = fileUrl;
	anchor.download = '';
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
				}
});
});
