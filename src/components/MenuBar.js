import React from 'react';

import './menuBar.css';

const ImageLogo = logoInfo => {
	return (
		<div className="imageLogo">
			<img src={logoInfo.logoSrc} alt={logoInfo.name} />
		</div>
	);
};

const TextLogo = logoInfo => {
	return (
		<div className="textLogo">
			<h1>{logoInfo.logoInfo}</h1>
		</div>
	);
};

const DesktopMenu = props => {
	return (
		<div className="primaryNavigation hide-xs">
			<ul>
				<li>
					<p
						className={props.currentComponent === 'grid' && 'currentMenu'}
						onClick={e => {
							props.handleComponentChange('grid');
							props.setProjectsFilterCategory('all');
						}}
					>
						all projects
					</p>
				</li>

				<li>
					<p
						className={props.currentComponent === 'grid' && 'currentMenu'}
						onClick={e => {
							props.handleComponentChange('grid');
							props.setProjectsFilterCategory('commercial');
						}}
					>
						commercial
					</p>
				</li>
				<li>
					<p
						className={props.currentComponent === 'narrative' && 'currentMenu'}
						onClick={e => {
							props.handleComponentChange('grid');
							props.setProjectsFilterCategory('narrative');
						}}
					>
						narrative
					</p>
				</li>
				<li>
					<p
						className={props.currentComponent === 'about' && 'currentMenu'}
						onClick={e => {
							props.handleComponentChange('about');
						}}
					>
						about
					</p>
				</li>
			</ul>
		</div>
	);
};

const MobileMenu = props => {
	return (
		<div className="mobileMenuContainer hide-d">
			<div
				className={
					'hamburgerButton ' +
					(props.showMobileMenu ? 'hideMobileMenu' : 'showMobileMenu')
				}
				onClick={e => props.handleShowMobileMenu()}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>

			<ul
				id="mobileMenu"
				className={props.showMobileMenu ? 'mobileIsShowing' : 'mobileIsHidden'}
			>
				<li>
					<p
						className={props.currentComponent === 'grid' && 'currentMenu'}
						onClick={e => {
							props.handleComponentChange('grid');
							props.handleShowMobileMenu();
						}}
					>
						home
					</p>
				</li>
				<li>
					<p
						className={props.currentComponent === 'about' && 'currentMenu'}
						onClick={e => {
							props.handleComponentChange('about');
							props.handleShowMobileMenu();
						}}
					>
						About
					</p>
				</li>
				<li>
					<hr className="bottomOfMobileMenu"></hr>
				</li>
			</ul>
		</div>
	);
};

function MenuBar(props) {
	return (
		<div className="menuBar">
			<div className="container">
				{props.logo ? <ImageLogo /> : <TextLogo logoInfo={props.name} />}

				{DesktopMenu(props)}
				{MobileMenu(props)}
			</div>
		</div>
	);
}

export default MenuBar;
