import React from 'react';
import {Image, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GlassesScreen from '../screens/GlassesScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ComplexScreen from '../screens/ComplexScreen';
import DeepArr from '../screens/CameraScreen';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const GlassesStack = createNativeStackNavigator();

const CatalogScreens = () => {
  return (
    <GlassesStack.Navigator screenOptions={({route}) => ({headerShown: false})}>
      <GlassesStack.Screen name="GlassesScreen" component={GlassesScreen} />
      <GlassesStack.Screen name="DeepArrScreen" component={DeepArr} />
    </GlassesStack.Navigator>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor: '#FB8282'}}>
      <Tab.Screen
        name="glassesScren"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 50,
                height: 50,
              }}
              source={require('../assets/pngs/eyeglasses.png')}
            />
          ),
        }}
        component={CatalogScreens}
      />
      <Tab.Screen
        name="lensScreen"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={require('../assets/pngs/lens.png')}
            />
          ),
        }}
        component={SettingsScreen}
      />
      <Tab.Screen
        name="complexScreen"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={require('../assets/pngs/complex.png')}
            />
          ),
        }}
        component={ComplexScreen}
      />
      <Tab.Screen
        name="profileScreen"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={require('../assets/pngs/user.png')}
            />
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <HeartSvg />
            </View>
          ),
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="orderScreen"
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={require('../assets/pngs/order.png')}
            />
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <HeartSvg />
            </View>
          ),
        }}
        component={OrdersScreen}
      />
    </Tab.Navigator>
  );
}

export default function MainScreens() {
  return <MyTabs />;
}
