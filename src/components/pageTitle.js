import React from 'react'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import TelegramIcon from '@material-ui/icons/Telegram';
import './styles/pageTitle.css'

const PageTitle = ({title, icon}) => {

    let iconType = <MenuBookIcon fontSize="inherit" />
    if(icon === 'about'){
        iconType = <AllInclusiveIcon fontSize="inherit" />
    }else if(icon === 'contact'){
        iconType = <TelegramIcon fontSize="inherit" />

    }
    return(
        <div className="page-title-container">
            <div>
                {iconType}
            </div> 
            <p>{title}</p>
        </div>
    )
}
export default PageTitle