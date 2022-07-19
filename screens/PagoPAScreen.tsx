import {
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import HeaderTopComponent from '../components/shared/HeaderTopComponent'
import PagoPAIcon from '../icons/PagoPAIcon'
import TransactionList from '../data/TransactionList'
import TransactionItemType from '../@types/TransactionItemType'
import TransactionItem from '../components/TransactionItem'

const renderTransactionItem = (
  itemData: ListRenderItemInfo<TransactionItemType>
) => {
  return <TransactionItem {...itemData.item} />
}

const PagoPAScreen = () => {
  return (
    <View style={styles.rootView}>
      <HeaderTopComponent bgColor='#BF7EE6' />
      <View style={styles.headerBottomStyle}>
        <Text style={styles.headerTextStyle}>Tax Payments</Text>
        <PagoPAIcon size={50} color={'#FFFFFF'} />
      </View>
      <View style={styles.topTextStyle}>
        <Text style={styles.topTextTitle}>Movements to pay</Text>
        <Text style={styles.bottomTextTitle}>
          View pending transactions for the past two years and proceed to
          payment.
        </Text>
      </View>
      <View style={styles.transactionViewListStyle}>
        <FlatList
          data={TransactionList}
          keyExtractor={(item) => item.id}
          renderItem={renderTransactionItem}
        />
      </View>
    </View>
  )
}

export default PagoPAScreen

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  headerBottomStyle: {
    width: '100%',
    height: 82,
    backgroundColor: '#BF7EE6',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextStyle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  topTextStyle: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  topTextTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A3B7B',
    marginBottom: 8,
  },
  bottomTextTitle: {
    color: '#6F6D7B',
  },
  transactionViewListStyle: {
    flex: 1,
    width: '100%',
    marginTop: 16,
  },
})
