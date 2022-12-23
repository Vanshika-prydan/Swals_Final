import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  DashBoardScreen,
  AllNewsScreen,
  AllServicesScreen,
  DetailServicesScreen,
  StepOneScreen,
  StepTwoScreen,
  NewsScreen,
  LogOutScreen,
  TermsScreen,
  PrivacyScreen,
  Login,
  SignUpScreen,
} from '../screens';
import {colors} from '../constants';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function CustomDrawerContent(props) {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View>
          <DrawerItemList {...props} />
        </View>
      </View>
    </View>
  );
}
function DashboardRouters() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName="DashBoardScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="DashBoardScreen" component={DashBoardScreen} />
        <Stack.Screen name="AllServicesScreen" component={AllServicesScreen} />
        <Stack.Screen
          name="DetailServicesScreen"
          component={DetailServicesScreen}
        />
        <Stack.Screen name="StepOneScreen" component={StepOneScreen} />
        <Stack.Screen name="StepTwoScreen" component={StepTwoScreen} />
        <Drawer.Screen name="Logout" component={LogOutScreen} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
function ServicesRouters() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName="AllServicesScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AllServicesScreen" component={AllServicesScreen} />
        <Stack.Screen
          name="DetailServicesScreen"
          component={DetailServicesScreen}
        />
        <Stack.Screen name="StepOneScreen" component={StepOneScreen} />
        <Stack.Screen name="StepTwoScreen" component={StepTwoScreen} />
        <Drawer.Screen name="Logout" component={LogOutScreen} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
function NewsRouters() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator
        initialRouteName="AllNewsScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AllNewsScreen" component={AllNewsScreen} />
        <Stack.Screen
          name="DetailServicesScreen"
          component={DetailServicesScreen}
        />
        <Stack.Screen name="NewsScreen" component={NewsScreen} />
        <Drawer.Screen name="Logout" component={LogOutScreen} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}
const AuthNavigatorRoute = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Services"
    drawerContent={props => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
    }}>
    <Drawer.Screen
      name="DashBoard"
      component={DashboardRouters}
      options={{
        title: 'Dashboard',
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="md-home"
            size={size}
            color={focused ? '#0088ce' : '#ccc'}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Services"
      component={ServicesRouters}
      options={{
        title: 'Services',
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="headset-outline"
            size={size}
            color={focused ? '#0088ce' : '#ccc'}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="News"
      component={NewsRouters}
      options={{
        title: 'News',
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="document-text-outline"
            size={size}
            color={focused ? '#0088ce' : '#ccc'}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Privacy"
      component={PrivacyScreen}
      options={{
        title: 'Privacy',
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="eye-off-outline"
            size={size}
            color={focused ? '#0088ce' : '#ccc'}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Terms & Conditions"
      component={TermsScreen}
      options={{
        title: 'Terms & Conditions',
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="flash-outline"
            size={size}
            color={focused ? '#0088ce' : '#ccc'}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Logout"
      component={LogOutScreen}
      options={{
        title: 'Logout',
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="log-out-outline"
            size={size}
            color={focused ? '#0088ce' : '#ccc'}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

export const AuthNavigator = () => (
  <Drawer.Navigator
    initialRouteName="Services"
    drawerContent={props => <CustomDrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
    }}>
    <Drawer.Screen
      name="DashBoard"
      component={DashboardRouters}
      options={{
        title: 'Dashboard',
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="md-home"
            size={size}
            color={focused ? '#0088ce' : '#ccc'}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Services"
      component={ServicesRouters}
      options={{
        title: 'Services',
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="headset-outline"
            size={size}
            color={focused ? '#0088ce' : '#ccc'}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="News"
      component={NewsRouters}
      options={{
        title: 'News',
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="document-text-outline"
            size={size}
            color={focused ? '#0088ce' : '#ccc'}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Privacy"
      component={PrivacyScreen}
      options={{
        title: 'Privacy',
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="eye-off-outline"
            size={size}
            color={focused ? '#0088ce' : '#ccc'}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="Terms & Conditions"
      component={TermsScreen}
      options={{
        title: 'Terms & Conditions',
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="flash-outline"
            size={size}
            color={focused ? '#0088ce' : '#ccc'}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="AuthLogin"
      component={AuthNavigatorRoute}
      options={{
        title: 'Login',
        drawerIcon: ({focused, size}) => (
          <Ionicons
            name="log-in-outline"
            size={size}
            color={focused ? '#0088ce' : '#ccc'}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginTop: 50,
  },
  mainInnerView: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  mainView: {
    flexDirection: 'column',
    flex: 1,
  },
  detailsView: {
    height: 150,
    backgroundColor: colors.appBGColour,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: colors.blue,
    fontSize: 18,
    fontWeight: '500',
  },
});

export default AppNavigator;
