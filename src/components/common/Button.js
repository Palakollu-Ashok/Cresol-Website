import React from "react"
import { MdOutlineArrowOutward } from "react-icons/md"

const Button = props => {
  return (
    <div className="group mt-2 w-fit rounded-lg  bg-gradient-to-r  from-[#075ba6] to-[#f04d23] hover:bg-gradient-to-r  hover:from-[#f04d23] hover:to-[#075ba6] p-[1px] ">
      <div className="bg-[#001324] rounded-lg p-3  flex items-center justify-center  space-x-4 ">
        <button>{props.name}</button>
        <MdOutlineArrowOutward className="group-hover:rotate-[360deg]  duration-700" />
      </div>
    </div>
  )
}

export default Button
