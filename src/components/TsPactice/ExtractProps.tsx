import CustomeButton from './CustomeButton'
import CustomeInput from './CustomeInput'

// this component about extracting the types from other components if the types are not exported in that component
const ExtractProps = (props: React.ComponentProps<typeof CustomeButton>) => {
  let foo: string
  foo = 'xyx'
  const x = foo === null || foo === undefined ? undefined : 'return value'
  ;<>"Hello other component types"</>
}
