'use client';
import React from 'react';
import SectionHeading from './SectionHeading';
import Project from './Project';
import { projectsData } from '@/lib/data';

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-28 max-w-[45rem] leading-8 sm:mb-40 text-center scroll-mt-28"
    >
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
