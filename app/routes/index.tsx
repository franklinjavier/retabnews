import { Heading } from '~/components/heading'

export default function Index() {
  return (
    <main className="m-5">
      <Heading>Remix Starter Template</Heading>
      <ul className="m-4 list-inside list-disc">
        {['Tailwind', 'Jest', 'Commitzen', 'Husky', 'Eslint', 'Prettier', 'Typescript'].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </main>
  )
}
