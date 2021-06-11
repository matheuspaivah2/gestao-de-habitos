import { useEffect } from "react";
import api from "../../services/api";
import './style.css'

const CardList = () => {
  useEffect(() => {
    api.get()
  })
  return (
    <div class="slider">
  <div class="slides">
    <div id="slide-1">
      1
    </div>
    <div id="slide-2">
      2
    </div>
    <div id="slide-3">
      3
    </div>
    <div id="slide-4">
      4
    </div>
    <div id="slide-5">
      5
    </div>
  </div>
</div>
  )
}

export default CardList;