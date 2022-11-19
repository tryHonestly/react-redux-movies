import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'

import SearchFilters from '../SearchFilters'

import styles from './SearchFiltersDrawer.module.scss'


type Anchor = 'top'

const Drawer:React.FC = () => {
  const [state, setState] = React.useState({ top: false })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
               
        return
      }
         
      setState({[anchor]: open })
    }

  const list = (anchor: Anchor) => (
   <Box
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
     <SearchFilters setState={setState}/>
    </Box>
  )


  

  return (
    <div className={styles.root}>
       
      {([`top`] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            fullWidth
            variant="contained"
            sx={{padding:`13px 0px`}}
          >
            Open Filter
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
            <Button  onClick={toggleDrawer(anchor, false)}>CLOSE</Button>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
     
    </div>
  )
}


export default Drawer