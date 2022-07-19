type CreditorType = {
  id: string
  text: string
}

type TransactionItemType = {
  id?: string
  creditor: CreditorType[]
  causal: string
  expiryDate: string
  creditorTaxCode: string
  noticeCode: string
  due: string
}

export default TransactionItemType
