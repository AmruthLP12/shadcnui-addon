import { BackgroundOverlayCard } from './BackgroundOverlayCard'

const GalleryCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((_, index) => (
          <BackgroundOverlayCard
            key={index}
            title={`Card ${index + 1}`}
            description="Hover to see the effect."
            defaultBackground="https://tinyurl.com/47n2srhd"
            hoverBackground="https://tinyurl.com/3r62nt4v"
            className="max-w-sm cursor-pointer"
          />
        ))}
      </div>
  )
}

export default GalleryCard