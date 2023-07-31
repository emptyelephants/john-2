import React, { useEffect } from 'react';
import './projectsGrid.css';

import { useDelayUnmount } from '../hooks';

const ProjectsGrid = ({
	projects,
	handleComponentChange,
	setCurrentProject,
	projectFilterCategory,
}) => {
	const element = document.querySelector('.projectsGrid');

	const filterProjects = (projects, projectFilterCategory) => {
		if (projectFilterCategory === 'all') {
			return projects;
		} else {
			return projects.filter(
				project => project.category === projectFilterCategory
			);
		}
	};

	useEffect(() => {
		if (element) {
			setTimeout(() => {
				element.classList.add('animate__fadeIn');
			}, 0);
			setTimeout(() => {
				element.classList.remove('.hideOnTransition');
			}, 1000);
		}

		return () => {
			if (element) {
				element.classList.add('.hideOnTransition');
				element.classList.remove('animate__fadeIn');
			}
		};
	}, [projectFilterCategory]);

	return (
		<div className="projectsGrid animate__animated">
			{filterProjects(projects, projectFilterCategory).map(project => {
				return (
					<div
						className="projectsGrid-single"
						onClick={() => {
							handleComponentChange('singleProject');
							setCurrentProject(project.name);
						}}
					>
						<img src={project.thumbnail} alt={project.title} />
					</div>
				);
			})}
		</div>
	);
};

export default ProjectsGrid;
