/*import React, {useState, useRef, useEffect} from 'react';
 

export default function FadeInSection(props) {
  const [isVisible, setVisible] = useState(true);

  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);

    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div ref={ domRef } className={ `fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
      { props.children }
    </div>
  )
}*/

//react
import  { useEffect, useRef, React } from 'react';
//react dom
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";

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
 
 