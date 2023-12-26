import { getMenu } from '@/data/data';
import React from 'react'

const MenuItem =async ({routeName}) => {
  

  const menus = await getMenu();


  const menu = menus.filter((menu) => menu.categoryName == routeName);
  return (
    <div className="flex items-center justify-between flex-1">
      {
        menu?.map(menuItem =>(
          <div className="" key={menuItem?.id}>
            <h1>{menuItem?.name}</h1>
          </div>
        ))
      }
    </div>
  )
}

export default MenuItem
