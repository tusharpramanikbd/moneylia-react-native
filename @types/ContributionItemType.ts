import CustomIconType from './CustomIconType'

type ContributionItemType = {
  id?: string
  type: string
  amount: string
  Icon: React.FC<CustomIconType>
}

export default ContributionItemType
