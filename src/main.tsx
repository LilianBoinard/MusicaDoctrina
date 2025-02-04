import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {Flowbite} from "flowbite-react";
import Theme from "./Styles/theme.tsx";
import './Styles/index.css'

import Router from "./router.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*@ts-expect-error*/}
    <Flowbite theme={{ theme: Theme}}>
      <Router />
    </Flowbite>
  </StrictMode>,
)
