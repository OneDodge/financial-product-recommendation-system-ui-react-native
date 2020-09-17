import * as React from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, ScrollView, TextInput, StatusBar} from 'react-native';

// or any pure javascript modules available in npm
import { Card, Button, Title, Paragraph, Avatar, IconButton, Appbar } from 'react-native-paper';

export default function HomeScreen() {

  const [isLoading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://reactnative.dev/movies.json')
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

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

      
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
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
        )}
      />
      <Appbar.Header></Appbar.Header>
    </ScrollView>
  );
}
