'use client'
import PageError from "@/app/components/PageError/PageError";

const Error = ({ error, reset }: { error: Error, reset: () => void }) => {
  return (
    <PageError error={error} reset={reset} />
  )
}

export default Error;