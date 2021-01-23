import React from 'react';
import { Divider, Header, Icon, Table } from 'semantic-ui-react';

import { Entry, Patient } from '../types';

const EntryDetail: React.FC<{ entry: Entry | null }> = ({ entry }) => {
  if (!entry) {
    return null;
  }

  return (
    <div>
      <Header as="h4">{entry.id}</Header>
      <div>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell>Attribute</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>description</Table.Cell>
              <Table.Cell>{entry.description}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>date</Table.Cell>
              <Table.Cell>{entry.date}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>specialist</Table.Cell>
              <Table.Cell>{entry.specialist}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
      <Divider />
    </div>
  );
};


const Entries: React.FC<{ entries: Entry[] | null }> = ({ entries }) => {
  if (!entries) {
    return null;
  } else if (entries.length === 0) {
    return null;
  }

  return (
    <div>
      <Header as="h3">entries</Header>
      <div>
        {
          entries.map(e =>
            <EntryDetail key={e.id} entry={e} />
          )
        }
      </div>
    </div>

  );
};

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
