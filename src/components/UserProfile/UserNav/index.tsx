import React from 'react'

interface UserNav
{
    pageTitle: string;
}


const UserNav = ( {pageTitle}:UserNav) => {
  return (
    <div className='w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-3 py-4 shadow-sm flex justify-between capitalize'>
            <div>{pageTitle}</div>
            <div>User</div>
    </div>
  )
}

export default UserNav