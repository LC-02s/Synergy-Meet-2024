interface ComputePartProgressParams {
  progress: number
  start: number
  end: number
}

export default function computePartProgress({ progress, start, end }: ComputePartProgressParams) {
  if (progress < start) {
    return 0
  }
  if (progress > end) {
    return 1
  }
  return (progress - start) / (end - start)
}
