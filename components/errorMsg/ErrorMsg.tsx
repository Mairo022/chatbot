export default function ErrorMsg(props: {error: string | undefined}) {
    const { error } = props

    return (<>
      {error && 
        <div className="error w-full px-8 py-4  mb-8 rounded-lg bg-danger-bg border-danger-border border-[1px] shadow">{error}</div>
      }</>
    )
}