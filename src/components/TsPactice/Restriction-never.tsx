import React from 'react'

type Random = {
  value: number
}

type PositiveNumber = Random & {
  isPositive: boolean
  isNagative?: never
  isZero?: never
}

type NegetiveNumber = Random & {
  isPositive?: never
  isNagative: boolean
  isZero?: never
}
type Zero = Random & {
  isPositive?: never
  isNagative?: never
  isZero: Boolean
}
type RestrictionNeverProps = PositiveNumber | NegetiveNumber | Zero

export default function RestrictionNever({
  value,
  isPositive,
  isNagative,
  isZero,
}: RestrictionNeverProps) {
  return (
    <div>
      {isPositive && 'positive'}
      {isNagative && ' Negetive'}
      {isZero && 'Zero'}
    </div>
  )
}

export const RestristComp = () => {
  return (
    <div>
      <RestrictionNever isPositive value={10} />
    </div>
  )
}
