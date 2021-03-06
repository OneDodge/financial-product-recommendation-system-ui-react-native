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

  var productsRecommendation = [
    {
      name: "AAPL",
      maketName: "NASDAQ",
      ccy: "USD",
      price: 121,
      gainloss: -12,
      gainlossPercentage: 1.2,
      friendsFollowing: 10,
      friendsHolding: 15
    },
    {
      name: "TSLA",
      maketName: "NASDAQ",
      ccy: "USD",
      price: 451,
      gainloss: +12,
      gainlossPercentage: 1.2,
      friendsFollowing: 26,
      friendsHolding: 18
    },
    {
      name: "AMZN",
      maketName: "NASDAQ",
      ccy: "USD",
      price: 3407,
      gainloss: +120,
      gainlossPercentage: 10.2,
      friendsFollowing: 29,
      friendsHolding: 18
    },
    {
      name: "MSFT",
      maketName: "NASDAQ",
      ccy: "USD",
      price: 200.39,
      gainloss: +20,
      gainlossPercentage: 2.2,
      friendsFollowing: 239,
      friendsHolding: 18
    }
  ];

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

        {
          productsRecommendation.map(prs => {
            return (
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
                      {prs.name}
                    </Text>
                    <Text>
                      {prs.price} {prs.ccy}
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
                    <Text style={{ color: prs.gainloss < 0 ? "red" : "green" }}>
                      {prs.gainloss} ({prs.gainlossPercentage}%)
                        </Text>
                  </View>
                  <View style={{
                    alignItems: "flex-end"
                  }}>
                    <View style={{
                      backgroundColor: "green",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      paddingLeft: "3%",
                      paddingRight: "3%",
                      paddingTop: "1%",
                      paddingBottom: "1%",
                      marginTop: "1%",
                      marginLeft: "1%",
                      marginRight: "1%",
                      marginBottom: "1%",
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                      <View style={{
                        backgroundColor: "white",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        paddingLeft: "10%",
                        paddingRight: "10%",
                        paddingTop: "1%",
                        paddingBottom: "1%",
                        marginTop: "1%",
                        marginLeft: "1%",
                        marginRight: "1%",
                        marginBottom: "1%",
                      }}>
                        <Text style={{
                          fontSize: "12",
                          fontWeight: "bold"
                        }}>
                          {prs.friendsFollowing}
                        </Text>
                      </View>
                      <Text style={{
                        fontSize: "12",
                        fontWeight: "bold",
                        color: "white"
                      }}>
                        Friends Following
                          </Text>
                    </View>
                    <View style={{
                      backgroundColor: "green",
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      paddingLeft: "3%",
                      paddingRight: "3%",
                      paddingTop: "1%",
                      paddingBottom: "1%",
                      marginTop: "1%",
                      marginLeft: "1%",
                      marginRight: "1%",
                      marginBottom: "1%",
                      flex: 1,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                      <View style={{
                        backgroundColor: "white",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        paddingLeft: "10%",
                        paddingRight: "10%",
                        paddingTop: "1%",
                        paddingBottom: "1%",
                        marginTop: "1%",
                        marginLeft: "1%",
                        marginRight: "1%",
                        marginBottom: "1%",
                      }}>
                        <Text style={{
                          fontSize: "12",
                          fontWeight: "bold"
                        }}>
                          {prs.friendsHolding}
                        </Text>
                      </View>
                      <Text style={{
                        fontSize: "12",
                        fontWeight: "bold",
                        color: "white"
                      }}>
                        Friends Holding
                          </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }
          )
        }
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
