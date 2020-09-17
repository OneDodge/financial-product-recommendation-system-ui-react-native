import * as React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TextInput, StatusBar} from 'react-native';

// or any pure javascript modules available in npm
import { Card, Button, Title, Paragraph, Avatar, IconButton, Appbar } from 'react-native-paper';

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

export default function HomeScreen() {
  return (
    <ScrollView>
      <Appbar.Header></Appbar.Header>
      <Card>
        <Card.Title 
          title="2019-12-11"
          subtitle="Today"
          left={(props) => <Avatar.Text {...props} label="XD" onPress={() => {}} />}
          right={(props) => <IconButton {...props} icon="https://reactnative.dev/img/tiny_logo.png" onPress={() => {}} />}
        />
      </Card>
      <Card>
        <Card.Title
          title="AAPL"
          subtitle="NASDAQ"
          // left={(props) => <Avatar.Icon {...props} icon="folder" />}
          // right={(props) => <IconButton {...props} icon="https://reactnative.dev/img/tiny_logo.png" onPress={() => {}} />}
        />
        <Card.Content>
          <Paragraph>
            3year_return: 11.37
          </Paragraph>
          <Paragraph>
            standard_deviation: 20.12
          </Paragraph>
          <Paragraph>
            dividend: 0.22
          </Paragraph>
          <Paragraph>
            asset_class: Equity Developed Market
          </Paragraph>
        </Card.Content>
        <Card.Content>
          <Paragraph>
            20 Friends Holding
          </Paragraph>
          <Paragraph>
            1 Friends Following
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Buy</Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Title
          title="TSLA"
          subtitle="NASDAQ"
          // left={(props) => <Avatar.Icon {...props} icon="folder" />}
          // right={(props) => <IconButton {...props} icon="https://reactnative.dev/img/tiny_logo.png" onPress={() => {}} />}
        />
        <Card.Content>
          <Paragraph>
            3year_return: 11.37
          </Paragraph>
          <Paragraph>
            standard_deviation: 20.12
          </Paragraph>
          <Paragraph>
            dividend: 0.22
          </Paragraph>
          <Paragraph>
            asset_class: Equity Developed Market
          </Paragraph>
        </Card.Content>
        <Card.Content>
          <Paragraph>
            20 Friends Holding
          </Paragraph>
          <Paragraph>
            1 Friends Following
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Buy</Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Title
          title="HSBC"
          subtitle="NASDAQ"
          // left={(props) => <Avatar.Icon {...props} icon="folder" />}
          // right={(props) => <IconButton {...props} icon="https://reactnative.dev/img/tiny_logo.png" onPress={() => {}} />}
        />
        <Card.Content>
          <Paragraph>
            3year_return: 11.37
          </Paragraph>
          <Paragraph>
            standard_deviation: 20.12
          </Paragraph>
          <Paragraph>
            dividend: 0.22
          </Paragraph>
          <Paragraph>
            asset_class: Equity Developed Market
          </Paragraph>
        </Card.Content>
        <Card.Content>
          <Paragraph>
            20 Friends Holding
          </Paragraph>
          <Paragraph>
            1 Friends Following
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Buy</Button>
        </Card.Actions>
      </Card>
      <Card>
        <Card.Title
          title="AMZN"
          subtitle="NASDAQ"
          // left={(props) => <Avatar.Icon {...props} icon="folder" />}
          // right={(props) => <IconButton {...props} icon="https://reactnative.dev/img/tiny_logo.png" onPress={() => {}} />}
        />
        <Card.Content>
          <Paragraph>
            3year_return: 11.37
          </Paragraph>
          <Paragraph>
            standard_deviation: 20.12
          </Paragraph>
          <Paragraph>
            dividend: 0.22
          </Paragraph>
          <Paragraph>
            asset_class: Equity Developed Market
          </Paragraph>
        </Card.Content>
        <Card.Content>
          <Paragraph>
            20 Friends Holding
          </Paragraph>
          <Paragraph>
            1 Friends Following
          </Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button>Buy</Button>
        </Card.Actions>
      </Card>
      <Appbar.Header></Appbar.Header>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
