import React, { useState } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  margin-right: 10px;
`;

const RadioInput = styled.input`
  margin-right: 5px;
`;

const Select = styled.select`
  margin-top: 10px;
`;

// Componente de radio dinâmico
interface RadioOption {
    value: string;
    label: string;
  }
  
  interface RadioProps {
    options: RadioOption[];
    selectedValue: string;
    onChange: (value: string) => void;
  }
  
  const Radio: React.FC<RadioProps> = ({ options, selectedValue, onChange }) => {
    return (
      <>
        {options.map(option => (
          <Label key={option.value} htmlFor={option.value}>
            <RadioInput
              type="radio"
              id={option.value}
              name="Ocupaçao"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onChange(option.value)}
            />
            {option.label}
          </Label>
        ))}
      </>
    );
  };
  
  // Componente de select dinâmico
  interface SelectOption {
    value: string;
    label: string;
  }
  
  interface SelectProps {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
  }
  
  const DynamicSelect: React.FC<SelectProps> = ({ options, value, onChange }) => {
    return (
      <Select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </Select>
    );
  };

export default Radio;
