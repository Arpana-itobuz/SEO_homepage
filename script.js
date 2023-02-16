const ourPlans = document.querySelectorAll('.websiteCostPlans')
const navBarItems = document.querySelectorAll('a')
console.log(ourPlans);

ourPlans.forEach((item)=>{
    item.addEventListener("mouseover",function(){
        console.log('hi');
        item.style.transform="scale(1.2)";
        item.style.transition="transform 2s"
    })

    item.addEventListener("mouseout",function(){
        console.log('hi');
        item.style.transform="scale(1)";
        item.style.transition="transform 1s"
    })
})

navBarItems.forEach((item)=>{
    item.addEventListener("mouseover",function(){
        // item.style.color="red"
        item.style.borderBottom="1px groove "
        // item.style.animation
        
    })

    item.addEventListener("mouseout",function(){
        item.style.borderBottom="none"
        // item.style.color="black"
    })
})
