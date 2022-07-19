import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogotipoIcon from '../icons/LogotipoIcon'
import ChatIcon from '../icons/ChatIcon'
import UserSummaryCard from '../components/UserSummaryCard'

const DashboardScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerStyle}>
        <View style={styles.headerIconView}>
          <LogotipoIcon size={'28'} />
          <ChatIcon size={'28'} />
        </View>
        <View style={styles.headerTextViewStyle}>
          <Text style={styles.helloTextStyle}>Hello, John S.</Text>
          <Text style={styles.welcomeTextStyle}>Welcome to Moneylia</Text>
        </View>
      </View>
      <UserSummaryCard />
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
  },
  headerStyle: {
    width: '100%',
    height: 293,
    backgroundColor: '#7476ED',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  iconStyle: {
    width: 28,
    height: 28,
  },
  headerTextViewStyle: {
    paddingHorizontal: 16,
  },
  helloTextStyle: {
    color: 'white',
    fontSize: 32,
  },
  welcomeTextStyle: {
    color: 'white',
  },
})
