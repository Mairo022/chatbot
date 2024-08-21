export default function Loading(props: {isLoading: boolean}) {
    const { isLoading } = props

    return (<>
      {isLoading && 
        <div className="loading flex w-full px-8 py-4 mb-8 gap-1">
          <div className="bg-primary-text rounded-full w-3 h-3 animate-loading_dots"></div>
          <div style={{'animationDelay': '200ms'}} className="bg-primary-text rounded-full w-3 h-3 animate-loading_dots delay-300"></div>
          <div style={{'animationDelay': '600ms'}} className="bg-primary-text rounded-full w-3 h-3 animate-loading_dots animation-delay-600"></div>
        </div>
      }</>
    )
}