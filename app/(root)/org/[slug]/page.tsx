"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import { createBlog } from './actions'
import {useOrganization} from '@clerk/nextjs'


export default function Organization() {
  const selectedOrg = useOrganization()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

 
  

  const handleCreateBlog = async () => {

    if (!selectedOrg.organization?.id) return

     await createBlog({
      body: content.trim(),
      title: title.trim(),
      orgId: selectedOrg.organization?.id
     })
  }


  

  return (

    <div >
      <div className=' p-10 '>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} className='mb-5' placeholder='Blog title' />
      <Textarea value={content} onChange={(e) => setContent(e.target.value)} className='mb-5' placeholder='Blog content'/>
      <Button onClick={handleCreateBlog} className='cursor-pointer'>Create blog</Button>
    </div>
     <div></div>


    </div>
  )
}

