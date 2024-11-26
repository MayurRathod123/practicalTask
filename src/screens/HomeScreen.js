import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import CustomStatusBar from '../components/CustomStatusBar';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Fonts from '../common/Fonts';
import {Height, Width} from '../utility/Utility';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <CustomStatusBar backgroundColor="#33a1fd" barStyle="dark-content" />
      <ScrollView>
      <LinearGradient
        colors={['#33a1fd', '#7fc8f8']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: Height * 0.02,
            paddingHorizontal: '5%',
          }}>
            <Pressable>
          <FontAwesome6
            name="bars"
            color="white"
            size={23}
            style={{marginTop: 6}}
          />
          </Pressable>
          <View style={{marginLeft: Width * 0.05}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontFamily: Fonts.FontSemiBold,
                  fontSize: 17,
                  color: '#daf7dc',
                }}>
                Hello,
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.FontBold,
                  fontSize: 20,
                  color: '#f9f9f9',
                  marginLeft: 6,
                  width: '53%',
                }}
                numberOfLines={1}>
                Kalpesh Gohil
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 3}}>
              <Text
                style={{
                  fontFamily: Fonts.FontSemiBold,
                  fontSize: 14,
                  color: '#daf7dc',
                }}>
                Checked-in{' '}
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.FontMedium,
                  fontSize: 15,
                  color: '#f9f9f9',
                }}>
                09:44 AM
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 4}}>
              <MaterialCommunityIcons name="wifi" size={20} color="#ffdac6" />
              <MaterialCommunityIcons
                name="signal"
                size={20}
                color="#9dd9d2"
                style={{marginHorizontal: 3}}
              />
              <MaterialIcons name="cell-tower" color="#9dd9d2" size={20} />
            </View>
          </View>
          <Image
            source={require('../assets/image/megaphone.png')}
            tintColor={'#fff'}
            style={{
              height: 25,
              width: 25,
              marginLeft: -Width * 0.05,
              marginTop: Height * 0.016,
            }}
          />
          <View style={styles.sosContainer}>
            <Image
              source={require('../assets/image/sos.png')}
              tintColor={'#fff'}
              style={{height: 12, width: 15}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: Height * 0.035,
            justifyContent: 'space-between',
            alignSelf: 'center',
            paddingHorizontal: '5%',
          }}>
          <View style={{width: '45%'}}>
            <Text
              style={{
                fontFamily: Fonts.FontSemiBold,
                fontSize: 16,
                color: '#daf7dc',
              }}>
              Worked
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontFamily: Fonts.FontBold,
                  fontSize: 30,
                  color: '#f9f9f9',
                }}>
                00:00
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.FontBold,
                  fontSize: 12,
                  color: '#f9f9f9',
                  marginTop: 17,
                  marginLeft: 8,
                }}>
                hrs
              </Text>
            </View>
          </View>
          <View style={{width: '45%'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons
                  name="highway"
                  size={20}
                  color="#daf7dc"
                />
                <Text
                  style={{
                    fontFamily: Fonts.FontSemiBold,
                    fontSize: 16,
                    color: '#daf7dc',
                    marginLeft: 5,
                  }}
                  numberOfLines={1}>
                  Distance
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: Fonts.FontSemiBold,
                  fontSize: 16,
                  color: '#fff',
                  marginLeft: 15,
                }}>
                2.38 km
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <View style={{flexDirection: 'row'}}>
                <MaterialCommunityIcons name="tea" size={20} color="#daf7dc" />
                <Text
                  style={{
                    fontFamily: Fonts.FontSemiBold,
                    fontSize: 16,
                    color: '#daf7dc',
                    marginLeft: 5,
                  }}
                  numberOfLines={1}>
                  Break
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: Fonts.FontSemiBold,
                  fontSize: 16,
                  color: '#fff',
                  marginLeft: 15,
                }}>
                00:00 hrs
              </Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.container11}>
            <Text
              style={{fontFamily: Fonts.FontBold, fontSize: 30, color: '#000'}}>
              0
            </Text>
            <Text style={{fontFamily: Fonts.FontRegular}}>Tasks</Text>
          </View>
          <View style={{paddingRight: '5%', width: '46%', marginBottom: 20}}>
            <View style={styles.goOffContainer}>
              <AntDesign name="logout" color="#fff" size={20} />
              <Text
                style={{
                  fontFamily: Fonts.RubikFontSemiBold,
                  color: '#fff',
                  marginLeft: 10,
                }}>
                Go Off Duty
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={styles.shadowContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/image/calendar.png')}
            style={{width: 50, height: 50}}
            tintColor={'#c9a227'}
          />
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                color: '#c9a227',
                fontFamily: Fonts.FontBold,
                fontSize: 18,
              }}>
              Upcoming
            </Text>
            <Text
              style={{
                color: '#c9a227',
                fontFamily: Fonts.FontBold,
                fontSize: 23,
              }}>
              0
            </Text>
          </View>
        </View>
        <Text style={{fontFamily: Fonts.FontSemiBold, color: '#00a8e8'}}>
          View
        </Text>
      </View>
      <View style={styles.shadowContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/image/check-mark.png')}
            style={{width: 50, height: 50}}
            tintColor={'#38b000'}
          />
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                color: '#38b000',
                fontFamily: Fonts.FontBold,
                fontSize: 18,
              }}>
              Completed
            </Text>
            <Text
              style={{
                color: '#38b000',
                fontFamily: Fonts.FontBold,
                fontSize: 23,
              }}>
              0
            </Text>
          </View>
        </View>
        <Text style={{fontFamily: Fonts.FontSemiBold, color: '#00a8e8'}}>
          View
        </Text>
      </View>
      <View style={styles.shadowContainer}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/image/check.png')}
            style={{width: 50, height: 50}}
            tintColor={'#5e2bff'}
          />
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                color: '#5e2bff',
                fontFamily: Fonts.FontBold,
                fontSize: 18,
              }}>
              Partial Completed
            </Text>
            <Text
              style={{
                color: '#5e2bff',
                fontFamily: Fonts.FontBold,
                fontSize: 23,
              }}>
              0
            </Text>
          </View>
        </View>
        <Text style={{fontFamily: Fonts.FontSemiBold, color: '#00a8e8'}}>
          View
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          marginTop: Height * 0.17,
          marginBottom: 10
        }}>
        <View style={styles.viewAllTask}>
          <Image
            source={require('../assets/image/all.png')}
            style={{width: 20, height: 20}}
            tintColor={'#1d79ac'}
          />
          <Text style={styles.imageViewAll}>View All Tasks</Text>
        </View>
        <Pressable onPress={() => navigation.navigate('Map')}>
          <AntDesign
            name="pluscircle"
            size={50}
            color="#1d79ac"
            style={{marginLeft: 15}}
          />
        </Pressable>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewAllTask: {
    flexDirection: 'row',
    width: '50%',
    borderWidth: 1,
    borderRadius: 50,
    shadowColor: '#000',
    backgroundColor: 'white',
    borderColor: '#1d79ac',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 18,
  },
  imageViewAll: {
    color: '#1d79ac',
    fontFamily: Fonts.FontBold,
    fontSize: 14,
    marginLeft: 5,
  },
  shadowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    backgroundColor: 'white',
    borderColor: '#dce1de',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginTop: Height * 0.035,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  goOffContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    borderRadius: 25,
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: Width * 0.05,
    justifyContent: 'center',
  },
  container11: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    paddingEnd: '-5%',
  },
  sosContainer: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Height * 0.014,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#fff',
    backgroundColor: 'red',
    marginLeft: Width * 0.12,
  },
});
export default HomeScreen;
