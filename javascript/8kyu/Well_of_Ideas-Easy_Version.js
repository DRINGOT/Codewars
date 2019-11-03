// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'..
//  If there are one or two good ideas, return 'Publish!', 
//  if there are more than 2 return 'I smell a series!'. 
//  If there are no good ideas, as is often the case, return 'Fail!'.

// Solution(1)
well = x => {
    let goodIdeas = x.filter(idea => idea === 'good').length
    if (goodIdeas > 2) {
        return 'I smell a series!'
    }
    if (goodIdeas > 0) {
        return 'Publish!'
    } else {
        return 'Fail!'
    }
}