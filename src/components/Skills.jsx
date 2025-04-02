import React, { useState } from 'react';
// ...existing code...
import SpecialtyFilter from './SpecialtyFilter';

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  
  ${props => props.highlighted && `
    font-weight: 700;
    color: ${props.theme.colors.secondary};
    text-shadow: 0 0 10px ${props.theme.colors.secondary}60;
    transform: scale(1.05);
  `}
`;

// ...existing code...

const Skills = () => {
  const [activeSpecialty, setActiveSpecialty] = useState('all');
  
  // Define which skills belong to which specialty
  const skillCategories = {
    webdev: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Vue.js', 'Node.js', 'PHP', 'WordPress', 'Responsive Design', 'Web Accessibility'],
    software: ['Git', 'VS Code', 'Docker', 'CI/CD', 'Jest', 'Python', 'C#', 'C++', 'Java', 'Playwright', 'Selenium', 'GitLab'],
    frameworks: ['React', 'Angular', 'Vue.js', 'Next.js', 'Node.js', 'Express', 'Django', '.NET', 'Spring Boot', 'Bootstrap', 'Tailwind CSS', 'Material UI']
  };
  
  // Check if a skill should be highlighted based on active specialty
  const isHighlighted = (skill) => {
    if (activeSpecialty === 'all') return false;
    return skillCategories[activeSpecialty].includes(skill);
  };
  
  return (
    <Section id="skills">
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        
        <SpecialtyFilter 
          activeSpecialty={activeSpecialty} 
          setActiveSpecialty={setActiveSpecialty}
        />
        
        <SkillGrid>
          {skillsData.map((skill, index) => (
            <SkillItem key={index} highlighted={isHighlighted(skill.name)}>
              <SkillIcon src={skill.icon} alt={skill.name} />
              <SkillName>{skill.name}</SkillName>
            </SkillItem>
          ))}
        </SkillGrid>
      </Container>
    </Section>
  );
};

export default Skills;
