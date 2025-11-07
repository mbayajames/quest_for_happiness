import * as React from "react"

type ToastProps = {
  variant?: "default" | "destructive"
  className?: string
  children?: React.ReactNode
}

type ToastActionElement = React.ReactElement

export type { ToastProps, ToastActionElement }