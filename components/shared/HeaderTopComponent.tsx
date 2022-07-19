import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LogotipoIcon from '../../icons/LogotipoIcon'
import ChatIcon from '../../icons/ChatIcon'

const HeaderTopComponent: React.FC<HeaderTopComponentType> = ({
  bgColor,
}: HeaderTopComponentType) => {
  return (
    <View style={[styles.headerStyle, { backgroundColor: bgColor }]}>
      <View style={styles.headerIconView}>
        <LogotipoIcon size={'28'} />
        <ChatIcon size={'28'} />
      </View>
    </View>
  )
}

export default HeaderTopComponent

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    height: 100,
  },
  headerIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 16,
    marginBottom: 30,
  },
})
