import React, { Component } from 'react';
import { Container, Button, Grid, Menu, Card, Divider, Segment, List, Header, Radio, Form, Table } from 'semantic-ui-react';
import './App.css';

const items = [
  {
    header: 'Project Report - April',
    description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
    meta: 'ROI: 30%',
  },
  {
    header: 'Project Report - May',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 34%',
  },
  {
    header: 'Project Report - June',
    description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
    meta: 'ROI: 39%',
  },
]

class App extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <div className="App">
        <Container>
          <Grid>
            <Grid.Column width={16}>
              <Menu>
                <Menu.Item name='editorials'>
                  Editorials
                </Menu.Item>
                <Menu.Item name='reviews'>
                  Reviews
                </Menu.Item>
                <Menu.Item name='upcomingEvents'>
                  Upcoming Events
                </Menu.Item>
              </Menu>
            </Grid.Column>
          </Grid>
          <Grid>
            <Grid.Column width={4}>
              <Segment>
                <Header as='h2'>Semantic UI</Header>
                {/* <List divided relaxed>
                  <List.Item>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content>
                      <List.Header as='a'>An Admin App Item</List.Header>
                      <List.Description as='a'>Add or remove items from customer trolley</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content>
                      <List.Header as='a'>Another Admin App Item</List.Header>
                      <List.Description as='a'>Amend an order</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content>
                      <List.Header as='a'>An Item that is useful to Customer Services</List.Header>
                      <List.Description as='a'>Track an order for the customer</List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='github' size='large' verticalAlign='middle' />
                    <List.Content>
                      <List.Header as='a'>An Item that is useful to Customer Services</List.Header>
                      <List.Description as='a'>Track an order for the customer</List.Description>
                    </List.Content>
                  </List.Item>
                </List>
                <Divider /> */}
                <Button fluid color="red">Full width</Button>
                <Divider />
                <Button primary>Primary</Button>
                <Divider />
                <Button secondary>Secondary</Button>
              </Segment>
            </Grid.Column>
            <Grid.Column width={12}>
              {/* <Segment>
                <Header as='h2'>Header</Header>
                <Card.Group itemsPerRow={3} items={items} />
              </Segment> */}
              <Segment>
                <Header as='h2'>Customer information</Header>
                <Table singleLine>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                      <Table.HeaderCell>Registration Date</Table.HeaderCell>
                      <Table.HeaderCell>E-mail address</Table.HeaderCell>
                      <Table.HeaderCell>Premium Plan</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>John Lilki</Table.Cell>
                      <Table.Cell>September 14, 2013</Table.Cell>
                      <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                      <Table.Cell>No</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Jamie Harington</Table.Cell>
                      <Table.Cell>January 11, 2014</Table.Cell>
                      <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                      <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>Jill Lewis</Table.Cell>
                      <Table.Cell>May 11, 2014</Table.Cell>
                      <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                      <Table.Cell>Yes</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
              </Segment>
              <Segment>
                <Header as='h3'>Who placed the order</Header>
                <Form>
                  <Form.Field>
                    Order placed by: <b>{this.state.value}</b>
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label='Customer'
                      name='radioGroup'
                      value='Customer'
                      checked={this.state.value === 'Customer'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Radio
                      label='Someone else'
                      name='radioGroup'
                      value='Someone Else'
                      checked={this.state.value === 'Someone Else'}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid>
          <Grid columns='equal'>
            <Grid.Column>
              <Segment>Stuff</Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default App;
