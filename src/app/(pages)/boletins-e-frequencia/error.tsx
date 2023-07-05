'use client'
const Error = ({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) => {
  return (
    <div style={{ marginTop: '150px' }}>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}

export default Error;