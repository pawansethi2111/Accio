import React from "react";
import img1 from "../assets/scenery.jpg"

const About = ()=>{
    return(
        <div className="about">
             <h2> About Me </h2>

             {/* <img src="https://i.ytimg.com/vi/Q49kJeG6nr8/maxresdefault.jpg" alt="Mr Beast" /> */}

             <img src={img1} alt="Mr Beast" />


             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem quos eos ut temporibus deserunt. Nihil quas reiciendis, quam debitis error aperiam, nesciunt illum harum esse sequi nulla deserunt, unde dolorem suscipit dolores sint est accusantium deleniti eius minima. Et vero voluptate dolorum? Maxime, libero molestias. Dignissimos quidem atque ut, laborum possimus distinctio id quod aspernatur nisi perferendis beatae necessitatibus praesentium soluta vel quia maiores aliquam impedit sint labore in sit deleniti aperiam. Quam doloribus omnis maxime iste ullam reprehenderit voluptatibus numquam, obcaecati rem! Magni, natus inventore. Sapiente voluptates, impedit asperiores ipsa quae quod nesciunt. Quia reiciendis provident beatae culpa consequatur.</p>
        </div>
    )
}

export default About;