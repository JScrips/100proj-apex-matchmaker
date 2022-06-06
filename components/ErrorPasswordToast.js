import { motion, AnimatePresence } from 'framer-motion'
const ErrorPasswordToast = ({ isVisible, setShowPasswordError }) => {
  const successVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        type: 'spring',
        ease: 'easeInOut',
      },
    },
    hidden: {
      x: '-100vw',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  }
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={successVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="sticky left-48 top-full flex w-4/12 items-center
         justify-between rounded-xl border border-red-400 bg-red-100 py-1"
        >
          <div className="flex items-center">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="70.3333333"
              viewBox="0 0 300 478"
            >
              <path d="M222.5 10c-8.5 2.1-15.6 7.1-21.8 15.3-2.3 3.1-4.6 5.1-5.6 5-12.4-1.9-19.7-2.1-24.5-.9-3.3.9-7.3 1.1-11.1.7-6.5-.7-18.5.2-27.8 1.9-4.8.9-6 .9-7.3-.4-.8-.9-1.3-2-1-2.5.7-1-8.3-9.7-13.9-13.4-2.2-1.4-6.9-3.3-10.5-4.1-5.7-1.3-7.7-1.4-15.8-.1-7.7 1.1-10.6 2.1-16.1 5.4-7.9 4.7-18 15.1-21.7 22.3-2.8 5.6-5 21.3-3.9 28.2C42.9 76.6 50 87.1 58.7 93l2.3 1.5-2.5 8.5c-3.8 13.2-3.3 30.2 1.2 40.7 1 2.4 1.8 3 3.3 2.6 1.2-.3 2 0 2 .7 0 .6-.5 1-1.2.8-1.9-.7-5.5 3.1-7.2 7.4-2 4.8-2.1 13.8-.2 18.1 2.2 5.3 12.1 15.3 17.7 17.8 4.4 2 4.9 2.6 4.9 5.6 0 2.6 1.1 4.4 5.8 9.2 8.7 8.8 26.1 17 47.2 22.1 1.9.5 4 1.7 4.7 2.7.7 1 1.9 2.5 2.8 3.4 1.4 1.5 1.4 2.1-.6 6.5-1.1 2.7-2.8 7.1-3.6 9.8l-1.4 4.8-6.5-.4c-4.6-.3-6.4 0-6.4.8 0 .7-1.5 2.5-3.2 4-1.8 1.5-3.2 3.4-3 4.3.2 1.2-.1 1.1-1.3-.4-1.5-1.9-1.4-2.2.9-4.2 1.4-1.2 3.4-2.6 4.3-3.2 1-.5 1.5-1.2 1.1-1.6-1-1-6.6 2.3-8.4 5-1.1 1.7-2.6 2.5-4.4 2.5-1.5 0-3.3.7-4 1.5-.7.9-1.5 1.3-1.7 1.1-.3-.3 2.1-3.7 5.3-7.6 5.3-6.6 5.9-7.1 8.8-6.4 1.7.3 4.4 1.2 6.1 2 3.6 1.8 3.5 1.9 9.6-10 2.3-4.4 4.6-8.3 5.1-8.4 1.4-.6.9-2.1-1.1-3.1-2.4-1.3-6.5.6-14.3 6.7-10.8 8.4-27 29.7-29 38.1l-1 4.6-11.7.3c-19.5.6-30.8 1.8-34 3.9-3.3 2-16.9 15-23.7 22.6-3.3 3.7-4.4 5.7-4.4 8.2 0 2.8.4 3.3 3 3.9 2.9.5 25 0 31.7-.9l3.3-.4v4.8c0 3.1.9 6.5 2.5 9.7 1.4 2.7 2.5 4.9 2.5 5 0 0-9-.1-20-.2-11-.2-20 0-20 .5 0 1.2 11.6 2.1 28.3 2.1H63v4.7c0 2.7.4 5.4.8 6.1 1.1 1.6 6.7 3.2 11.2 3.1h3.5l-4-1.9c-2.2-1-5.2-2.1-6.7-2.5-2.2-.4-2.9-1.3-3.4-4.1-.3-1.9-.2-4 .3-4.5s.9-.1 1 1.2c.3 2.9 1.7 4.4 7.8 7.8 4.7 2.6 6 2.9 10.4 2.4 3.4-.4 5.1-.2 5.1.5s-1.1.9-3 .5c-1.9-.3-3-.1-3 .6 0 1.2 22.7 1.5 29.5.3 3.9-.7 4-.8 4.3-5.7.5-6.3 1.2-7.1 6-6.7l3.8.4v6.6c-.1 5.7.2 6.7 1.8 7 1.7.4 1.8-.1 1.1-6.7l-.7-7.1h37.1c36.1 0 37 0 36.3 1.9-.9 2.4-11.7 12-14.6 13-2.5.9-84.9.6-109.3-.4l-17.3-.7v-7.5c0-4.7-.4-7.2-1-6.8-.5.3-1 3.6-1 7.3v6.7l-11.2-.3c-8-.2-10.9 0-9.8.7.8.6 6.1 1.1 11.7 1.1 6.6 0 10.4.4 10.9 1.2.5.8 0 .9-1.4.6-1.2-.4-2.2-.2-2.2.3 0 1.2 3.4 1.1 4.6-.1.7-.7 7.8-.6 21.5.1 11.2.6 26.3.9 33.4.7 7.2-.2 22-.1 33 .1 16 .3 19 .5 15 1.3-2.7.5-8.9.6-13.7.3l-8.8-.6.7 3.3c.7 4 1.8 5.5 5.5 7.4 4 2.1 3.5 3.2-1.4 2.7-2.4-.3-6.9 0-10 .5-6.1.9-7.1.3-4.3-2.8.8-.9 1.6-2.7 1.7-4.1.3-2.3 0-2.4-5.3-2.7l-5.6-.3-2.4 4.8c-2.2 4.1-3 4.9-6 5.2-4.2.4-34.3-1.9-35.6-2.8-.5-.3-2-2.1-3.2-4-2.9-4-7.4-6.1-11.9-5.4-3.7.6-4.3 3.1-1.2 5.1 3.2 2 2.4 3.4-1.4 2.6-1.9-.3-5-.6-7-.7l-3.6-.1 3.3-2.8c1.7-1.5 2.6-2.7 1.9-2.8-.8 0-1.2-1-1-2.6l.3-2.5-14.1-.2c-7.8-.1-14-.5-13.7-1 .2-.4 2.3-.7 4.6-.7l4.2-.1-5.3-1.8c-3.1-1.1-6.9-3.4-9.2-5.7l-3.9-3.9.5-7c.6-8.2-.6-16.7-2.4-17.3-.9-.3-1.2 2-1.2 9.5.1 13.4 1 17 5.9 21.5l4 3.8-4.8 7.7c-6.2 10.1-10.1 17.8-10.1 20 0 1.2 2.1 2.7 6.7 4.8 3.6 1.6 7.3 3 8 3.1.8.1 6-4.2 11.6-9.6l10.2-9.8 6.8.5c5.7.5 7 .9 8 2.8.7 1.2 4 5.2 7.3 8.9l6.1 6.6h52.2l-1.1 3.1c-1.5 4.4-.2 13.4 2.7 18.3 2.9 4.9 11 13.1 14.5 14.5 1.4.6 3.2 1.5 4 2.1.8.5 2.7 1.4 4.2 1.9 3.2 1.2 8.8 9 9.9 14.1.7 3 .4 4.8-1.1 8.2-2.9 6.5-2.6 8.6 1.5 10.4 7 2.9 20.7 1.1 27.6-3.7 2.4-1.7 2.6-1.7 3.6 0 1.8 2.8 9 4.1 22.8 4.1 12 0 18-.9 28.7-4.2 4.6-1.4 8.9-7.8 8.1-12-.3-1.8.5-4.7 2.3-8.5 3.5-7 3.6-7.1 4.1-5.6.3.7 1.7 1.3 3.2 1.3 2.3 0 3.1-.8 4.9-4.7 3.4-7.8 4.3-12.5 3.3-17.7-.7-4.1-3.1-7.5-5.3-7.6-.4 0 .2-2.1 1.4-4.6 1.6-3.8 1.8-4.8.7-5.5-2.2-1.4-2.6-1.1-4.6 3.6-1 2.5-2.3 4.5-2.9 4.5-.6 0-3.5-.7-6.4-1.6-6.1-1.8-14.7-1.4-16 .7-1.4 2.1-4 14.8-4 19 0 5.3 4.2 8.4 13.5 9.9 3.8.6 7.1 1.2 7.2 1.4.3.2-4.3 9.2-5.4 10.5-.1.2-1.1-.7-2.2-2-2.3-2.9-8.8-6.5-9.8-5.5-.4.4-.1 1.1.7 1.5 9.1 5.1 14.7 11.9 12 14.4-.9.8-1.1.8-.7.1.8-1.4-2-3.9-5.3-4.8-6.1-1.7-22.3-3.5-30.7-3.6H203v-7.7c0-4.2.5-10.2 1.2-13.3 1-4.9.9-6.7-1-14.1-2.3-8.7-2.6-13.9-1.3-17.4.5-1.1.3-2.8-.3-3.8-.9-1.5-.5-2.3 2.7-4.9 2-1.6 3.7-3.5 3.7-4 0-1.2-4.9 1.7-6.8 4-1.1 1.5-1.7 1.4-6.5-1-4.6-2.2-5.4-3.1-7-7.6-1-2.7-2.5-5.8-3.2-6.8-1.3-1.7-1.4-1.5-1.2 2.2.1 2.3.6 3.9 1.1 3.6.5-.3.6.2.3 1.2-.5 1.1-.3 1.5.5 1s.9-.2.5 1c-.4.9-.3 1.5.2 1.2 1-.6 2.5 2.4 1.6 3.2-.3.3-.5-.1-.5-.8 0-.7-.3-1.1-.6-.8-.3.3.4 2.5 1.6 4.8 3.3 6.5.6 10.5-5 7.1-5.1-3.2-32.4-26-31.9-26.6.6-.5 26.2 1.2 27.9 1.9.9.4 4.2-1.3 8.2-4.3 5.2-3.8 7.8-5 12-5.5 11.2-1.5 33-9.3 42.3-15.1 7.1-4.5 13.4-11.9 14.1-16.7l.7-3.8 3.3 3.7c2.8 3.1 8.4 12.2 8.4 13.6 0 .2-3.8.1-8.3-.1-8.1-.4-8.4-.4-10.5 2.3-1.1 1.4-2.4 4.7-2.7 7.3-.4 2.6-1.3 7.5-2.1 11-2.1 9.2-3 25.8-1.5 27.5.6.8.9 2.1.5 3-.7 2 1.3 3.2 3 1.8 1-.9 2.5-.8 5.7.4 2.4.8 7.7 2 11.7 2.5 8.5 1.1 13.6-.3 15.1-4.2 2-5.3 4.3-25.1 3.9-33.6-.4-9.8-2.4-14-7.6-16.3-1.9-.8-3.6-2.9-5.2-6.3-1.3-2.8-5.2-8.1-8.7-11.7-3.4-3.6-6.3-6.9-6.3-7.3 0-.8-10.8-11.1-14-13.3-.9-.7-2.5-3.2-3.4-5.7-1.4-3.6-1.5-5.2-.7-8.3.7-2.4.9-10.8.6-22.3-.6-23.2-.4-21.4-1.7-28.5-.8-4.6-1.7-6.5-3.9-8.3-1.6-1.3-2.9-2.9-2.9-3.7 0-.7-.6-1.6-1.2-1.8-.9-.4-.8-.6.2-.6.8-.1 2.9 1.6 4.6 3.6 2.2 2.6 3.6 3.5 4.8 3 1.7-.7 1.7-1.2-.2-6.7-.3-.8.8-.3 2.5 1.2 1.6 1.6 3.7 2.8 4.7 2.8 1.6 0 1.8-.6 1.3-4.4l-.6-4.4 4 .5c5.3.8 6.5-1 3.8-5.5-1.9-3.3-1.9-3.3.1-2.7 2.9.9 6-.3 6-2.4 0-1-.9-3-2.1-4.5-2.7-3.5-1.8-6.6 2.1-6.6 4 0 8.9-4.4 11.5-10.5 1.3-2.8 3-5.7 4-6.5 2.3-1.9 5-7.5 7-14.5 1.5-5.1 1.6-6.8.5-12.8-1.3-7.4-5.1-13.2-9.4-14.3-2-.5-2.2-1-1.8-6.3.7-9.1-1.5-25.9-3.9-29.9l-2-3.5 2.2-1.5c9.8-6.9 15.2-15 17.6-26.6 1.7-8.1 1.6-8.9-.1-17.1-2.6-12.6-7.4-21.4-17.4-31.8-6-6.3-19.9-10.8-33.2-10.6-4.7.1-9.8.4-11.5.9zm32 5.4c2.8 1.2 6.5 3.6 8.3 5.1 5 4.2 13.2 16.3 13.2 19.5 0 6.8-11.4 16.3-22 18.3-7.1 1.4-8.1 3.3-1.2 2.3 9.9-1.3 22.2-9.9 24-16.8.8-3.3.9-3.3 2.1-1 .7 1.3 1.6 4.8 2.1 7.8.8 4.9.6 6.1-1.6 10.8-4.2 9-9.8 12.6-19.4 12.6h-4.7l-4.3-7.3c-5.9-9.9-12.4-17.1-19.5-22-3.3-2.2-6.2-4.4-6.5-4.7-.9-1.2-12.2-5.8-18.4-7.6l-5.8-1.6 5.8-6c6.9-6.9 17.1-12.4 25.4-13.6 6.4-.9 14.7.6 22.5 4.2zm-155.3-1c6.1 2.6 15.4 10.2 18.1 14.9 1.5 2.5 2.7 4.9 2.6 5.4 0 .4-2.8 2.1-6.2 3.8-3.3 1.6-9 5.1-12.6 7.7-7.1 5.2-18.5 17.5-20.6 22.3-1.9 4.3-2 4.3-7.8 3.3-6-1.1-12.1-4.4-16.8-9C52.5 59.4 48 50.3 48 47c0-1.1-.4-2-1-2-3.5 0 9.8-18 16.5-22.4 7.3-4.8 8.5-5.4 16.1-7 13.2-2.9 15.2-3 19.6-1.2zm20.7 14.1c.3.6-.6-.3-2.1-2-1.5-1.6-2.8-3.4-2.8-3.9 0-.8 3.6 3.6 4.9 5.9zm81.9 6.3c4 1.1 8 1.9 9 1.7.9-.1 1.1 0 .3.2-1.2.4-1.2.6 0 1.4.9.5 0 .6-2.3.3-2.2-.4-5.5 0-8.3.9-5.3 1.8-16.3 9.4-19.4 13.3l-2 2.6-9.9-1.6c-5.5-.9-12.7-1.6-16.1-1.6-3.4 0-6.1-.4-6.1-1s.6-1 1.4-1c.8 0 1.7-.8 2.1-1.9.9-2.9 15-13.4 19.8-14.8 5.8-1.7 22.5-.9 31.5 1.5zm-40.5-.1c-.3.7-.9 1.3-1.4 1.3-1.4 0-13.8 12-14.4 14.1-.5 1.5-1.6 1.9-5.3 1.9C125.7 52 84 64.9 84 69.3c0 .6-.3.8-.6.4-1-.9 7.9-11.9 13.8-16.9 8.2-7 13.5-10.3 23.2-14.3 11.7-4.8 14.9-5.4 29.2-5.2 9.3.2 12 .5 11.7 1.4zm62.1 8.3c5.8 2.8 17.3 11.7 16.3 12.6-.2.3-2-.3-4-1.1-7.2-3-24.5-1.1-32.5 3.6-3.2 1.8-3.7 1.9-11.5.3-4.5-.8-8.8-1.7-9.5-2-1.8-.5 9-9.8 14.8-12.6 9.4-4.6 17.7-4.9 26.4-.8zM47 50.6C47 58.3 64.1 74 72.7 74c1.9 0 1.6.6-2.5 4.9l-4.7 4.8-3.8-1.9c-3.9-1.9-13.2-10.6-15.4-14.3-1-1.8-1.2-1.8-1.2-.2C45 70 58.2 82.9 61.9 83.6c3.3.7 3.7 1.4 2.1 4.4-.7 1.3-1.6 1.7-2.8 1.3-4-1.5-10-7.6-13.3-13.5-3-5.4-3.6-7.5-3.7-13.3-.3-8.3.6-14.7 1.9-13.9.5.3.9 1.2.9 2zm121.5 5.7c6.2 1 7.9 1.6 7.6 2.7-.8 3-1.6 16.1-1.1 17 .3.5 2.8 1.2 5.6 1.5 6.1.8 6.2.7 7.1-10.1.7-8.1 2.3-10.1 2.3-2.9 0 3.7.3 4.5 1.8 4.5 3.3 0 3.6-3.2-3.8 41.1-1 5.9-1.4 6.6-3.1 6.2-1.6-.4-1.9-1.4-1.9-5.7 0-2.8.7-8.3 1.6-12.1.9-3.9 1.8-9.1 2.1-11.6l.5-4.5-5.4-1.3c-9.8-2.4-10.1-2-11.8 16.9-.5 6.3-1.1 12.3-1.3 13.4-.3 1.7-1.3 1.8-10.4 1.7-15.6-.3-39.2 2.6-61.1 7.4-9.1 2.1-24.7 9.2-29.5 13.7l-4.2 3.8 2.8 2.3c1.5 1.2 2.7 3.2 2.7 4.3 0 1.2 1.4 4 3 6.2 1.7 2.3 3 4.6 3 5.2 0 .5.5 1 1.1 1 1.6 0 8.2-4.1 9.6-6 1.9-2.6 2.8-.1 1 2.9-2.6 4.4-2.2 12.6.8 18.6 1.4 2.7 3.1 5 3.8 5 .7 0 1.1.7 1 1.5-.3 1.7 8.4 5.3 9.3 3.9.3-.5.1-.9-.4-.9s-3.2-3-6.1-6.7c-5.5-7.2-5.8-8.7-4-17.5 1.6-7.7 3-8.8 10.5-8.8h6.3l-.6 3.5c-.6 4 1.4 7.9 4.7 8.8 2.3.6 6.8-2.8 7.1-5.3.3-2.7-.1-4-1.2-4-.6 0-.8.7-.5 1.6.7 1.8-2.1 6.4-4 6.4-2.2 0-4.7-4.7-4-7.5.6-2.4.9-2.5 5.9-1.9 6.3.8 9.1 2.4 11.3 6.6 2.3 4.4 2.3 12.8.1 16.1-1.7 2.6-1.7 2.7.2 2.7 1.1 0 2.5-.9 3.1-2 1.7-3.1 2.3-10.6 1.2-13.9-.9-2.6-.8-2.9.6-2.4 1.2.5.8-.4-1.1-2.8-1.5-1.9-3.3-4.7-3.8-6.2-1.5-3.8-14.6-14.7-17.8-14.8-5.4-.2-8.8.4-16.6 2.9-4.4 1.4-7.2 2.7-6.2 3 .9.2 4.8-.6 8.5-1.7 10.6-3.3 12.6-3.5 16.3-1.7 3.8 1.9 15.6 12.2 14.8 13-.2.3-2.7-.9-5.4-2.6-3.2-2-7.4-3.5-12.4-4.3-10.4-1.8-25.8-2.2-27.3-.7-1.7 1.7-3.9 1.5-9.4-.9l-4.8-2.2 3.4-2.9c4.1-3.4 12.7-7.7 22.3-11l6.8-2.3 4.2 2.4c2.3 1.3 6.7 3.7 9.7 5.4 3 1.7 7.2 4.4 9.3 6 4.4 3.4 5.5 3.1 3.3-1.2-1.6-3-10.2-14.1-11.8-15.2-2-1.3 22.3-4.4 35.2-4.4 14.7 0 28.6.8 29.5 1.7.4.3-.7 2.5-2.3 4.9-11.8 17.5-12.3 19.6-2.3 11.1 3.1-2.6 8.5-6.8 12-9.1l6.5-4.4 5 1.3c11 2.6 17.6 5 29.1 10.6l12 5.8-4 .6c-2.2.4-5.6 1.3-7.5 2.1-2.3 1-5.4 1.3-9 1-13.4-1.2-25.8-.1-24.4 2.1.4.7.3.8-.4.4-2.1-1.3-8.6 1.3-16.4 6.6-7.1 4.9-9.6 7.4-8.4 8.5.3.3 4.9-2.4 10.3-5.9 13.5-8.9 13.5-8.9 7.6-2.5l-5.3 5.6v6.8c0 5.7.4 7.5 2.5 10.6 2.4 3.5 8.1 7.4 9.2 6.3.3-.2-1.1-1.9-3-3.6-3.9-3.3-5.1-6.8-4.9-14.2.1-5.3 1.2-8 5.1-12.1 2.4-2.6 3.1-2.8 9.6-2.6 4.8.2 7.3.7 8.1 1.7.9 1.3 1.2 1.3 2.5 0 .8-.9 2-1.2 2.9-.8 9.7 4.5 14.3 7 13.2 7-1 0-.9.7.3 3 2.9 5.6 1.4 12.2-4.3 18.2-3 3.3-2.5 4.4 1.2 2.7 4.6-2.1 7-7.4 7.1-15.1 0-6.2.2-6.8 2.1-6.8 1.4 0 2.5-.9 3.2-2.8 2.1-5.4 3.6-10.7 3.4-12.5-.1-2.5 1.6-2.1 4.2 1l2.4 2.7-2 2.7c-1.1 1.5-1.7 3.2-1.4 3.8 1 1.5 2.6 1.4 2.6-.3 0-2.1 7.6-10.2 11.4-12 1.9-.9 5.9-1.6 8.9-1.6 4.8 0 5.9.4 8.5 3 4 3.9 5.6 8.9 5.6 17.5 0 6-.4 7.9-3.1 13l-3.2 6-.1-5.3c0-6.2-2-11.6-4.8-13.1-1.2-.6-4.2-1.1-6.9-1.1-3.7 0-5.5.6-7.7 2.5-3.2 2.8-4.1 3.1-3 1.2 4.4-7.7 11.8-13.2 16.6-12.2 2.2.5 2.9.4 2.6-.6-2.2-6.7-17.1.3-20.3 9.6-.8 2.3-1 4.4-.5 4.9s.3 2.1-.6 3.7c-.8 1.6-2.1 6.5-2.8 10.8-1.5 8.3-4.4 13.8-10.3 19.3-3.6 3.4-14.6 5.4-17.8 3.2-2-1.5-5.5-1.8-9.1-.8-2.6.7-4 5.9-2.2 8.1 1.5 1.8 10.7 1 12.3-1.1 1.2-1.6 5.5-3.1 5.5-1.9 0 1-14.7 9.4-21.5 12.3-4.8 2.1-33.1 10.3-38.9 11.3-6.2 1.1-25-1.3-35.6-4.4-15-4.5-37.9-15.7-41.9-20.6-2.8-3.4-3.1-4.4-3.1-11.1 0-6.8-.3-7.8-4.7-15.5-6-10.6-8.8-17.8-10.4-26.9-1-5.9-1.8-7.8-4.1-9.7-3.1-2.6-5.8-10.2-5.8-16.1 0-5.3 3.6-23.9 5.6-29 5.5-13.9 19.7-25.6 38.7-32 10.4-3.4 22.1-6.4 29.2-7.3 6.7-.9 29.5-.5 37 .6zm69.7 1.2c4 1.4 5.3 2.6 8.2 7.3 3.7 6 3.9 7.7.6 4.7-2.3-2.1-12.8-3.6-11.6-1.6.4.6 2 1.1 3.5 1.1s5.3 1.7 8.5 3.7c4.8 3.2 6.2 4.9 9.1 10.9 1.9 3.9 3.5 7.5 3.5 8 0 .4-1.7-.8-3.7-2.8-4.7-4.4-10.4-8.2-21.4-14.1-9.2-5-28.1-12.7-31.1-12.7-3.6 0-1.6-2 3.5-3.4 2.8-.8 6.8-2 8.7-2.5 4.7-1.4 16.4-.6 22.2 1.4zm-53 2.4c.4.3.3 3.5-.2 7.1-.5 3.6-1 7.1-1 7.8 0 1-.5 1-2.1.2-1.1-.7-2.7-.9-3.6-.6-1.2.5-1.4-.1-.9-3.1.4-2.1.7-6 .8-8.6.2-4.7.2-4.8 3.3-4.1 1.6.3 3.3.9 3.7 1.3zm95 10.1c-2.6 9.2-2.9 9.7-9.5 16.2-7.1 7.1-8.7 8-8.7 5 0-2.1-3.8-12.3-5.1-13.6-1.8-1.9-.9-2.3 3.6-1.8 8.6.9 16.4-3.9 20.1-12.6 2.5-6 2.3-3.1-.4 6.8zm-78.7-6.4c3.3.9 6.1 1.7 6.2 1.8.4.3-7.5 52.5-8.1 53.2 0 .1-1.9-.1-4.1-.5l-3.9-.6.2-4.5c.4-6 .6-7.1 3.6-24.5 3.2-17.6 3.1-20.7-.3-21.5-1.7-.4-2.5-1.3-2.7-3.3-.2-2.2.1-2.7 1.4-2.3.9.3 4.4 1.2 7.7 2.2zm13.1 6.9c-1.4 6-6 34.6-7.2 44.7-.6 5.7-2.5 7.7-3.8 4.2-.5-1.3 2.1-19.9 6.1-43.9.4-2.2.8-5.1.9-6.5.1-1.4.3-2.6.3-2.8.1-.1 1 .3 2.1 1 1.4.9 1.9 2 1.6 3.3zm26.7 11.2c2 1.3 3.7 3 3.7 3.8 0 2-.6 1.9-3.8-.4-1.5-1-5.3-3.3-8.6-5.1-4.9-2.7-6.1-3-7.2-1.8-.7.7-3.2 11-5.5 22.8s-4.3 21.7-4.5 21.8c-.1.2-1.7.1-3.4-.3-2.3-.5-2.9-1.1-2.6-2.3 1-3 3.6-18.4 5.6-32.7 1.7-11.9 2.5-17.3 2.9-18.2.2-.3 19.5 9.9 23.4 12.4zm-9.1 1.9c3.3 2.3 3.5 2.8 2.3 4.1-2.6 2.6-1.6 4.2 4.5 7.3 5.4 2.7 7.7 5 5 5-.5 0-1 .7-1 1.5 0 2.2-1.7 1.9-5.5-1.1-3.3-2.5-3.4-2.5-4.4-.5-.6 1.1-1.1 3.1-1.1 4.5 0 2.2.5 2.7 3.9 3.2 3.2.5 3.8 1 3.4 2.5-.7 2.5-4.8 2.5-9.1-.1-3.3-2-3.3-2.1-2.8-8.1.3-4.6.1-6.2-1-6.6-.8-.3-1.4-1.8-1.4-3.3 0-2.3.3-2.7 2-2.3 1.4.4 2.7-.2 4.1-1.8 1.8-2.1 1.8-2.4.3-3.2-1.3-.7-2.1-.5-2.9.7-2.1 2.8-3.5 2-2.4-1.4.6-1.7 1.4-3 1.7-3 .3 0 2.3 1.2 4.4 2.6zm-48.2.2c0 .5-.4 3.3-1 6.3-.5 3-1.2 7.4-1.4 9.9-.2 2.5-.7 6.9-1.1 9.8l-.8 5.3-4.1-.6c-2.2-.4-4.2-.8-4.3-.9-.1-.1.2-3.1.8-6.6.5-3.6 1.2-10.4 1.5-15.3l.6-8.7h4.9c2.7 0 4.9.4 4.9.8zm74.6 9.9c1.9 1.5 2.5 2.5 1.8 3-.6.4-1.4 2.1-1.6 3.8-2.7 14.9-8.7 34.3-12.2 39.1-2.2 2.9-4.2.5-2.9-3.3 1-2.8.1-7.3-1.4-7.3-.4 0-1.4-.4-2.1-.9-1.1-.6-1-1.5.5-4.5 1.8-3.8 1.8-3.8-.6-5.7-4.2-3.4-5.6-2.5-8.1 5.1-1.2 3.8-2.7 7-3.2 7-1 0-.5-2.3 1.8-7.9 1.7-4.2 1.8-7.4.2-6.9-.7.3-2.1 3.1-3 6.3-1 3.2-2 6-2.2 6.2-.2.2-1.5-.2-3-.8-3.4-1.6-3.6-4.8-.2-4.2 2.1.4 2.4 0 3-3.4 1.1-5.8 1.8-7.7 2.5-6.6.3.6 3.2 1.2 6.4 1.5 6.2.5 7.7-.5 7.7-5 0-1.8-3.6-4.2-6.5-4.2-.8 0-1.2-.6-.9-1.4.5-1.2 1.1-1.1 3.7.5 3.3 2 6.3 2.5 7 1.1.3-.4.8-2.5 1.1-4.7.7-4 .7-4.1-4.3-7-3-1.8-5.1-3.7-5.1-4.8 0-2.2.8-2.1 4.8.3 4.2 2.6 5.4 2.5 5.2-.3-.4-4.3-1.1-4.6 11.6 5zm7.9.3c-.3.5-1.2 1-1.8 1-.7 0-.6-.4.3-1 1.9-1.2 2.3-1.2 1.5 0zM225 98.2c0 .7-.5 3-.9 5.2-1.1 4.5-.5 6.6 1.8 6.7 1.5.1 1.5.2 0 .6-1.1.3-1.9 2-2.4 4.9-.5 3.5-1 4.4-2.6 4.4-1.5 0-1.9-.5-1.5-1.8.5-1.8 3.6-19.1 3.6-20.5 0-.4.5-.7 1-.7.6 0 1 .6 1 1.2zm40 5.2c1.2 4.5.5 10.8-2.1 17.7-.9 2.2-.5 3.5 2.1 7.8 3.7 6 3.1 8.5-1 4.1-1.5-1.6-3.3-3-3.8-3-.6 0-1.8 1.5-2.9 3.4-2.4 4.4-10.3 11.5-10.3 9.2 0-.9.4-1.6.9-1.6 3.2 0 14.1-31.6 14.1-41 0-3.3 1.6-1.5 3 3.4zm3.2 16.4c.1 3.4 0 6.2-.4 6.2-.9 0-1.1-.8-1.2-8.2-.1-7.6 1.1-6 1.6 2zm-80.5-.3c.2.6-1.1 1.9-2.9 3-1.8 1-5.2 3.7-7.5 5.8-2.4 2.2-4.3 3.6-4.3 3.2 0-1.1 7.1-11.7 8.5-12.8 1.4-1 5.8-.4 6.2.8zm51.3-.1c0 .2-.7 1.7-1.5 3.2-2.4 4.7-1.9 7.4 1.5 8.5 3.3 1.2 3.5 1.6 1.6 4.2-1.2 1.6-1.5 1.5-4.7-1l-3.4-2.8 1.4-6.3c1.1-4.8 1.9-6.2 3.3-6.2 1 0 1.8.2 1.8.4zM116.3 126c2.6 3.2 4.7 6.1 4.7 6.4 0 .3-2.1-1.1-4.7-3.1-2.7-2-7-4.6-9.6-5.9-5.1-2.3-4.7-3.1 1.8-3.2 2.5-.1 3.8.9 7.8 5.8zm145.5 9.1c-.2.6-.8 1-1.3 1s-1.1-.4-1.3-1c-.2-.6.4-1.1 1.3-1.1s1.5.5 1.3 1.1zm-25.6 8.9c-.2 1.9-.8 4-1.4 4.7-.5.6-1 2.5-1 4.1l-.1 3-4.8-3.2c-2.6-1.8-6.8-3.8-9.3-4.5-2.5-.6-4.6-1.3-4.6-1.4 0-.2 1.9-.3 4.2-.4 2.3-.1 4.5-.8 4.9-1.4.5-.9 1.8-.6 4.8 1.4 4.4 3 5.1 3.2 5.1 1.7 0-.5-1.6-2-3.6-3.4l-3.5-2.4 2.8-1c1.5-.6 3.7-1 4.8-.9 1.7.2 1.9.8 1.7 3.7zm-134.9 1.1c4.3.7 7.9 1.5 8.1 1.8.5.8-18-.5-19.4-1.4-.5-.3-1-1-1-1.4 0-.9.4-.8 12.3 1zm101.4-1.5c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zm8 0c-.3.3-1.2.4-1.9.1-.8-.3-.5-.6.6-.6 1.1-.1 1.7.2 1.3.5zM75 144.9c0 .6 2.2.8 4.9.6 4-.3 4.9-.1 4.4 1.1-.3.8-.9 1.4-1.4 1.4-.5 0-.9.9-.9 1.9 0 1.4-.9 2.1-3.1 2.6-1.7.4-3.1.5-3.3.3-.6-1-3.6-7.9-3.6-8.3 0-.3.7-.5 1.5-.5s1.5.4 1.5.9zm17.5 3.1c-.3.5-2.2 1-4.1 1-1.9 0-3.4-.5-3.4-1 0-.6 1.8-1 4.1-1 2.4 0 3.8.4 3.4 1zM68 162.8c1.2 3.2 3.3 7.7 4.7 10.1 2.3 3.9 2.3 4.3.7 3.7-3-1.2-3.6-1.2-4.1 0-.2.7.8 1.5 2.2 1.8 4.3 1.1 7.5 5 7.5 9.1v3.5l-4.7-2.6c-4.9-2.6-12.8-11.2-15-16.2-2.6-5.9-1.1-16.4 3.1-21l2.1-2.4.7 4.2c.4 2.3 1.7 6.7 2.8 9.8zM91.5 151c-.3.5-1.1 1-1.6 1-.6 0-.7-.5-.4-1 .3-.6 1.1-1 1.6-1 .6 0 .7.4.4 1zm173 8.9c.3.5-.7 1.1-2.1 1.3-3.9.4-6.2 4.3-8 13.5-1.9 9.4-1.5 12.2 2.4 15.8l2.7 2.6-5-1.9c-2.7-1.1-5.1-2.6-5.4-3.3-.4-1.2-.2-1.2 1.3 0 1.5 1.3 1.6 1.2.6-1.3-1.7-4.6-1.2-14 1.1-19.2 2.4-5.8 1.9-5.3 6.6-6.9 4.6-1.7 5-1.7 5.8-.6zm3.1 3.8c.3 1.6 1 4.3 1.6 6.1 1.4 4.8.2 10-3.9 15.9-1.9 2.9-3.8 5.3-4.2 5.3-.4 0-1.7-.7-2.9-1.6-2.7-1.9-2.9-6.3-.6-16 1.9-8.2 2.9-10.3 5.7-11.4 3.3-1.3 3.6-1.2 4.3 1.7zM87.3 166c.3 1.1.1 1.8-.4 1.4-.5-.3-.9-1.2-.9-2 0-2 .7-1.7 1.3.6zM247 190.2c0 .5-.7.8-1.5.8-1.7 0-1.8-.2-.9-2.5.5-1.3.8-1.4 1.5-.3.5.7.9 1.6.9 2zm3.9 3.7c.2.1-.2.7-.8 1.5-.7.8-2.8 1.7-4.9 2.1-2 .3-4.8 1.3-6.1 2.2-2.3 1.5-2.3 1.4.5-2.5 2.6-3.7 3.2-4 6.9-3.7 2.2.2 4.2.4 4.4.4zm4.1 1.5c0 .3-.4.8-1 1.1-.5.3-1 .1-1-.4 0-.6.5-1.1 1-1.1.6 0 1 .2 1 .4zm-1.6 7.1c2.2 3.3 2.1 3.5-1.8 3.5-4.5 0-5.3 1.5-2.8 5l2.1 2.8-4.7-.1c-4.5-.2-4.7-.1-4.7 2.6.1 2.1-.3 2.6-1.5 2.1-.8-.4-2.6-.9-3.9-1.2-2.1-.4-2.3-.2-1.9 2.2l.5 2.7-2.6-2.5c-3.4-3.3-4.9-3.3-5.7 0-.5 1.8-1.1 2.3-2.3 1.8-.9-.4-5.1-1.1-9.3-1.6-7.4-.8-7.9-.7-11.9 1.7-2.2 1.5-7.9 5.9-12.6 10-7 6-10 7.9-17 10.4-4.7 1.7-9.5 3.1-10.7 3.1-5 0-11.3-3.3-17.6-9.1l-6.5-6 4.5.7c2.5.4 6.8 2 9.7 3.6 2.9 1.6 5.8 2.8 6.5 2.5.7-.2-.9-1.5-3.7-2.9l-5-2.6 8 .2c6.5.1 10-.5 18.6-3.2 11-3.3 17.1-4.3 11.2-1.7-4.2 1.8-14.1 8.5-12.6 8.5 1.1 0 7.8-3.8 17.2-9.7 2-1.3 4.3-2.6 5.1-3 .8-.4 2.1-1.3 2.8-2 .7-.7 2-1.3 2.8-1.3 2 0 16.9-7.6 23.4-12 4.2-2.9 7.3-4 13-5 4.1-.7 8-1.4 8.5-1.5 2.4-.8 3.4-.4 4.9 2zm-37.2 1.3c.4 1.5-.2 1.8-3.8 2-5.4.2-6.3-2.4-1.1-3.1 1.7-.2 3.5-.5 3.8-.5.4-.1.9.6 1.1 1.6zM208 222c0 .5-.6 1-1.2 1-3.1 0-23.8 25.2-23.8 29 0 .5-.7 1-1.4 1-1.1 0-.5-1.7 2-6.1 1.8-3.3 3.1-6.6 2.7-7.2-.3-.6-.1-.7.5-.3.7.4 1.2.3 1.2-.1 0-1.3 15.9-17.1 16.5-16.5.3.3.5 0 .5-.6 0-.7.7-1.2 1.5-1.2s1.5.4 1.5 1zm15.4 2c2.2.8 2.5 1.4 2 4.2-.9 4.8-2.2 5.7-10.3 7.2-6.2 1.2-7.7 1.2-9.9 0-1.5-.8-3.6-1.4-4.6-1.4-1.8 0-1.8-.2.5-2.6 3.7-3.9 8.4-6.5 13.7-7.4 2.6-.4 5-.8 5.4-.9.4 0 1.8.3 3.2.9zm8.1 10c3.1 7.9 3.1 8.9 0 15-2.7 5.4-5.1 7.8-3.5 3.5.6-1.5 1-5.1 1-8.1V239h-3.3c-1.9 0-5.6.7-8.2 1.5-3.6 1-5.2 1.1-6.2.3-1.1-.9.2-1.6 5.9-3.4 7.9-2.5 9.8-4.2 9.8-8.8 0-4.1 1.4-2.4 4.5 5.4zm-100 2.7c-.9.8-2.9 4.2-4.6 7.5-2.4 4.7-3.4 5.8-4.7 5.2-.9-.4-2.9-.9-4.4-1.2-2.5-.4-4.1-2.2-2-2.2.4 0 4.1-2.7 8.1-5.9 4.1-3.3 7.9-5.8 8.3-5.5.4.3.1 1.2-.7 2.1zm74.1 2c1.2.7 3.2 3.4 4.5 5.9l2.4 4.5-2.6 2.2C196.6 262.4 192 266 191.1 266c-.6 0-1.1.6-1.1 1.2 0 .7-1.3 2.2-2.7 3.2-2.1 1.6-2.8 1.7-3.1.6-.6-1.7-3.9-5-7-7l-2.4-1.5 3.8-2.5c2.1-1.4 5.7-5.4 8-9 9.3-14.3 10.2-15.2 13.7-14.4 1.8.4 4.1 1.3 5.3 2.1zm-58.5 2.6c4.4 3.8 9.7 5.7 15.8 5.7 4.1 0 17.7-4.2 19.5-6 2.4-2.4 2.4-.7 0 2.5-1.5 1.9-3 5-3.3 6.7l-.7 3.3-8.4.3c-4.7.2-13.7-.2-20.1-.9l-11.5-1.2 1.8-5.5c1-3 1.8-6.1 1.8-6.9 0-1.9.8-1.6 5.1 2zm79.5 5.9c-.4 4.7-1.3 8.2-2.5 9.9-1.3 1.7-1.6 3-1 4 1.3 2.1 1.1 3.3-.5 2-.7-.6-1.6-2.4-1.9-4-.3-1.5-1.7-4.2-3.1-5.8-1.4-1.7-2.3-3.3-2-3.6.3-.3-.2-1.7-1.1-3.1-1.4-2.1-1.5-2.7-.4-3 .8-.2 3.4-1.1 5.9-1.9 7.5-2.4 7.4-2.6 6.6 5.5zm7.6 11.7c-.4 7.3-.5 7.5-5.3 12.3-5.2 5.1-6.9 5.6-12.9 3.3-2.5-1-2.9-1.4-1.4-1.4 2.4-.1 14.3-12 16.7-16.8 1-1.8 1.7-4.5 1.8-6 0-2.4.1-2.5.8-.8.4 1.1.6 5.3.3 9.4zm-19.2-2.7c2.9 4.8 4.2 9.9 2.8 11.5-1.6 2-2.5 1.6-3.1-1.5-.3-1.5-1.7-4.4-3.2-6.6-2-3-2.3-4.1-1.4-5.2 1.7-2.1 2.7-1.7 4.9 1.8zm-51.9-.6c7.6.2 14.1.4 14.5.4.5 0-.7 1.4-2.5 3-3.1 2.9-3.6 3-6.8 1.9-1.8-.6-5.7-1.5-8.6-1.9-2.9-.5-7.2-1.3-9.7-1.9-2.5-.6-6.4-1-8.7-1.1-2.5 0-4.3-.5-4.3-1.1 0-.8 1.8-1 6.3-.5 3.4.4 12.3 1 19.8 1.2zm-25.8 2.7c3.1-.6 3.4.3.9 3.5-1.7 2.2-1.9 2.2-5.7.6-5-2-5-2.1-3.6-3.8.9-1.1 1.9-1.2 3.5-.6 1.2.4 3.4.6 4.9.3zm-11.1.9c-2.8 2.8-1.1 4.4 7.2 6.9 2.7.8 3.3.4 6.8-3.3 4.4-4.8 6.2-4.5 2.4.5-1.4 1.9-2.6 3.8-2.6 4.4 0 .5 1.8 1.6 4 2.3 4.1 1.3 4.4 1.8 3.5 4.2-.4 1.1-3.6-.1-13.1-5-6.9-3.5-13.1-6.1-13.8-5.9-.6.3-1.2-.3-1.2-1.3s.3-1.7.7-1.4c.4.2 1.2-.3 1.9-1.1s2.2-1.5 3.3-1.5c1.6 0 1.8.3.9 1.2zm82.6 2c1.1 1.8 2.5 5 3 7 .9 3.2.7 3.9-1.2 5.7-2.9 2.7-3.6 2.6-3.6-.4 0-3.1-3.4-10.1-5.2-10.8-.9-.3-.5-1.1 1.2-2.5 3.3-2.8 3.5-2.8 5.8 1zm-56 3.8c-3.5 3.4-4.2 3.7-6.7 2.7l-2.9-1.1 2.4-3.6c2.4-3.7 2.5-3.7 6.8-2.7l4.4 1-4 3.7zm18.2-.2c7 2.1 9.7 3.8 11.6 7.3 1.8 3.6 3.4 3.6 6.4.4 1.3-1.4 2.7-2.5 3-2.5 1.1 0 3.9 7.3 4.2 11 .3 3.3.1 3.5-6.6 6.8-3.8 1.9-8.5 3.5-10.5 3.7-4.6.3-12.7-1.1-20.1-3.5-10-3.2-9.8-3-8.8-10 1.2-9.1 5.7-14.6 12.1-14.8 1.7-.1 5.7.6 8.7 1.6zm-58.3 1.3c3.1 2 3.3 2.3 1.9 3.8-2.3 2.5-2.2 13.4.1 15.7 1.7 1.6 1.5 1.7-4.6 1.1-3.5-.4-8.1-1.2-10.2-1.9-3.7-1.1-3.9-1.3-3.8-5.2 0-2.3.8-6.1 1.7-8.5 1.3-3.4 2.4-4.6 5.2-5.6 5-1.8 5.9-1.7 9.7.6zm22.3 6.7c10.6 5.3 11.5 5.9 11.8 8.8.4 4.5-2.5 5.4-17.2 5.4-12 0-12.4-.1-13-2.3-.8-2.9-.8-10.1 0-12.1.9-2.3 1.9-2 8.3 2.3 8.3 5.7 19 10.6 20.3 9.3.7-.7-1.4-2.2-6.8-4.7-12-5.6-22.4-12.5-22.4-14.9 0-.9 6.6 2 19 8.2zm66.8-4.8c3.2 4.7 3 10.9-.5 13.4l-2.6 1.9.6-2.5c.5-1.8-.2-4.3-2.2-8.4-2.8-5.3-2.8-5.9-1.3-7.1 2.3-1.7 3.3-1.2 6 2.7zm33.7 2c-.8 1.6-1.5 5.1-1.5 7.8 0 3.5-.4 5.2-1.5 5.6-.8.3-1.5 1-1.5 1.6 0 4.2-16.8 14.6-29.9 18.4l-5.3 1.6-5-4.8c-2.7-2.6-5.3-4.9-5.8-5-2.3-.8-.8-2.1 1.8-1.6 4.6.9 21-3.5 30.2-8.1 8.7-4.4 13-8.1 16.9-14.8 2.7-4.4 3.8-5 1.6-.7zm-17.5 8.4c1.4 0 3.4-.4 4.5-.8 1.4-.5 1.3-.3-.2.5-1.3.7-2.3 1.6-2.3 2.1 0 .4-.5.8-1 .8-.6 0-3 .9-5.4 2.1-2.5 1.1-8.7 3.5-13.8 5.3-5.1 1.8-10.2 3.6-11.2 4.1-1.3.5-1.7.5-1.3-.2.4-.6 3.6-2.5 7.3-4.2 6.9-3.3 15.6-8.9 16.2-10.3.2-.5 1.4-.5 2.5-.1 1.2.4 3.3.7 4.7.7zm-126 5.9c0 2.3 11.9 5.6 22.5 6.3l10 .7 2.3 3.4c1.2 1.9 2.2 3.8 2.2 4.3s1.4 1 3.2 1.2c4.1.4 5 2.8 1 2.8-2 0-3.5-.8-4.5-2.4-1.4-2.1-2.5-2.4-11.6-3-5.6-.4-12-1.4-14.4-2.3-6.5-2.5-19.1-2.3-24.7.3-4.9 2.4-12 3.8-12 2.4 0-.4.4-1 .9-1.2 1.5-.5 8.1-9.7 8.1-11.2s3-2.1 12.3-2.4c3.2-.1 4.7.2 4.7 1.1zm-22.4 5.4c-2.3 3.2-5.5 7.7-7.1 10-2.3 3.6-3.1 4.1-5.4 3.7-2.1-.4-3.4.1-5.6 2.4-3 3-3.1 3-15.3 3.4-6.7.2-12.2.2-12.2.2 0-.1 3.3-3.4 7.3-7.2 4-3.9 8.6-8.9 10.2-11.1 2.6-3.4 3.9-4.1 9.5-5.4 3.6-.8 10.2-1.5 14.7-1.6l8.3-.1-4.4 5.7zm162.5-1.4c-1 .9-1.1.8-.5-.6.3-1 .9-1.5 1.2-1.2.3.3 0 1.1-.7 1.8zm-69.7 3.2c5.4 1.4 11.7 2.5 14 2.5 3.6.1 4.8.8 9.9 5.5 6.9 6.5 9.7 6-23.5 4.3-14.2-.7-23.8-1.6-23.8-2.2 0-2.2-3.5-4.6-6.7-4.6-2.1 0-3.3-.5-3.3-1.4 0-.7-.7-1.9-1.5-2.6-2.6-2.1-1.7-2.7 3.8-2.3 4.1.3 21.1-1 21.2-1.6 0 0 4.5 1 9.9 2.4zm70 2.7c-1.5 9.5-5 13.1-19.1 19.9-5.7 2.7-10.5 4.9-10.7 4.9-.2 0-.6-2.2-1-4.9-.4-3.3-1.2-5.1-2.3-5.6-1.2-.4 1.2-1.6 7.2-3.6 10.2-3.4 20.7-8.9 23.8-12.5 1.1-1.3 2.2-2.4 2.4-2.4.2 0 0 1.9-.3 4.2zm6.5 10.6c3.6 10.6 3.2 11.9-5.2 17.8-3.9 2.9-10.1 6.4-13.7 7.9-7 3-16 5.8-16.5 5.3-.2-.2-.5-3.2-.6-6.7l-.3-6.4 6.5-2.4c3.5-1.3 7.8-2.8 9.4-3.3 8.4-2.6 17.7-14.4 16-20.2-1.5-5.2 2.3 1.8 4.4 8zM104 299.2c3 1.4 7.4 4.4 9.8 6.7l4.2 4.2v8.7c0 16.6-5.8 26.6-17.5 30.3-9.2 2.9-14.1 2.4-25.7-2.8-5.6-2.5-5.6-2.6-7.8-9.4-2.9-9-3.2-21.8-.6-26.9 2-3.7 5.3-7.3 10.1-10.5 4.5-3 6.3-3.4 14.5-3.2 5.7.2 8.8.9 13 2.9zm16.8 1.2c2.8.3 5.1 1.2 6.5 2.8 2.1 2.3 3.1 2.4 25.2 3.8 12.7.7 26.2 1.5 30 1.6 3.9.1 8.8.2 11 .3 2.8.1 4.4.7 5.2 2 1.2 1.9.4 1.9-37.3 1.3l-38.5-.5-6.5-6.3c-6.4-6.3-6.5-6.3-3.2-5.9 1.8.2 5.2.6 7.6.9zm-53.6 2.7c-2.2 1.6-5.7 5.2-7.7 8l-3.7 4.9H39.7c-8.9 0-17.2.3-18.4.6-2.8.8-3.1-1.1-.6-3.8 1.4-1.6 3.4-1.8 18.8-1.8h17.2l4.6-4.9c4.6-4.9 6-5.9 8.6-6 .8-.1-.4 1.3-2.7 3zM57 306c-1.2 2.2-5 4.6-5 3.1 0-.9 4.7-5.1 5.7-5.1.2 0-.1.9-.7 2zm193.9 8.9c.6 2.1 1.1 4.8 1.1 6 0 3.6-3.7 9.7-7.7 12.9-5.3 4.1-20.2 11.4-29.8 14.5-15.8 5.1-18.5 5.3-12.6.9 2.6-1.9 2.9-2.5 2.1-5.2-.6-2.2-.5-3.2.3-3.5 18.5-6 26.9-10.4 35.4-18.5 4.7-4.4 5.1-6.9 2.7-16-.6-2.3-.3-2.2 3.3 1.3 2.2 2.1 4.5 5.5 5.2 7.6zM64 310.8c-3 5.7-2.7 16.6.5 24.4.4 1 .3 1.8-.3 1.8-1.9 0-5.4-7.4-5.9-12.5s.8-9.2 5.5-16.3c2.4-3.6 2.5-1.8.2 2.6zm97.5 5.3c14.3.6 27.8 1.2 30 1.4 2.2.2 5.3.4 6.9.4 2.3.1 2.7.4 1.8 1.3-.6.6-.8 1.8-.3 2.7.5.9 1.1 4.6 1.4 8.3.5 5.4.3 6.7-.9 7.2-.9.3-14.5.6-30.2.7-15.8.1-33.2.4-38.7.8s-10.2.6-10.4.4c-.2-.1.8-1.8 2.3-3.7 2.1-2.8 2.6-4.6 2.6-9.1 0-3-.6-7.1-1.4-8.9l-1.4-3.4 6.2.4c3.3.2 17.8.8 32.1 1.5zm-38.6 10.6c-.1 4-.5 7.3-.8 7.3-.4 0-1.4 1.2-2.3 2.8-1.8 3.1-6.4 8.2-7.3 8.2-.3 0 .8-2 2.5-4.5 4.6-6.7 6.4-12.7 5.7-19.4-.5-5.1-.5-5.4.9-3.6 1 1.4 1.4 4.2 1.3 9.2zm131.9-7.2c-.3.3-.9-.2-1.2-1.2-.6-1.4-.5-1.5.5-.6.7.7 1 1.5.7 1.8zm7.6 25.7c-.3 2.9-1.2 10.9-2 17.8-1.9 16.8-1.9 24 .1 24 1.2 0 1.5-1.6 1.6-7.8 0-4.2.8-14.6 1.7-23.1l1.7-15.4 4.3-.4c3.5-.3 4.6 0 6.6 2.2 1.3 1.4 2.6 3.9 2.8 5.5.4 2.7.2 3-2.1 2.8-2.2-.3-2.7.2-3.5 3.5-.9 3.3-1.3 3.7-3.3 3.2-1.9-.4-2.5 0-3.3 2-.6 1.5-1 4-1 5.6 0 2.6.3 2.9 3.1 2.9 3 0 3 .1 2.7 4.7-.3 4.5-.2 4.8 2.6 5.3 1.7.3 3 .7 3 1 0 .3-.6 2.6-1.2 5.2-1.5 5.9-3.7 6.7-13.7 4.8-3.8-.8-8.9-1.4-11.2-1.4-4.1-.1-6.2-1.5-2.5-1.7 6.5-.3 7.2-1.1 7.6-9.5.6-10.6 0-12.4-4-12.4-1.9 0-3.4-.5-3.4-1 0-.6 1.5-1 3.3-1 4.9 0 5.7-1.5 5.7-9.8 0-7.3 0-7.4-3-8.5-4.4-1.7-3.7-2.5 2.3-3 2.8-.2 5.3-.4 5.4-.5.1-.1 0 2.2-.3 5zm-7.4 5.9c0 2.7-.1 5.2-.2 5.6-.4 1-4.1 1.2-5.8.2-.8-.5-1-.9-.4-.9s1.4-2.2 1.8-4.8c.7-5.5 1.2-6.3 3.2-5.5.9.3 1.4 2.1 1.4 5.4zm-140.4-3.2c-1 1.1-1.5 2.4-1.2 2.9.7 1.1-13.1 2.8-14.1 1.8-.4-.3.5-.6 1.9-.6s5-1.3 7.9-2.9c6.4-3.5 7.8-3.8 5.5-1.2zm164.5 13.2c-.3 10.5-1 13.6-3.2 14.2-1.9.5-2-.8-.3-6.1.7-2.4-.8-4.2-3.6-4.2-2.4 0-2.7-.3-2.3-2.5.4-2.1.9-2.3 3.4-1.8 2.7.5 2.9.3 3.5-3.6 1.1-6.8 2.8-4.2 2.5 4zm-236.6-.3c4.7-.2 8.5 0 8.5.4s-1.6 1.5-3.5 2.4c-4 1.9-25.3 19.8-26.2 22-.3.8-1.1 1.4-1.8 1.4-2.1 0-6.5-4-6.5-5.9 0-1 2.7-6.3 6-11.8l6-10.1 4.5 1c2.4.5 8.3.8 13 .6zm130.5-.6c0 .6.3.8.6.5.4-.3 1.5-.2 2.5.4 1.3.6 1.9.6 1.9-.1 0-.5 1.2-1 2.8-1 2.6.1 2.6.1.8 1.5-1.1.8-3 1.5-4.2 1.5-2.3 0-7.9-3.9-5.6-4 .6 0 1.2.5 1.2 1.2zM52.9 364c-.6 1.6-1.5 3-2 3-.4 0-4.9 3.5-9.9 7.7C27.9 385.9 24 389 22.9 389c-1.8 0-.7-1.6 3.4-4.9 2.3-1.8 7.5-6.4 11.6-10.2 4-3.8 8.6-7.6 10.1-8.4 1.5-.8 3-2.1 3.3-3 1.2-3 2.6-1.6 1.6 1.5zm96.6 1c.6 2 8.9 9.1 22.8 19.4 4.2 3.2 7.7 6.2 7.7 6.7 0 1-4-.7-5-2.1-.3-.4-3-2.2-6-4.2-3-1.9-8-5.7-11-8.4-3-2.8-7.4-6.5-9.7-8.3-4.9-3.7-5.4-5.1-1.9-5.1 1.6 0 2.7.7 3.1 2zm104.4 8.5-.2 8.5h-3.8c-2.3 0-3.9.5-3.9 1.2 0 .6-.2.9-.5.6-.3-.3.1-1.8 1-3.4.8-1.6 1.5-4.3 1.5-6 0-6.6 1.1-9.4 3.7-9.4 2.4 0 2.4.1 2.2 8.5zM75 371c2.3 2.7 3.9 5.4 3.5 6-.3.5-.5 1-.3 1.1 2 .6 38.4 2.2 39.7 1.7 1-.3 3-3.1 4.4-6.2 2.4-5 3-5.6 5.8-5.6 3.5 0 3.6-.4-1.5 8.2-3.2 5.4-4.5 6.7-6.9 7.1-1.6.2-11.9.2-22.8-.1-18-.4-20.1-.7-20.9-2.3-.6-1-3.3-4.8-6-8.4l-5.1-6.5h3c2.3 0 3.8 1.1 7.1 5zm-5.7 5.3c1 1.2 3.2 3.6 4.7 5.4l2.9 3.3 20.3.5c11.2.3 21.4.8 22.8 1 2.1.3 3.1-.5 5.8-4.6l3.2-4.9h5.8c3.1 0 6.8-.3 8.2-.7 2.3-.6 2.1-.2-1.9 4.6-4.9 5.8-8 8.2-10.8 8.3-1 0-13.9-.3-28.8-.6l-27-.7-2.5-2.8c-5.4-6-10-11.4-10-11.8 0-1.1 5.8 1.2 7.3 3zm17.4-1.3c2.1 0 2.4.2 1.3 1.5-1.7 2.1-3.4 1.9-5.6-.7-1.8-2-1.8-2.1-.1-1.5 1 .4 3 .7 4.4.7zm7.6.7c-.7.2-1.9.2-2.5 0-.7-.3-.2-.5 1.2-.5s1.9.2 1.3.5zm61.9 2c1.8 1.5 3.5 3 3.8 3.3 2.2 2.5 15.2 12 16.4 12 1.8 0 2.1 1.6.5 2.6-2.2 1.3-6.9 9.9-6.9 12.5 0 4.6 1 5.9 5.1 6.5 2.1.4 3.9.9 3.9 1.3 0 .9-9.1 6.9-13 8.4-10.8 4.4-20.4 2.2-28.7-6.6-6.7-7.1-8-9.3-8.8-15.3-.5-3.8-.2-6.1 1-9 1-2.1 1.9-3.3 2.2-2.7 1 2.6 3.1 1.1 9.4-6.6 3.5-4.4 7.3-8.1 8.4-8.4 1.1-.2 2.3-.5 2.7-.6.3 0 2.1 1.1 4 2.6zm38.8 6.5c3.7 2.2 3.9 2.5 3.4 5.8-.7 3.9-1.8 5.8-8.3 14.8-4.9 6.6-6.5 7.5-12.7 7-4.6-.4-5.5-2.7-3-8 2.7-5.6 6.1-8.4 12.5-10.4 6.9-2 7.8-4 4-8.8-2.5-3.2-1.1-3.3 4.1-.4zm4 17.2c0 1.2.5 3.7 1.1 5.5.6 1.8.9 3.5.5 3.8-.3.3-.8-.3-1.1-1.3-.4-1-1.2-3.3-1.9-4.9-1.3-3.1-1.1-5.5.5-5.5.5 0 .9 1.1.9 2.4zm44.7 2.1c.1.6-.2 2.6-.7 4.5-.4 1.9-1 6.2-1.2 9.5l-.3 6h3c3.3 0 3.9-1.5 5-13.7l.6-6.6 4.2 1.3c2.3.7 6 1.7 8.2 2.1l4 .9.3 6.1c.2 4.3-.3 7.7-1.8 11.7-2.1 5.6-3.5 6.8-5.6 4.7-.6-.6-5-1.5-9.8-2-13.2-1.5-15.3-3.9-12.7-14 .6-1.9 1.4-5.3 2-7.6.8-2.9 1.6-4 2.8-3.9 1 0 1.9.5 2 1zm4.2 3.2c-.4 2.1-1.3 6.4-1.9 9.6-.6 3.1-1.5 5.5-2 5.2-.5-.3-.5-2 0-3.8.4-1.7 1.3-5.8 2-9 .6-3.1 1.5-5.7 2-5.7.4 0 .4 1.7-.1 3.7zm-50.6 4.8c.9 3.3 1.9 10.9 2.1 17l.4 11-8.5 3.9c-7.3 3.3-9.9 3.9-17.4 4.4l-8.8.5-1.1-4.3c-1.2-4.6-4.7-10.7-7.4-12.9-2.6-2.2-1.9-2.8 3.8-3.4 6.2-.6 11.5-3.1 17.5-8.1 6.1-5.1 6.9-4.8 7.3 3 .3 6.5.2 6.7-2.4 7.6-1.6.6-2.8 1.4-2.8 1.9s1.6.2 3.7-.6c3.3-1.4 3.8-1.4 5.6.2 1 1 2.7 3.4 3.8 5.3 1 1.9 1.8 2.9 1.9 2.2 0-2.4-2.8-8-4.7-9.2-1.4-.9-1.5-1.2-.4-1.7 2.3-.9 6.1-5.4 6.1-7.1 0-.9-1.5.2-3.6 2.6-1.9 2.3-4 4.2-4.5 4.2s-.6-1.7-.3-3.9c.4-2.2.2-5.3-.4-7-1-2.7-.7-3.3 2.9-7.2 2.1-2.3 3.9-4.7 3.9-5.3 0-2.4 1.8 1.3 3.3 6.9zm3.4 6.7c-.3.7-.5.2-.5-1.2s.2-1.9.5-1.3c.2.7.2 1.9 0 2.5zm-2.9 30c-2.5 2.3-4.9 5-5.4 5.8-.5.9-3.7 2.8-7 4.3-5 2.2-7.6 2.7-14 2.7-10.4 0-11-.5-8.4-6.3 2-4.5 2.1-4.6 5.1-3.5 1.7.6 5.6.8 8.8.5 5.9-.6 19.5-5.7 22.1-8.2.8-.9 1.8-1.1 2.3-.6.6.6-.9 2.7-3.5 5.3zm25.2-1.7c18.3 3.2 25.5 5.5 24.7 7.9-.2.6-4.1 2.1-8.8 3.3-13.6 3.4-42.9 2.9-42.9-.8 0-1.8 2.2-5.3 5.3-8.7 2.7-2.8 3.7-3.2 8.1-3.2 2.8 0 8.9.7 13.6 1.5z" />
              <path d="M183.4 136.4c-4.5 2-10.9 8-12.8 12-2.8 5.9-1.7 6.2 1.7.6 3.9-6.5 9.1-10.8 14.3-12 3.7-.9 17 0 25.4 1.6 1.9.4 3.2.4 2.9 0-1-1.1-17-3.6-22.9-3.6-3 .1-6.9.7-8.6 1.4zM202 150.1c-2.3 4.2 1.7 10.9 6.4 10.9 4.6 0 7.6-8.1 4.1-11-1.2-1-1.3-.7-.9 2.2.4 2.5.1 3.8-1.3 5-1.8 1.6-2.1 1.6-4.2.1-2-1.3-2.2-2.1-1.7-5.4.7-4.3-.6-5.2-2.4-1.8zM205.7 187.7c-1.4 1.3-.7 6.3.8 6.3 1 0 1.3-.9 1-3.1-.4-3.5-.9-4.2-1.8-3.2zM215.7 187.7c-1.2 1.2-.7 4.1.8 4.7 1.1.4 1.5-.2 1.5-2.4 0-2.9-.9-3.8-2.3-2.3zM210.2 190.6c.2 1.5.9 2.9 1.6 3.2 1 .3 1.3-.4 1-2.4-.2-1.5-.9-2.9-1.6-3.2-1-.3-1.3.4-1 2.4zM95.7 191.7c-.5.9 1 5.3 1.8 5.3.3 0 .5-1.4.5-3 0-2.8-1.3-4-2.3-2.3zM107.2 193.7c.4 3.9 2.8 4.2 2.8.4 0-2.1-.5-3.1-1.6-3.1s-1.4.8-1.2 2.7zM102 194.4c0 1.4.5 2.6 1 2.6.6 0 1-.9 1-1.9 0-1.1-.4-2.3-1-2.6-.6-.4-1 .5-1 1.9zM169.4 199.4c-.3.9-2.6 2.8-5.1 4.2-3.7 2.3-5.2 2.6-10.5 2.2-6-.4-8.6-2-10.1-6.1-.3-.9-.8-.9-1.7-.1-1.6 1.5.2 4.4 4.2 6.7 3.7 2.1 14.8 2.3 18.6.3 4.4-2.3 7.8-6.4 6.4-7.8-.9-.9-1.3-.7-1.8.6zM77 150c0 .5.7 1 1.5 1s1.5-.5 1.5-1c0-.6-.7-1-1.5-1s-1.5.4-1.5 1zM79.2 303.8c-7.6 1.6-11 16.7-7.2 31.3.9 3.4 1.2 3.6 7.2 4.7 8.1 1.6 27.6 1.8 29 .4 1.6-1.6 3.8-12.1 3.8-18.5 0-15-3-17.8-19.5-18.3-5.5-.1-11.5 0-13.3.4zm21.6 2.9c3.7.9 7 2.1 7.4 2.7 1.1 1.7.9 19.6-.2 23.8-.6 2.1-1.9 4.1-2.8 4.6-3.3 1.6-19.4 1.2-25.2-.6-6.2-2-6.7-3-6.9-13.3-.1-8.5 2.3-16.7 5.2-17.9 3.6-1.4 15.3-1.1 22.5.7z" />
              <path d="M86 307.7c-6.4.8-10 6.5-10 15.7 0 7.3 7 13.6 15 13.6 8.9 0 14.5-7 13.8-17.1-.7-10.1-6.5-13.8-18.8-12.2zm10.5 2.5c1.5.7 3.6 3 4.7 5.1 3.7 7.3 0 16.2-7.8 18.7-4.2 1.4-7 .6-11.1-3.3-2.9-2.7-3.3-3.7-3.3-8.3 0-2.9.4-6.4 1-7.9 1.7-4.6 10.7-6.9 16.5-4.3zM227 367.1c-4.8 1.3-13 5.1-13 6 0 .4 2.5-.3 5.6-1.7 3.1-1.4 7.6-2.7 10-3.1 2.5-.3 4.7-1 5-1.4.7-1.1-3-1-7.6.2z" />
            </svg>

            <span className="pl-2 font-medium text-red-600">
              {' '}
              Error: Passwords do not match{' '}
            </span>
          </div>

          <button
            onClick={() => setShowPasswordError(false)}
            className="border-l border-red-400 pr-2 pl-2"
          >
            {' '}
            X{' '}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ErrorPasswordToast
