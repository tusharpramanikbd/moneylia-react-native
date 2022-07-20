import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowLeftIcon } from '../icons/ArrowLeftIcon'
import PaymentDetailsHeaderType from '../@types/PaymentDetailsHeaderType'

const PaymentDetailsHeader: React.FC<PaymentDetailsHeaderType> = ({
  backButtonHandler,
}: PaymentDetailsHeaderType) => {
  return (
    <View style={styles.headerStyle}>
      <View style={styles.headerTextView}>
        <Pressable onPress={backButtonHandler}>
          <ArrowLeftIcon />
        </Pressable>
        <Text style={styles.textStyle}>Payment Details</Text>
      </View>
    </View>
  )
}

export default PaymentDetailsHeader

const styles = StyleSheet.create({
  headerStyle: {
    width: '100%',
    height: 100,
    backgroundColor: '#BF7EE6',
  },
  headerTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 60,
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
    marginLeft: 90,
  },
})
