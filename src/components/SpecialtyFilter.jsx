import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.secondary};
  background-color: ${props => props.active ? props.theme.colors.secondary : 'transparent'};
  color: ${props => props.active ? props.theme.colors.background : props.theme.colors.text};
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.secondary}40;
  }
`;

const SpecialtyFilter = ({ activeSpecialty, setActiveSpecialty }) => {
  const specialties = [
    { id: 'all', label: 'All Skills' },
    { id: 'webdev', label: 'Web Development' },
    { id: 'software', label: 'Software & Tooling' },
    { id: 'frameworks', label: 'Frameworks & Tech Stacks' }
  ];

  return (
    <FilterContainer>
      {specialties.map(specialty => (
        <FilterButton 
          key={specialty.id} 
          active={activeSpecialty === specialty.id}
          onClick={() => setActiveSpecialty(specialty.id)}
        >
          {specialty.label}
        </FilterButton>
      ))}
    </FilterContainer>
  );
};

export default SpecialtyFilter;
