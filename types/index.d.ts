import React from "react"
import { IconType } from "react-icons"
import { Card } from "@/components/ui/card"

interface NavProps {
    links: {
      title: string
      label?: string
      href: string
      icon: IconType
      isActive: boolean
    }[]
}

interface UserInfoProps {
    email: string
    fullName: string
    picture?: string
}

interface ActiveUsersProps {
    users: UserInfoProps[]
    usersLength?: number | 4
}

interface CountryProps {
  country: string
  airport: string
  code: string
  currency: string
  language: string
}

interface PopOverListProps {
  countries: CountryProps[]
  placeholder: string
  title: string
}

interface SelectFieldProps {
  children?: React.ReactNode
  control: any
  name: string
  selectType?: "travelers" |  "flightClass" | "ticketClass" |"default"
  placeholder: string
  className?: string
}

interface LocationComboBoxFieldProps {
  form: any
  name: string
  placeholder: string
  className?: string,
}

type CardProps = React.ComponentProps<typeof Card>
interface CustomCardProps extends CardProps{
  title?: string
  description?: string
  content?: React.ReactNode
  footer?: React.ReactNode
}