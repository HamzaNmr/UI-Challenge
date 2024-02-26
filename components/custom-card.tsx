 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CustomCardProps } from "@/types"


export const CustomCard = ({ 
    title,
    description,
    content,
    footer,
    className,
}: CustomCardProps) => {
  return (
    <Card className={cn("w-[380px]", className)}>
      {title &&
        <CardHeader className="p-0">
          {title && 
          <CardTitle>{title}</CardTitle>
          }
          {description && 
          <CardDescription>{description}</CardDescription>
          }
        </CardHeader>
      }
      <CardContent className="p-0">
        {content}
      </CardContent>
      <CardFooter className="p-0">
        {footer}
      </CardFooter>
    </Card>
  )
}
