import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Button, Placeholder, Icon, Segment, List, Grid, Input, Table, Divider, Menu, Image, Container, Dimmer, Loader, Label } from 'semantic-ui-react';

class App extends Component {
  render(){
    return (
      <div>
        <br />
        <Segment placeholder>
          <Grid columns={2} relaxed='very' stackable>
            <Grid.Column textAlign='center'>              
              <Icon name='search' size='huge' />
              <h3>Search Document</h3>
              <Input icon='search' placeholder='Search...' />
            </Grid.Column>

            <Grid.Column textAlign='center'>
              <Icon name='file pdf outline' size='huge' />
              <h3>Tambah Document Baru</h3>
              <Button content='Create Document' primary />
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>

          <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>
        <br />
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Grid.Column>
            <Grid.Column>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Paragraph>
              </Placeholder>
            </Grid.Column>            
            <Grid.Column>
              <h5>Website Terkait</h5>
              <List>
                <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                    <a href='http://www.google.com'>Google</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                    <a href='http://www.facebook.com'>Facebook</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                    <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                    <a href='http://www.Niomic.com'>Niomic</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name='linkify' />
                  <List.Content>
                    <a href='http://www.reactjs.org'>React</a>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <Container>
          <Table celled>
            <Table.Header>
              <Table.Row textAlign='right'>
                  <Table.HeaderCell colSpan='3'>
                    <Input icon='search' placeholder='Search document' />
                  </Table.HeaderCell>
                </Table.Row>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Nama Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar JS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
            </Table.Body>

            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='3'>
                  <Menu floated='right' pagination>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron left' />
                    </Menu.Item>
                    <Menu.Item as='a'>1</Menu.Item>
                    <Menu.Item as='a'>2</Menu.Item>
                    <Menu.Item as='a'>3</Menu.Item>
                    <Menu.Item as='a'>4</Menu.Item>
                    <Menu.Item as='a' icon>
                      <Icon name='chevron right' />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
