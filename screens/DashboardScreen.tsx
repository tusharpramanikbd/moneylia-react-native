import {
  FlatList,
  ListRenderItem,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import React from 'react'
import LogotipoIcon from '../icons/LogotipoIcon'
import ChatIcon from '../icons/ChatIcon'
import UserSummaryCard from '../components/UserSummaryCard'
import ContributionDataList from '../data/ContributionDataList'
import ContributionItemType from '../@types/ContributionItemType'
import ContributionGridTile from '../components/ContributionGridTile'

const renderContributionItem = (
  itemData: ListRenderItemInfo<ContributionItemType>
) => {
  return (
    <ContributionGridTile
      type={itemData.item.type}
      amount={itemData.item.amount}
      Icon={itemData.item.Icon}
    />
  )
}

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
      <View style={styles.contributionViewStyle}>
        <Text style={styles.contributionTextStyle}>Contributions of 2022</Text>
      </View>
      <View style={styles.contributionsViewStyle}>
        <FlatList
          data={ContributionDataList}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={renderContributionItem}
        />
      </View>
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
  contributionViewStyle: {
    marginTop: 24,
    width: '100%',
    paddingLeft: 20,
  },
  contributionTextStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3A3B7B',
  },
  contributionsViewStyle: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 12,
    marginTop: 16,
  },
})
