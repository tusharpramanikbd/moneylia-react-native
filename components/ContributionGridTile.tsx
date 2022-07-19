import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContributionItemType from '../@types/ContributionItemType'

const ContributionGridTile: React.FC<ContributionItemType> = ({
  type,
  amount,
  Icon,
}: ContributionItemType) => {
  return (
    <View style={styles.gridItem}>
      <Icon size={32} />
      <Text style={styles.typeTextStyle}>{type}</Text>
      <Text
        style={
          amount !== 'Unavailable'
            ? styles.amountTextStyle
            : [styles.amountTextStyle, styles.unavailableAmountTextStyle]
        }
      >
        {amount}
      </Text>
    </View>
  )
}

export default ContributionGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 6,
    height: 124,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typeTextStyle: {
    fontSize: 12,
    color: '#83828E',
    marginTop: 4,
  },
  amountTextStyle: {
    fontSize: 16,
    color: '#3A3B7B',
    marginTop: 4,
  },
  unavailableAmountTextStyle: {
    color: '#F83E5A',
  },
})
