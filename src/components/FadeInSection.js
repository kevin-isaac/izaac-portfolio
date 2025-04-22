

//react
import  { useEffect, useRef, React } from 'react';
//react dom

const FadeInSection = ({ children }) => {
	const wrapper = useRef();

	useEffect(() => {
		animateFading(wrapper.current);
	}, []);

	//animate sliding on scroll
	const animateFading = (element) => {
		const fadeOnScrollOptions = {
			threshold: 0.3,
			rootMargin: '0px 0px -100px 0px',
		};

		const fadeOnScrollObserver = new IntersectionObserver((entries, observer) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					return;
				} else {
					entry.target.classList.add('appear');
					observer.unobserve(entry.target);
				}
			});
		}, fadeOnScrollOptions);

		fadeOnScrollObserver.observe(element);
	};

	return (
		<div className="card fade-in" ref={wrapper}>
			{children}
		</div>
	);
};

 export default  FadeInSection;
 
 