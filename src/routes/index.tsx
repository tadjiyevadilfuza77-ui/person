import { createFileRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'
import { EmployeeContent } from '@/components/EmployeeContent'
export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
     <Header />
     <EmployeeContent/>
    </>
  )
}
