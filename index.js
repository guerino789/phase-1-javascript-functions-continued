function saturdayFun(acticity = "roller-skate"){
    return `This Saturday, I want to ${acticity}!`
}

function mondayWork(acticity= "go to the office"){
    return `This Monday, I will ${acticity}.`
}

let wrapAdjective = function(style="*") {
    return function(adjective="special") {
      return `You are ${style}${adjective}${style}!`
    }
  }