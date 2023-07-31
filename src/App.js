import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import ProjectsGrid from './components/ProjectsGrid.js';
import ProjectsSingle from './components/ProjectSingle.js';
import MenuBar from './components/MenuBar.js';
import SiteOptions from './SiteOptions.js';
import AboutMe from './components/AboutMe.js';

import './App.css';

const App = () => {
	const [currentComponent, setCurrentComponent] = useState('grid');
	const [currentProject, setCurrentProject] = useState('');
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [projectsFilter, setProjectsFilter] = useState('all');
	const [showImageModal, toggleShowModal] = useState(false);
	const [currImageModal, setCurrImageModal] = useState('');

	const handleShowMobileMenu = () => {
		setShowMobileMenu(prevState => !prevState);
	};

	const setProjectsFilterCategory = category => {
		setProjectsFilter(category);
	};

	const handleComponentChange = componentName => {
		setCurrentComponent(componentName);
	};

	const handleShowModal = clickedImageSource => {
		console.log(clickedImageSource);
		toggleShowModal(prevState => !prevState);
		setCurrImageModal(clickedImageSource);
	};

	const getCurrentComponent = () => {
		if (currentComponent === 'grid') {
			return (
				<ProjectsGrid
					projects={SiteOptions.gridInfo}
					handleComponentChange={handleComponentChange}
					setCurrentProject={setCurrentProject}
					projectFilterCategory={projectsFilter}
				/>
			);
		} else if (currentComponent === 'about') {
			return <AboutMe bioInfo={SiteOptions.bioInfo} />;
		} else if (currentComponent === 'singleProject') {
			return (
				<ProjectsSingle
					singleProjectInfo={SiteOptions.individualProjectInfo[currentProject]}
					handleImageClick={e => handleShowModal(e)}
				/>
			);
		}
	};

	return (
		<>
			{showImageModal && (
				<div
					className="modalSingle-outer animate__animated animate__fadeIn animate__fadeIn"
					onClick={handleShowModal}
				>
					<div className="modalSingle-inner">
						<img src={currImageModal} alt={currImageModal} />
						<span className="modalSingle-exit"></span>
					</div>
				</div>
			)}
			<div className="main">
				<Helmet>
					<meta lang="en" charSet="utf-8" />
					<title>{SiteOptions.yourName} | Cinematographer San Diego, CA</title>
				</Helmet>
				<MenuBar
					name={SiteOptions.yourName}
					currentComponent={currentComponent}
					showMobileMenu={showMobileMenu}
					handleComponentChange={handleComponentChange}
					handleShowMobileMenu={handleShowMobileMenu}
					setProjectsFilterCategory={setProjectsFilterCategory}
				/>
				<div className="clear"></div>
				<div className="animate__animated">{getCurrentComponent()}</div>

				<div className="footer"></div>
			</div>
		</>
	);
};

export default App;
