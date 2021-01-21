import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import { Patient } from '../types';

const PatientDetailPage: React.FC<{ patient: Patient | null | undefined }> = ({ patient }) => {
  if (patient) {
    const iconName = patient.gender === 'male' ? 'mars' : 'venus';
    return (
      <div className="App">
        <Header as="h2">
          {patient.name} <Icon fitted name={iconName} />
        </Header>
        <div>ssn:{patient.ssn}</div>
        <div>occupation:{patient.occupation}</div>
        <div>date of birth:{patient.dateOfBirth}</div>
      </div>
    );
  }

  return null;
};

export default PatientDetailPage;
