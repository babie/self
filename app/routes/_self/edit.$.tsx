import { useParams } from 'remix'
import type { LoaderFunction, ActionFunction } from 'remix'

export const loader: LoaderFunction = async ({ params }) => {
  console.log(params['*'])
  return {
    nothing: 'none',
  }
}

export const action: ActionFunction = async ({ params }) => {
  console.log(params['*'])
}

export default function PostRoute() {
  const params = useParams()
  console.log(params['*'])
  return (
    <>
      <h1>/_self/edit.$.tsx</h1>
      {params['*']}
    </>
  )
}
