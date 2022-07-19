import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserCircleIcon from '../icons/UserCircleIcon'

const UserSummaryCard = () => {
  return (
    <View style={styles.summaryViewStyle}>
      <View style={styles.summaryTopStyle}>
        <UserCircleIcon size={'28'} />
        <Text style={styles.summaryTitleText}>User summary</Text>
      </View>
      <View style={styles.summaryMiddleStyle}>
        <View>
          <Text style={styles.summaryTitleStyle}>Status</Text>
          <Text style={styles.summaryMiddleValue}>Subscribed</Text>
        </View>
        <View style={styles.summaryRightSection}>
          <Text style={styles.summaryTitleStyle}>Birthday</Text>
          <Text style={styles.summaryMiddleValue}>26/01/1994</Text>
        </View>
      </View>
      <View style={styles.summaryMiddleStyle}>
        <View>
          <Text style={styles.summaryTitleStyle}>City</Text>
          <Text style={styles.summaryBottomValue}>Barcelona</Text>
        </View>
        <View style={styles.summaryCountrySection}>
          <View>
            <Text style={styles.summaryTitleStyle}>Country</Text>
            <Text style={styles.summaryBottomValue}>ES</Text>
          </View>
          <View style={styles.summaryNumberSection}>
            <Text style={styles.summaryTitleStyle}>Number</Text>
            <Text style={styles.summaryBottomValue}>10</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default UserSummaryCard

const styles = StyleSheet.create({
  summaryViewStyle: {
    width: '90%',
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 12,
    marginTop: -80,
    padding: 24,
  },
  summaryTopStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  summaryTitleText: {
    color: '#3A3B7B',
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  summaryMiddleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  summaryRightSection: {
    marginLeft: 80,
  },
  summaryCountrySection: {
    flexDirection: 'row',
    marginLeft: 88,
  },
  summaryNumberSection: {
    marginLeft: 32,
  },
  summaryTitleStyle: {
    fontSize: 12,
    color: '#6F6D7B',
  },
  summaryMiddleValue: {
    fontSize: 16,
    color: '#312E43',
  },
  summaryBottomValue: {
    fontSize: 16,
    color: '#3A3B7B',
  },
})
