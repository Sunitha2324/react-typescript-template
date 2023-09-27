type Vpos = 'left' | 'right'
type Hpos = 'top-left'

type LiteralExcludeProps = {
  //Template Literal with exclude feature
  position: Exclude<`${Vpos} - ${Hpos}`, 'center'> | 'center'
}
const LiteralExclude = ({ position }: LiteralExcludeProps) => (
  <> "Display Position"{position} </>
)

export default LiteralExclude
