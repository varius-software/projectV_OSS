import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
    const Devmode = () => {
            if (process.env.NODE_ENV === "development") {
                return (
                    <p> development mode </p>
                )
            } else {
                return (
                    <p> development mode </p>
                )
            }
        }
  return (
    <div>
    </div>
  )
}
