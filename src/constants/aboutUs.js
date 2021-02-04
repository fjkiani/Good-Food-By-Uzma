import React from "react"
import {
  GiCompass,
  GiDiamondHard,
  GiStabbedNote,
  GiBriefcase,
} from "react-icons/gi"
import icon1 from "../images/icon1.png"
import icon2 from "../images/icon2.png"
import pakistan from "../images/pakistan.png"
export default [
  {
    id: 1,
    icon: <img src={icon1} className="icon" />,
    label: "mission",
    text:
      "To deliver you authentic, exceptional and good Pakistani food. We mean the lick-your-plate good",
  },
  {
    id: 2,
    icon: <img src={icon2} className="icon" />,
    label: "vision",
    text:
      "using fresh ingredients and a healthy approach to cooking- without compromising taste",
  },
  {
    id: 2,
    icon: <img src={pakistan} className="icon" />,
    label: "Values",
    text:
      "Our cuisines are famous for their aroma, mild and spicy mouthwatering flavors. All of our dishes present authentic Pakistani recipes",
  },
  
 
]
