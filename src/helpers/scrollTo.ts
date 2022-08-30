export const scrollTo = (targetId: string): void => {
	const target = document.getElementById(targetId)?.offsetTop;

	window.scrollTo({ top: target ? target - 100 : 0, behavior: 'smooth' });
};
