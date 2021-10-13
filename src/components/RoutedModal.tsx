import { ReactNode, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { usePrevious } from '@/hooks/usePrevious'

type Props = {
  hash: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  onLoadDetection?: boolean
  children: (isOpen: boolean, close: () => void) => ReactNode
}

export const RoutedModal = ({
  hash,
  isOpen,
  setIsOpen,
  onLoadDetection = false,
  children,
}: Props): JSX.Element => {
  const router = useRouter()
  const prevIsOpen = usePrevious<boolean>(isOpen)

  useEffect(() => {
    const onLoad = () => {
      if (window.location.hash === `#${hash}`) {
        router.replace(router.pathname)

        if (onLoadDetection) {
          router.push(`${router.pathname}#${hash}`)
          setIsOpen(true)
        }
      }
    }

    window.addEventListener('load', onLoad)

    return () => {
      window.removeEventListener('load', onLoad)
    }
  }, [router, hash, setIsOpen, onLoadDetection])

  useEffect(() => {
    if (isOpen && !prevIsOpen) {
      router.push(`${router.pathname}#${hash}`)
    }
  }, [router, hash, isOpen, prevIsOpen])

  const close = useCallback(() => {
    setIsOpen(false)
    if (window.location.hash === `#${hash}`) {
      router.back()
    }
  }, [router, hash, setIsOpen])

  useEffect(() => {
    const handleHashChangeComplete = (url: string) => {
      const isModalHashInUrl = url.search(`#${hash}`) === -1 ? false : true

      if (!isModalHashInUrl && isOpen) {
        close()
      }
      if (isModalHashInUrl && !isOpen) {
        setIsOpen(true)
      }
    }

    router.events.on('hashChangeComplete', handleHashChangeComplete)

    return () => {
      router.events.off('hashChangeComplete', handleHashChangeComplete)
    }
  }, [router, hash, isOpen, setIsOpen, close])

  return <>{children(isOpen, close)}</>
}
