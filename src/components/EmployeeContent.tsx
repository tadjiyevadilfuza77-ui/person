import { EmployeeCard} from "@/components/ui/EmployeeCard"
export const EmployeeContent = () => {
  return (
    <div className="container" >
        <div className="border my-10  grid grid-cols-2 gap-5 p-5 shadow-lg rounded-2xl">
        <EmployeeCard workName='Daturchi' age={12} fullName='Abdunnur Musaxonov' hobbi='AI Vidio Creator' image='images/abdunnur.png'/>
        <EmployeeCard workName='Daturchi' age={12} fullName='Usmon Nurmuhamedov' hobbi='-' image='images/usmon.png'/>
        <EmployeeCard workName='Daturchi' age={14} fullName='Biloliddin G`ayratov' hobbi='Football' image='images/biloliddin.png'/>
        <EmployeeCard workName='Daturchi' age={14} fullName='Ahmadjon Rahmadjonov' hobbi='-' image='images/ahmadjon.png'/>
        <EmployeeCard workName='Daturchi' age={13} fullName='Ibrohim Zikrullayev' hobbi='Football' image='images/ibrohim.png'/>
        <EmployeeCard workName='Daturchi' age={11} fullName='MuhammadImron Doniyorov' hobbi='Roblox game' image='images/imron.png'/>
        <EmployeeCard workName='Daturchi' age={12} fullName='Akbarshox Ilhomov' hobbi='Play game' image='images/akbarshox.png'/>
        </div>
    </div>
  )
}
