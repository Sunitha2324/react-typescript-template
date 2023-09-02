// this component to specify the polymorphism

type TextOwnProps<E extends React.ElementType> = {
  size: 'sm' | 'lg'
  color: 'primary' | 'secondary'
  children: React.ReactNode
  as?: E
}
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

export const Text = <E extends React.ElementType = 'div'>({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || 'div'
  return (
    <Component className={`class-with-${size}-${color}`}> {children}</Component>
  )
}
// t’s a new type where you can define some properties to be excluded from the original type.

type Person = { name: string; age: number; location: string }
type QuantumPerson = Omit<Person, 'location'> // Same as next line
// QuantumPerson = { name: string; age: number; };
