import React, { useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import classNames from 'classnames'
import { RoutedModal } from '@/components/RoutedModal'

const Home: NextPage = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState<boolean>(false)
  const [isSecondModalOpen, setIsSecondModalOpen] = useState<boolean>(false)

  const handleFirstModalOpen = () => {
    setIsFirstModalOpen(true)
  }

  const handleSecondModalOpen = () => {
    setIsSecondModalOpen(true)
  }

  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full md:max-w-md mx-auto my-6 md:my-12 px-4 md:px-0 text-gray-600 body-font">
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="leading-relaxed">
            Curabitur erat nibh, ultrices vitae tellus non, aliquet pretium
            odio. Praesent auctor dignissim odio.
          </p>

          <button
            className="flex items-center justify-center h-12 mt-6 px-4 bg-purple-500 hover:bg-purple-600 outline-none rounded focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 text-white text-base font-medium"
            onClick={handleFirstModalOpen}
          >
            Otwórz modal 1
          </button>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="leading-relaxed">
            Curabitur erat nibh, ultrices vitae tellus non, aliquet pretium
            odio. Praesent auctor dignissim odio.
          </p>
          <button
            className="flex items-center justify-center h-12 mt-6 px-4 bg-purple-500 hover:bg-purple-600 outline-none rounded focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 text-white text-base font-medium"
            onClick={handleSecondModalOpen}
          >
            Otwórz modal 2
          </button>
        </div>
      </div>

      <RoutedModal
        hash="pierwszy-modal"
        isOpen={isFirstModalOpen}
        setIsOpen={setIsFirstModalOpen}
        onLoadDetection
      >
        {(isOpen, close) => (
          <div
            className={classNames(
              'fixed top-0 left-0 h-full w-full flex items-center justify-center',
              { invisible: !isOpen }
            )}
          >
            <div className="fixed top-0 left-0 h-full w-full bg-black opacity-80"></div>
            <div
              className="z-10 w-3/4 max-w-3xl -mt-40 p-4 bg-white rounded-lg"
              id="dialog"
            >
              <h2 className="text-xl font-bold">Modal 1</h2>
              <p className="mt-4 text-base">
                Morbi maximus ornare mollis. Donec lobortis nisi non finibus
                tempus. Donec non congue enim. Sed vel eros id tellus efficitur
                maximus ac ac lorem.
              </p>
              <button
                className="flex items-center justify-center h-12 ml-auto mt-6 px-4 bg-purple-500 hover:bg-purple-600 outline-none rounded focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 text-white text-base font-medium"
                id="dialog-close"
                onClick={close}
              >
                Zamknij
              </button>
            </div>
          </div>
        )}
      </RoutedModal>

      <RoutedModal
        hash="drugi-modal"
        isOpen={isSecondModalOpen}
        setIsOpen={setIsSecondModalOpen}
      >
        {(isOpen, close) => (
          <div
            className={classNames(
              'fixed top-0 left-0 h-full w-full flex items-center justify-center',
              { invisible: !isOpen }
            )}
          >
            <div className="fixed top-0 left-0 h-full w-full bg-black opacity-80"></div>
            <div
              className="z-10 w-3/4 max-w-3xl -mt-40 p-4 bg-white rounded-lg"
              id="dialog"
            >
              <h2 className="text-xl font-bold">Modal 2</h2>
              <p className="mt-4 text-base">
                Morbi maximus ornare mollis. Donec lobortis nisi non finibus
                tempus. Donec non congue enim. Sed vel eros id tellus efficitur
                maximus ac ac lorem.
              </p>
              <button
                className="flex items-center justify-center h-12 ml-auto mt-6 px-4 bg-purple-500 hover:bg-purple-600 outline-none rounded focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 text-white text-base font-medium"
                id="dialog-close"
                onClick={close}
              >
                Zamknij
              </button>
            </div>
          </div>
        )}
      </RoutedModal>
    </div>
  )
}

export default Home
