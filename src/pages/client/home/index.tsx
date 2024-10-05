import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="flex flex-col items-center mx-auto ">
      <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
        Sidebar example built on top of shadcn/ui
      </h1>
      <span className="max-w-[750px] text-center text-lg font-light text-foreground">
        A stunning and functional retractable sidebar for Next.js using shadcn/ui complete with desktop and mobile
        responsiveness.
      </span>
      <div className="flex items-center justify-center w-full py-4 space-x-4 md:pb-6">
        <Button variant="default" asChild>
          <Link to="/dashboard">
            Demo
            <ArrowRightIcon className="ml-2" />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link to="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">
            Learn shadcn/ui
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default Home
