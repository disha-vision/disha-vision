import React, { useState } from 'react'
import '../styles/projects.css';
import project1 from '../assets/project-1.png';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import project4 from '../assets/project-4.png';
import project5 from '../assets/project-5.png';
import project6 from '../assets/project-6.png';
import project7 from '../assets/project-7.png';
import project8 from '../assets/project-8.png';
import project9 from '../assets/project-9.png';
import project10 from '../assets/project-10.png';
import project11 from '../assets/project-11.png';
import project13 from '../assets/project-13.png';
import { useNavigate, useParams } from 'react-router-dom';
import { projectData } from '../assets/json/data.local';
import { useEffect } from 'react';

function Projects() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("apartmentProjects");
    const { category } = useParams();
    const categories = [
        { id: 'apartmentProjects', label: 'Apartment', img: project1 },
        { id: 'banquetProject', label: 'Banquet', img: project2 },
        { id: 'bungalowProject', label: 'Bungalow', img: project3 },
        { id: 'CommercialbusinesshubProject', label: 'Commercial business hub', img: project4 },
        { id: 'CommercialProject', label: 'Commercial', img: project4 },
        { id: 'CommercialcumresidentialProject', label: 'Commercial cum Residential', img: project5 },
        { id: 'HospitalProject', label: 'Hospital', img: project6 },
        { id: 'HotelProject', label: 'Hotel', img: project9 },
        { id: 'InstitutionalProject', label: 'Institutional', img: project10 },
        { id: 'InteriorProject', label: 'Interior', img: project11 },
        { id: 'MallProject', label: 'Mall', img: project7 },
        { id: 'TempleProject', label: 'Temple', img: project13 },
        { id: 'TownshipProject', label: 'Township', img: project8 },
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };
    useEffect(() => {
        if (category) {
            setSelectedCategory(category);
        }
    }, [category]);
    return (
        <div className="project_container">
            <section className="project_section">
                <div className="p_contant">
                    <h1>Shaping iconic spaces across every sector</h1>
                    <p>From residences to commercial hubs, we redefine excellence in every project.</p>
                </div>
                <div className="project_description">
                    <div className="project_items">
                        {categories.map(({ id, label, img }) => (
                            <React.Fragment key={id}>
                                <div
                                    className={`project_item ${selectedCategory === id ? 'active' : 'disabled'}`}
                                    onClick={() => handleCategoryClick(id)}
                                >
                                    <img src={img} alt={label} />
                                    <h1>{label}</h1>
                                </div>
                                <hr className="project-line" />
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="project_picture">
                        <div className="main">
                            {projectData[selectedCategory]?.map((project) => {
                                const isValid =project.size && project.type

                                return (
                                    <div
                                        className={`project ${isValid ? '' : 'disabled'}`}
                                        key={project.id}
                                        onClick={() => isValid && navigate(`/projects/projectdetails/${selectedCategory}/${project.id}`)}
                                        style={{ cursor: isValid ? 'pointer' : 'pointer' }}
                                    >
                                        <div className="project-image-container">
                                            <img src={project.src} alt={project.title} height={280} />
                                        </div>
                                        <h3>{project.title}</h3>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
export default Projects;