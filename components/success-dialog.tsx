"use client"

import { CheckCircle2 } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"

interface SuccessDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
}

export function SuccessDialog({
  open,
  onOpenChange,
  title = "¡Mensaje enviado!",
  description = "Gracias por contactarnos. Te responderemos pronto.",
}: SuccessDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[400px]">
        <div className="py-8 text-center">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4 animate-in zoom-in duration-300" />
          <DialogTitle className="text-2xl mb-2">{title}</DialogTitle>
          <DialogDescription className="text-base">{description}</DialogDescription>
        </div>
      </DialogContent>
    </Dialog>
  )
}
