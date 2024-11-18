import React from 'react'
import Dialog from './Dialog'
import Button from './Button'

type DialogProps = React.ComponentPropsWithoutRef<typeof Dialog>

interface AlertDialogProps {
  open: DialogProps['open']
  onClose: DialogProps['onClose']
}

export default function AlertDialog({
  open,
  onClose,
  children,
}: React.PropsWithChildren<AlertDialogProps>) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Dialog.Header>
        <Dialog.Title />
      </Dialog.Header>
      <Dialog.Content>
        <p>{children}</p>
      </Dialog.Content>
      <Dialog.Footer>
        <Button variant="light" onClick={close}>
          닫기
        </Button>
      </Dialog.Footer>
    </Dialog>
  )
}
