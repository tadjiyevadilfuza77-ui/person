import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


  import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from 
  '@/components/ui/card'
   interface Props {
    workName:string,
    fullName:string,
    image:string,
    hobbi:string,
    age:number,
   }
 

export const EmployeeCard ({
  workName, 
  fullName,
  image,
  hobbi,
  age,
}: Props) =>{
  return (
    <Card>
    <CardHeader>
      <CardTitle>{workName}</CardTitle>
      <CardDescription>{fullName}</CardDescription>
    </CardHeader>
    <CardContent className="flex itemes-center gap-5">
    <Avatar className="size-30">
    <AvatarImage 
    className="size-full"
     src={image} />
    <AvatarFallback>CN</AvatarFallback>
  </Avatar>
  
  <div>
    <p>Hobbi:{hobbi}</p>
  </div>
    </CardContent> 
  </Card>
  )
}
