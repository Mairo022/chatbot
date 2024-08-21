interface EditFormProps {
  isLoading: boolean
  resetEditIndex: () => void
  message: string
  handleEditSubmit: (e: FormEvent<HTMLFormElement>, editedMessage: string) => void
}