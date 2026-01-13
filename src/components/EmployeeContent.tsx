import { EmployeeCard} from "@/components/ui/EmployeeCard"
export const EmployeeContent = () => {
  return (
    <div className="container" >
        <div className="border my-10  grid grid-cols-2 gap-5 p-5 shadow-lg rounded-2xl">
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        </div>
    </div>
  )
}
