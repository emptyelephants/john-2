import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import './projectSingle.css';

const ProjectSingle = ({ singleProjectInfo, handleImageClick }) => {
	return (
		<>
			<Helmet>
				<title>
					{singleProjectInfo.name || 'John De Vito'} | Cinematographer San
					Diego, CA
				</title>
			</Helmet>
			<div className="projectDetails">
				<h2>{singleProjectInfo.name}</h2>
				<h3 className="projectDetails-role">{singleProjectInfo.role || ''}</h3>
				<p className="projectDetails-desc">{singleProjectInfo.desc || ''}</p>
			</div>
			<div className="projectGrid">
				{singleProjectInfo.projectImages.map(image => (
					<div
						className="projectGrid-image"
						key={image}
						onClick={() => handleImageClick(image)}
					>
						<img src={image} alt={singleProjectInfo.name} />
					</div>
				))}
			</div>
		</>
	);
};

export default ProjectSingle;
