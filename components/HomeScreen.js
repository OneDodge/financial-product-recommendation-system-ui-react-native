import * as React from 'react';
import { ActivityIndicator, FlatList, Text, View, StyleSheet, Image, ScrollView, TextInput, StatusBar, ImageBackground, RefreshControl } from 'react-native';

// or any pure javascript modules available in npm
import { Card, Title, Paragraph, IconButton, Appbar } from 'react-native-paper';
import { Button, Collection, Icon, Avatar, withTheme, Body } from 'react-native-ios-kit';

export default function HomeScreen() {

  // const [isLoading, setLoading] = React.useState(true);
  // const [data, setData] = React.useState([]);

  const wait = (timeout) => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  var list = ['AAPL', 'TSLA', 'AMZN'];

  // React.useEffect(() => {
  //   fetch('https://reactnative.dev/movies.json')
  //     .then((response) => response.json())
  //     .then((json) => setData(json.movies))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{
          marginTop: "1%",
          marginLeft: "1%",
          marginRight: "1%",
          marginBottom: "1%"
        }}>
          <Text>Saturday, September 19, 2020 </Text>
        </View>
        <View style={{
          marginTop: "1%",
          marginLeft: "1%",
          marginRight: "1%",
          marginBottom: "1%"
        }}>
          <Text style={{
            fontSize: "35",
            fontWeight: "bold"
          }}>
            WOWch List</Text>
        </View>
        <View style={styles.top}>
          <View style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            paddingTop: "3%",
            paddingBottom: "3%"

          }}>
            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Text style={{
                fontSize: "35",
                fontWeight: "bold"
              }}>
                U4095
              </Text>
              <Text>
                121.0 USD
              </Text>
            </View>

            <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <Text style={{
                fontSize: "15",
                fontWeight: "bold"
              }}>
                NASDAQ
              </Text>
              <Text style={{ color: "red" }}>
                -12.0 (1.2%)
              </Text>
            </View>
            <View>
              <Text>
                1 Friends Holding
              </Text>
              <Text>
                1 Friends Following
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.top}>
          <View style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            paddingTop: "3%",
            paddingBottom: "3%"

          }}>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
          </View>
        </View><View style={styles.top}>
          <View style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            paddingTop: "3%",
            paddingBottom: "3%"

          }}>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
          </View>
        </View><View style={styles.top}>
          <View style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            paddingTop: "3%",
            paddingBottom: "3%"

          }}>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
          </View>
        </View><View style={styles.top}>
          <View style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            paddingTop: "3%",
            paddingBottom: "3%"

          }}>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
          </View>
        </View><View style={styles.top}>
          <View style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            paddingTop: "3%",
            paddingBottom: "3%"

          }}>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
          </View>
        </View><View style={styles.top}>
          <View style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            paddingTop: "3%",
            paddingBottom: "3%"

          }}>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
          </View>
        </View><View style={styles.top}>
          <View style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            paddingTop: "3%",
            paddingBottom: "3%"

          }}>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
          </View>
        </View><View style={styles.top}>
          <View style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            paddingTop: "3%",
            paddingBottom: "3%"

          }}>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
          </View>
        </View><View style={styles.top}>
          <View style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            paddingTop: "3%",
            paddingBottom: "3%"

          }}>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
          </View>
        </View><View style={styles.top}>
          <View style={{
            paddingLeft: "3%",
            paddingRight: "3%",
            paddingTop: "3%",
            paddingBottom: "3%"

          }}>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
            <Text>
              ffffasadasda
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%'
  },
  top: {
    flex: 0.3,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "green",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: "1%",
    marginLeft: "1%",
    marginRight: "1%",
    marginBottom: "1%"
  }
});
