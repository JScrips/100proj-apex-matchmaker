# Apex Matchmaker

_Apex Matchmaker_ is a passion project, and a 100 hour project. I decided to create this app because I couldn't find anywhere to matchmake with folks when playing solo. One thing led to another and this app came about.

Ideally, users should be able to create an account, log in, flesh out their profiles and flag their favorite champions, weapons, game modes, etc. Afterwards, they can search for other users by username, or by their flags. They also have the option to create active teams, that can be occupied by any user who is currently active on the app.

**Link to project:** http://apexmaker.vercel.app/

![Sign In](/public/README%20imgs/SignIn.PNG)
![Landing Page](/public/ReadMe%20imgs/LandingPage.PNG)
![Search](/public/ReadMe%20imgs/Search.PNG)
![Profile](/public/ReadMe%20imgs/Profile.PNG)
![Active Teams](/public/ReadMe%20imgs/ActiveTeams.PNG)

## How It's Made:

**Tech used:** <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" height="20" width="20"/>HTML,
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="20" height="20"/>CSS,
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="20" height="20"/>JavaScript,
<img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="20" height="20" style="background-color:white"/>Next.js,
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="20" height="20"/>React.js,
<img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="20" height="20"/> Firebase,
<img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="20" height="20"/>React Icons,

# <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="20" height="20"/> Firebase & Back-End

This entire project started as a testing site while I was learning how to utilize the various firebase methods in my projects. After countless failures I had a breakthrough and immediately started exploring the limits of my newfound capabilities.

This project uses:

<ul>
  <li> Authentication
  <li> Firestore Database
  <li> File Storage
</ul>

The first hurdle I encountered was trying to connect firebase to the actual project. This was especially difficult for me having never used Firebase before. In order to do this, I chose to create a separate Javascript file to hold my firebase configurations.

```js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'key',
  authDomain: 'key',
  projectId: 'key',
  storageBucket: 'key',
  messagingSenderId: 'key',
  appId: 'key',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
```

Here, I imported various methods from firebase. It is best practice to import the specific method you need instead of importing the entire firebase folder. When I spun up the database on Firebase I was giving configuration keys which I placed in the separate Javascript file. I then applied those configuration keys to the `initializeApp() ` method from firebase. This successfully connected my project to the firebase database.

The next hurdle was trying to authorize users in order for them to log in, log out, and validate their information specific to their identities. After speaking with my mentor and doing research, I came to the conclusion that the best way to pass Authentication throughout the application was with context. Thankfully, React has a useful method called useContext. In orer to accomplish this, I created a separate javascript file, imported the Auth methods from firebase, as well as the context, effect, and state methods from react, and coded a component to wrap around my actual application component.

```js
//Auth Context Component.

import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  currentUser,
} from 'firebase/auth'
import { auth } from '../firebase-config'

export const AuthContext = createContext()

// this begins the creation of the AuthContext

export const AuthContextProvider = ({ children }) => {
  //this is the provider for the context we just created. We pass in the children, which are the other components that the context is wrapping.

  const [user, setUser] = useState({})
  //assign a current user when the user logs in. Set it to null to start.

  useEffect(() => {
    const userStatus = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      if (user) {
        console.log('user logged in')
      } else {
        console.log('user logged out')
      }
    })

    return () => {
      userStatus()
    }
  }, [])

  // useEffect will run when the component is mounted, and will run the userStatus function when the user logs in or out.

  const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //create a function to sign up using email and password. Thanks Firebase!

  const signInUser = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  //create a function to sign in the user with email and password

  const logOutUser = () => {
    return signOut(auth)
  }

  //create a function to sign out the user

  return (
    <AuthContext.Provider value={{ user, createUser, logOutUser, signInUser }}>
      {children}
    </AuthContext.Provider>

    //Return the Actual AuthContext Component, that will populate the children with the inputter user, createUser, logOutUser, signInUser functions from the javascript
  )
}

export const AuthFunctions = () => {
  return useContext(AuthContext)
  //export the AuthFunctions() function for use in and throughout the app.
}
```

```js
// _app.tsx page in 'pages' folder

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DefaultLayout from '../components/DefaultLayout'
import { AuthContextProvider } from '../src/AuthContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      //wrapping the app Component in the AuthContextProvider
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </AuthContextProvider>
  )
}

export default MyApp
```

Here's where you can go to town on how you actually built this thing. Write as much as you can here, it's totally fine if it's not too much just make sure you write _something_. If you don't have too much experience on your resume working on the front end that's totally fine. This is where you can really show off your passion and make up for that ten fold.

## Optimizations

_(optional)_

You don't have to include this section but interviewers _love_ that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those _whoa this is awesome_ or _fuck yeah I did it!_ moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.

## Examples:

Take a look at these couple examples that I have in my own portfolio:

**Palettable:** https://github.com/alecortega/palettable

**Twitter Battle:** https://github.com/alecortega/twitter-battle

**Patch Panel:** https://github.com/alecortega/patch-panel
