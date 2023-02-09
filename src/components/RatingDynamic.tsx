import React from "react"
import { Image } from "react-native"

const ratingMap = {
  1: require('../assets/5-Star_rating_system_PCAR_01.png'),
  2: require('../assets/5-Star_rating_system_PCAR_02.png'),
  3: require('../assets/5-Star_rating_system_PCAR_03.png'),
  4: require('../assets/5-Star_rating_system_PCAR_04.png'),
  5: require('../assets/5-Star_rating_system_PCAR_05.png')
}

export const RatingDynamic = ({props}:any) => {
    // console.log(props.Rating);

    return (
        <Image 
            style={{ width: 150, height: 50,resizeMode: "contain"  }}
            source={ratingMap[props.Rating]}
        />    
    )
}
