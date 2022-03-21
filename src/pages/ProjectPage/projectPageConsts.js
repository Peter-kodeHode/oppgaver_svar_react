import React from "react";
import { 
    ProjectDiv,
    ProjectH1 
} from "./projectPageStyles";
import {ProjectPageProps} from "./ProjectPageProps";

const projectPageContent = {
    headProp: "This is props headline ^^",
    paraProp1: "And this is props paragraph",
    paraProp2: "And this one is too",
};

export const ProjectPageOne = () => {
        const {headProp, paraProp1, paraProp2} =
        projectPageContent;
        
     return (   
        <>
    <ProjectDiv>
        <ProjectH1>This is the projects page!</ProjectH1>
    </ProjectDiv>

    <ProjectPageProps
    headProp={headProp}
    paraProp1={paraProp1}
    paraProp2={paraProp2}
    />
    </>
    );
};
