import React from 'react';
import { Divider, Header, Icon, Table } from 'semantic-ui-react';

import { Patient } from '../types';
import Entries from './Entries';

const PatientDetailPage: React.FC<{ patient: Patient | null | undefined }> = ({ patient }) => {
  if (!patient) {
    return null;
  }

  const iconName = patient.gender === 'male' ? 'mars' : 'venus';
  return (
    <div className="App">
      <div>
        <Header as="h2">
          {patient.name} <Icon fitted name={iconName} />
        </Header>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Attribute</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>ssn</Table.Cell>
              <Table.Cell>{patient.ssn}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>occupation</Table.Cell>
              <Table.Cell>{patient.occupation}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>date of birth</Table.Cell>
              <Table.Cell>{patient.dateOfBirth}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <Divider hidden />
      <Entries entries={patient.entries} />
    </div >
  );
};

export default PatientDetailPage;
