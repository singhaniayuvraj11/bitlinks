import { redirect } from "next/navigation";

import React from 'react'

const page = () => {
  redirect(`${process.env.GITHUB_PROF}`)
}

export default page
