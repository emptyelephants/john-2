import React from 'react';
import './aboutMe.css';

function AboutMe(props) {
	const bioInfo = props.bioInfo;

	return (
		<div className="aboutMe animate__animated animate__fadeIn">
			<div className="container">
				<div className="bioLeft">
					<h3>About John</h3>
					<p>
						<strong>John De Vito</strong> is a San Diego based Director of
						Photography, Gaffer, Editor and Colorist. He has experience with
						documentary, narrative, commercial, music video, and social media
						filmmaking.
					</p>
					<p>
						John has an extensive portfolio in the commercial and social media
						space, including a commercial for the natural soap company “Dr.
						Squatch” which aired during the 2021 Superbowl, garnering massive
						attention. He has collaborated with companies such as Pfizer,
						Illumina, Qualcomm, San Diego State University, Tony Hawk, Cox, and
						the San Diego Padres, as well as D2C companies such as Dr. Squatch
						and Lume.
					</p>
					<h3>From John</h3>
					<p>
						<strong>
							Experienced Director of Photography with a knack for creating
							killer content.
						</strong>{' '}
						Being on set is my first love - from TV ads to social media
						campaigns, I have the mix of skills and wisdom it takes to create
						scroll-stopping content and identify the strengths of an asset. I
						bring leadership and organization to every project and always strive
						to have a great team of people under me.
					</p>
					<p>
						<strong>Eye for narrative prowess.</strong> Whether it\’s a
						documentary or a narrative, I pride myself on always enhancing a
						story with my work. My background in lighting and stage direction
						always gives me an edge as a cinematographer, employing the best-fit
						technology with ageless camera techniques to bring out the best in
						every script.
					</p>
					<div className="bio_bullets">
						<div className="bio_bullets_left">
							<ul>
								<li> Cameras:</li>
								<ul>
									<li>RED, Arri, Sony, Canon, BlackMagic</li>
								</ul>
								<li>Lighting:</li>
								<ul>
									<li>LED and old school tungsten</li>
									<li>Generator experience up to 3-phase 300/500 amp</li>
									<li>DMX Universes</li>
								</ul>
							</ul>
						</div>
						<div className="bio_bullets_right">
							<ul>
								<li>Editing:</li>
								<ul>
									<li> Premiere Pro, DaVinci Resolve, Final Cut </li>
									<li>
										2D motion graphics using After Effects, specifically text
										and animation
									</li>
								</ul>

								<li>Coloring: </li>
								<ul>
									<li>DaVinci Resolve</li>
								</ul>
							</ul>
						</div>
					</div>
				</div>

				<div
					className="bioRight wow fadeInLeft"
					style={{
						background: `url(${bioInfo.bioHero})`,
						backgroundSize: 'cover',
						backgroundPosition: '50% 50%',
					}}
				></div>
				<div
					className="bioRight fadeInLeft"
					style={{
						background: `url(${bioInfo.bioHero2})`,
						backgroundSize: 'cover',
						backgroundPosition: '50% 50%',
						marginTop: '10px',
					}}
				></div>
			</div>
		</div>
	);
}
export default AboutMe;
