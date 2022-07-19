import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TransactionItemType from '../@types/TransactionItemType'
import PagoPAIcon from '../icons/PagoPAIcon'
import { ArrowRightIcon } from '../icons/ArrowRightIcon'

const TransactionItem: React.FC<TransactionItemType> = ({
  creditor,
  causal,
  expiryDate,
  creditorTaxCode,
  noticeCode,
  due,
}: TransactionItemType) => {
  return (
    <View style={styles.rootViewStyle}>
      <View style={styles.imageViewStyle}>
        <PagoPAIcon size={'48'} color={'#BF7EE6'} />
      </View>
      <View style={styles.textViewStyle}>
        <View style={styles.headingTextViewStyle}>
          <Text style={styles.headingTextStyle}>
            {causal.length < 50 ? causal : causal.slice(0, 50).concat('...')}
          </Text>
        </View>
        <View style={styles.bottomTextViewStyle}>
          <Text style={styles.dateStyle}>{expiryDate}</Text>
          <Text style={styles.amountStyle}>{due}</Text>
        </View>
      </View>
      <View style={styles.arrowIconView}>
        <ArrowRightIcon />
      </View>
    </View>
  )
}

export default TransactionItem

const styles = StyleSheet.create({
  rootViewStyle: {
    flex: 1,
    height: 80,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    elevation: 4,
    marginBottom: 12,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  imageViewStyle: {
    width: 56,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#0066CC1A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTextViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headingTextViewStyle: {
    width: 230,
    marginBottom: 4,
  },
  headingTextStyle: {
    fontSize: 12.5,
    color: '#312E43',
    fontWeight: 'bold',
  },
  textViewStyle: {
    marginLeft: 12,
  },
  arrowIconView: {
    marginLeft: 16,
  },
  dateStyle: {
    color: '#A5A5AA',
  },
  amountStyle: {
    color: '#F83E5A',
  },
})
