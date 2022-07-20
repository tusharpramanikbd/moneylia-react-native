import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import RootStackParamList from '../@types/RootStackPramList'
import PaymentDetailsHeader from '../components/PaymentDetailsHeader'
import PagoPAIcon from '../icons/PagoPAIcon'
import TransactionList from '../data/TransactionList'

type Props = NativeStackScreenProps<RootStackParamList, 'PaymentDetails'>

const PaymentDetailsScreen = ({ navigation, route }: Props) => {
  const id = route.params.id

  const transaction = TransactionList.find((item) => {
    if (item.id === id) {
      return item
    }
  })

  const BackButtonHandler = () => {
    navigation.goBack()
  }

  return (
    <View style={styles.rootViewStyle}>
      <PaymentDetailsHeader backButtonHandler={BackButtonHandler} />
      <View style={styles.rootViewStyle}>
        <View style={styles.titleViewStyle}>
          <Text style={styles.titleTextStyle}>Payment notice</Text>
          <View style={styles.imageViewStyle}>
            <PagoPAIcon size={'32'} color={'#BF7EE6'} />
          </View>
        </View>
        <View style={styles.dataViewStyle}>
          <Text style={styles.titleStyle}>Creditor</Text>
          {transaction?.creditor.map((item) => (
            <Text key={item.id} style={styles.valueStyle}>
              {item.text}
            </Text>
          ))}
        </View>
        <View style={styles.dataViewStyle}>
          <Text style={styles.titleStyle}>Causal</Text>
          <Text style={styles.valueStyle}>{transaction?.causal}</Text>
        </View>
        <View style={styles.dataViewStyle}>
          <Text style={styles.titleStyle}>Expiry Date</Text>
          <Text style={styles.valueStyle}>{transaction?.expiryDate}</Text>
        </View>
        <View style={styles.dataViewStyle}>
          <Text style={styles.titleStyle}>Creditor tax code</Text>
          <Text style={styles.valueStyle}>{transaction?.creditorTaxCode}</Text>
        </View>
        <View style={[styles.dataViewStyle, styles.nodivider]}>
          <Text style={styles.titleStyle}>Notice code</Text>
          <Text style={styles.valueStyle}>{transaction?.noticeCode}</Text>
        </View>
        <View style={styles.paymentViewStyle}>
          <View style={styles.paymentTopViewStyle}>
            <Text style={styles.totalDueTextStyle}>Total due</Text>
            <Text style={styles.amountTextStyle}>{transaction?.due}</Text>
          </View>
          <View style={styles.buttonStyle}>
            <Pressable android_ripple={{ color: '#dddddd' }}>
              <Text style={styles.buttonText}>Pay now</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}

export default PaymentDetailsScreen

const styles = StyleSheet.create({
  rootViewStyle: {
    flex: 1,
  },
  titleViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 16,
    borderBottomWidth: 2,
    borderColor: '#EAEAEC',
    paddingBottom: 24,
  },
  titleTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A3B7B',
  },
  imageViewStyle: {
    width: 40,
    height: 40,
    borderRadius: 4,
    backgroundColor: '#0066CC1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataViewStyle: {
    marginTop: 16,
    marginHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#EAEAEC',
    paddingBottom: 16,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#312E43',
    marginBottom: 4,
  },
  valueStyle: {
    fontSize: 16,
    color: '#6F6D7B',
  },
  paymentViewStyle: {
    width: '100%',
    height: 134,
    elevation: 2,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  paymentTopViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  totalDueTextStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#312E43',
  },
  amountTextStyle: {
    fontSize: 20,
    color: '#F83E5A',
  },
  buttonStyle: {
    backgroundColor: '#BF7EE6',
    borderRadius: 4,
    elevation: 4,
    marginHorizontal: 24,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    paddingVertical: 16,
    fontWeight: 'bold',
    fontSize: 18,
  },
  nodivider: {
    borderBottomWidth: 0,
  },
})
