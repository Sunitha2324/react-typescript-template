
type Vpos= 'left' | 'right'
type Hpos ='top-left'

type LiteralProps={

    //Template Literal with exclude feature
    position: Exclude<`${Vpos} - ${Hpos}`, 'center' > | 'center'
}
const Literal =({position}:LiteralProps)=>(
   <> "Display Position"{position} </>

)

export default Literal;